const allTrueFalseCombinations = 
  (numberOfVariables = 3) => {
    if(numberOfVariables<=0)
      return [];

    const bools = [true, false]
    return function recursion(iteration = 0, previousCombination = []){
      if(iteration == numberOfVariables)
        return previousCombination;
    
      if(iteration == 0){
        const i = iteration + 1 
        return recursion(i, [ [true], [false] ]) 
      }
      
      let answer = []
      previousCombination.forEach(arr=>{
        answer = answer.concat([ [...arr, true], [...arr, false] ])
      })

      const i = iteration + 1;
      return recursion(i, answer)
    }()
  }

const translateFormula =
  (formula = "(p^q)") =>
  {
    let copyFormula = formula
    copyFormula = copyFormula.replace(/<->/g, "==")
    copyFormula = copyFormula.replace(/->/g, "<=")
    copyFormula = copyFormula.replace(/~/g, "!")
    copyFormula = copyFormula.replace(/v/g, " || ")
    copyFormula = copyFormula.replace(/\^/g, " && ")
    return copyFormula
  }

const setOfVariables =
  (formula = "p^q") =>
  {
    const repeatedVars = formula.match(/\w/g)
    return [...new Set(repeatedVars)]
  }

const formulaSolutions =
  (formula = "(p<->q)") =>
  {
    let translation = translateFormula(formula)   //(p<=q)
    const set = setOfVariables(translation)         //[p,q]
    const combinations = allTrueFalseCombinations(set.length)//[[true,true],[true,false],...]
    
    set.forEach((element, index) =>
    {
      const rgx = new RegExp(element, "g")// /p/g and /q/g (regex)
      translation = translation.replace(rgx, `v[${index}]`) //[v[0]<=v[1]]
    })
    const solutions = combinations.map(function (combination)
    {
      v = combination
      // return eval("(combination[0]<=(!combination[0] && combination[1]))  &&  (combination[2] && (combination[0]==!combination[1]))")
      return eval(translation)
    })
    return solutions
  }

// input any logic formula here
console.log(formulaSolutions("(p->(~p^r)) ^ (qv(p<->~r))"));
/*
  and: (p^q)
  or:  (pvq)
  imp: (p->q)
  ioi: (p<->q)
  not: (~q)
*/
