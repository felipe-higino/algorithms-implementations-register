import { Vertex } from "../Vertex";
import { Instantiable } from "../../Auxiliars/Instantiable";

export class Edge extends Instantiable{
  public Vertex1:Vertex
  public Vertex2:Vertex
  public Value:number

  constructor(v1 = new Vertex(), v2 = new Vertex(), value = 0){
    super()
    this.Vertex1 = v1
    this.Vertex2 = v2
    this.Value = value
  }
}

