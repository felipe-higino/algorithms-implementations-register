const mappedArray = [1,2,3,4].map(element=>element+"!!")

const myMap =
    (myFunction:Function, myArray = [1,2]) =>
    {
        let toReturn = []
        for (let index = 0; index < myArray.length; index++) 
        {
            const newElement = myFunction(myArray[index])
            toReturn.push(newElement)
        }
        return toReturn
    }

const funcToCall = (elementoDaLista) => elementoDaLista + "!!"
const myMappedArray = myMap(funcToCall, [1,2,3,4])
myMappedArray