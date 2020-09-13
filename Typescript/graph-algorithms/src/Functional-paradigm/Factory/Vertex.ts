export interface Vertex{
  readonly name:string,
  readonly neighbours: readonly Vertex[]
}

export function createVertex(name="node"):Vertex{
  const vertex = {
    name:name,
    neighbours:[]
  } as Vertex
  return vertex
}

export function addNeighbour(prev:Vertex, neighbour:Vertex):Vertex{
  const vertex = {
    name:prev.name,
    neighbours:[...prev.neighbours, neighbour]
  } as Vertex
  return vertex
}
