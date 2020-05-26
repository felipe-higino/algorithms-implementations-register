//this is a simulation of a custom promisse

function customPromisse( myfoo, rej, res){
    this.onResolve = rej
    this.onReject  = res
    myfoo(this.onResolve , this.onReject)
}

let x = true
const myPromisse = () => new customPromisse( (res,rej)=>{
    setTimeout(() => {
        if(x)
            res("all went right!")
        else
            rej("something went wrong...")
    }, 3000);
}, onRej, onRes)

const onRej = (ok)=>console.log(ok)
const onRes = (no)=>console.log(no);

myPromisse()