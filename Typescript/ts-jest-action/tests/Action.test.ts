import { Action } from "../src/Action";

test("Add a callback", ()=>{
  let myAction = new Action();
  const callback = ()=>'TESTE'
  myAction.AddCallback(callback)
  let msg = myAction.CallbackList[1]()
  expect(msg).toBe('TESTE')

})

test("Remove callback", ()=>{
  let myAction = new Action();
  const callback = ()=>{}
  myAction.AddCallback(callback)
  myAction.RemoveCallback(callback)
  let isEmpty = myAction.CallbackList.length == 1
  expect(isEmpty)
})

test('', ()=>{
  let myAction = new Action();
  myAction.Invoke();
})