const filteredArray = [1,2,3,4].filter(element=>element!=1)
filteredArray

const myFilter =
    (myFunction:Function, myArray=[1,2])=>
    {
        let toReturn = []
        for (let index = 0; index < myArray.length; index++) 
        {
            const element = myArray[index]
            if(myFunction(element))
                toReturn.push(element)
        }
        return toReturn
    }

const myFilteredArray = myFilter(element => element != 1, [1,2,3,4])
myFilteredArray