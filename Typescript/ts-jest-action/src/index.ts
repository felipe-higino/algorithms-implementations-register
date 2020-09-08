import { TestActionClass as t1 } from './Action_tests';
import { Action } from "./Action";

let myAction = new Action();

myAction.AddCallback(()=>console.log('iae'))
myAction.AddCallback(()=>console.log('coe'))

myAction.Invoke();