export class IndexMaker<T>{
  private listOfThings:T[] = []
  
  get ListOfThings(){
    let list:ReadonlyArray<T> = 
      this.listOfThings
    return list
  }

  AddItem(item:T){
    this.listOfThings.push(item)
  }

  RemoveItem(item:T){
    this.listOfThings =
     this.listOfThings.filter((thing)=>{
       return thing !== item
     })
  }

  GetIndex(item:T){
    let idx = this.listOfThings.indexOf(item)
    return idx;
  }

}