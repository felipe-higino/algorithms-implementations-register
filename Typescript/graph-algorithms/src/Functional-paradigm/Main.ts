import * as g from "./Graph";

type times = {
  
}
class DFSParticle{
  readonly vertex: g.atom
  readonly startTime : number
  endTime : number|undefined

  constructor(v:g.atom,i:number){
    this.vertex = v
    this.startTime = i,
    this.endTime = undefined
  }
}

const A = g.createAtom('A')
const B = g.createAtom('B')
const C = g.createAtom('C')
const D = g.createAtom('D')
const E = g.createAtom('E')
const F = g.createAtom('F')
const G = g.createAtom('G')
const H = g.createAtom('H')

const adjList:g.adjacencyList = [
  [A, [B]],
  [B, [C,F,E]],
  [C, [D,G]],
  [C, [D,G]],
  [D, [C,H]],
  [E, [A,F]],
  [F, [G]],
  [G, [F,H]],
  [H, [H]]
]

/**
 * Returns a DFSForest, with start and end times
 */
export default function depthFirstSearch(
  adjacencyList:g.adjacencyList, 
  initial = adjacencyList[0][0])
{
  const initialLine = adjacencyList.find(line=>line[0] == initial)
  
  if(!initialLine)
    return undefined
    
  const discovered:DFSParticle[] = 
  (function IterativeSearch(line = initialLine, currentTime = 1){
    let particles:DFSParticle[] = []

    particles.push( new DFSParticle(line[0], currentTime) )

    return particles
  })()

  return discovered
}

// console.log(depthFirstSearch(adjList, {} as g.atom));
// console.log(depthFirstSearch(adjList, B));
console.log(depthFirstSearch(adjList, A));
