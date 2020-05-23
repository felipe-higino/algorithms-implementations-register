const multipleFors = 
    (numberOfFors = 1, combinationsRef=[], prev = [])=>
    {
        for (let i = 0; i < 2; i++) {
            //true=0 /false=1
            let thisBool = true //true = 1
            if (i == 1)
                thisBool = false//false = 0

            //registers the previous for's "thisBool"
            const actualComb = prev.concat([thisBool])

            //call another for
            if(numberOfFors != 1)
                multipleFors(numberOfFors-1, combinationsRef, actualComb)
            //recursion stop condition, returns an combination by reference
            else
                combinationsRef.push(actualComb)
        }
    }

const allTrueFalseCombinations = 
    (numberOfVariables=1)=>
    {
        let combinations = []//[ [true,true], [true,false], [false,true], [false,false] ]
        multipleFors(numberOfVariables, combinations)//combinations changed by reference
        return combinations
    }

// console.log(allTrueFalseCombinations(5));

const translateFormula = 
    (formula="(p^q)")=>{
        let copyFormula = formula
        copyFormula = copyFormula.replace(/<->/g, "==")
        copyFormula = copyFormula.replace(/->/g, "<=")
        copyFormula = copyFormula.replace(/~/g, "!")
        copyFormula = copyFormula.replace(/v/g, " || ")
        copyFormula = copyFormula.replace(/\^/g, " && ")
        return copyFormula
    }

const setOfVariables = 
    (formula = "p^q")=>
    {
        const repeatedVars = formula.match(/\w/g)
        return [...new Set(repeatedVars)]
    }

const formulaSolutions =
    (formula = "(p<->q)")=>
    {
        let translation = translateFormula(formula)   //(p<=q)
        const set = setOfVariables(translation)         //[p,q]
        const combinations = allTrueFalseCombinations(set.length)//[[true,true],[true,false],...]
        set.forEach( (element,index) => {
            const rgx = new RegExp(element,"g")// /p/g and /q/g (regex)
            translation = translation.replace(rgx, `v[${index}]`) //[v[0]<=v[1]]
        })
        const solutions = combinations.map( function(combination){
            v = combination
            // return eval("(combination[0]<=(!combination[0] && combination[1]))  &&  (combination[2] && (combination[0]==!combination[1]))")
            return eval(translation)
        })
        return solutions
    }

// input any logic formula here
console.log( formulaSolutions( "(p->(~p^r)) ^ (qv(p<->~r))" ) );
