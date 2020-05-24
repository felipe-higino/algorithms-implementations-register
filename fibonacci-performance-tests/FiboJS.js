const { performance } = require('perf_hooks');
let calculaFibonacci = (i)=>{
    if(i <= 1){
      return i;
    }
      return calculaFibonacci(i-2) + calculaFibonacci(i-1);
}

var t0 = performance.now()

console.log(calculaFibonacci(40))

var tf = performance.now()
console.log(tf-t0);
