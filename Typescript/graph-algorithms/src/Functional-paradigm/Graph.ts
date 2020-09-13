interface atom {readonly name:string}
type edge = readonly [atom, atom]
type graph = readonly edge[]

function createAtom(name:string|number){
  if(name as number)
    name = name.toString()
  return {name:name} as atom
}

function getListOfAtoms(graph:graph){
  let repeatedAtomList:atom[] = []
  graph.forEach(edge=>{
    edge.forEach(atom=>{
      repeatedAtomList.push(atom)
    })
  })
  return [...new Set(repeatedAtomList)]
}

type adjacencyLine = [atom, atom[]]
type adjacencyList = adjacencyLine[]

function getListOfAdjacency(graph:graph, getList = getListOfAtoms):adjacencyList{
  const listOfAtoms = getList(graph)
  const adjList = listOfAtoms.map(atom=>{
    const includes = graph.filter(edge=>{
      return edge[0] == atom || edge[1] == atom
    })    
    const adjacents = includes.map(element=>{
      return element[0] == atom ? element[1] : element[0]
    })
    return [atom, adjacents] as adjacencyLine
  })
  return adjList
}

export{
  atom, edge, graph,
  adjacencyLine, adjacencyList,
  createAtom,
  getListOfAtoms,
  getListOfAdjacency
}