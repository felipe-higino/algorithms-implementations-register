const reducedArray = [1,2,3,4].reduce((cache, curr)=> cache += curr, 0)
reducedArray

const myReduce =
    (myFunction:Function, firstVal=0, myArray=[1,2])=>
    {
        let toReturn = firstVal
        for (let index = 0; index < myArray.length; index++) {
            toReturn = myFunction(toReturn, myArray[index])
        }
        return toReturn
    }

const myReducedArray = myReduce((cache, curr)=> cache += curr, 0, [1,2,3,4])
myReducedArray