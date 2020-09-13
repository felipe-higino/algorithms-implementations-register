import { Vertex } from "./Vertex";

export interface Graph{
  readonly vertexes: readonly Vertex[]
}

export function createGraph(
  oldGraph:Graph = {vertexes:[]},
  newVertexes:readonly Vertex[] = []
  )
{
  const graph = {
    vertexes : [...oldGraph.vertexes, ...newVertexes]
  } as Graph
  return graph
}

// const _ = undefined
// const graph1 = createGraph(_, [{name:'firsto',neighbours:[]}])
// const graph2 = createGraph(graph1,[{name:'some',neighbours:[]},{name:'some2',neighbours:[]}])
// console.log(graph2);
