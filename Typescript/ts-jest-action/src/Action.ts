export class Action{
  private callbackList :Function[] = [()=>true]
  readonly CallbackList : 
    ReadonlyArray<Function> = 
    this.callbackList; 

  AddCallback(callback:Function) {
    this.callbackList.push(callback)
  }

  RemoveCallback(callback:Function){
    let newList = this.callbackList.filter( (foo) => foo != callback)
    this.callbackList = newList;
  }

  Invoke(){
    this.callbackList.forEach((foo)=>foo())
  }
}