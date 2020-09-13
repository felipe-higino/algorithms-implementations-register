import { IndexMaker } from "./index-maker";

export abstract class Instantiable{
  private readonly Idx = new IndexMaker<this>()

  get Index(){
    return this.Idx.GetIndex(this)
  }

  constructor(){
    this.Idx.AddItem(this)
  }

  Delete(){
    this.Idx.RemoveItem(this)
  }
}