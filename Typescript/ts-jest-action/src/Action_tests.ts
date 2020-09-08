import { Action } from './Action'

export function TestActionClass(){

  let myAction = new Action();
  myAction.AddCallback( () =>console.log("call") )
  
  function FazAlgo(x:Number){
    console.log(x);
  }
  
  function SomeCallback(){
    FazAlgo(3);
  }
  
  myAction.AddCallback(SomeCallback)
  myAction.AddCallback(SomeCallback)
  
  // myAction.RemoveCallback(SomeCallback)
  
  myAction.Invoke();

}