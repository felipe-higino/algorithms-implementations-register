// callbacks
//-- event-registred functions

const myCallback = ()=>{ console.log("hello, world!") }
const asyncCB = ()=> 
    setInterval( myCallback , 2000);//registers function to an event called every 2 seconds

// promisses
//-- objects that returns .then or .catch (or .finally)

let x = true//pseudo-condition to fail or succeed

const createPromisse = () => new Promise((res,rej) =>{
    setTimeout(()=>{
        if(x)
            res("all went right!")
        else
            rej("something went wrong...")
    }, 3000)
})

const callProm = ()=>{
    createPromisse()
        .then(ok =>console.log(ok))
        .catch(no=>console.log(no))
}

//async/await
//-- syntatic sugar to not write a hadouken "then, return and catch hell"
const callAW = async()=>{
    console.log("---first line");
    try{
        //here, this scope execution freezes until promisse returns something
        let x = await createPromisse()
        console.log(x)
    }catch(err){
        console.log(err)
    }
}