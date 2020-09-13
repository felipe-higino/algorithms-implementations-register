import { Instantiable } from "../Auxiliars/Instantiable";

interface Edge{
  vertex_i:Vertex,
  vertex_f:Vertex,
  value: number
}

export class Vertex extends Instantiable{
  public name:string
  private neighbours : Edge[]
  get Neighbours(){
    return this.neighbours as ReadonlyArray<Edge>
  }

  constructor(name='node'){
    super()
    this.name = name
    this.neighbours = []
  }

  AddNeighbour(vertex:Vertex, val:number){
    const edge = { vertex_i:this, vertex_f:vertex, value:val } as Edge 
    this.neighbours.push(edge)
  }

  RemoveNeighbour(neighbour:Vertex){
    this.neighbours =
      this.neighbours.filter((item)=>{
        item.vertex_f !== neighbour
      })
  }
}
