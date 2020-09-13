import * as g from "./Graph";

type times = {
  startTime : number,
  endTime : number
}
type DFSParticle = {
  vertex: g.atom,
  times: times
}
type DFSForest = DFSParticle[]

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
  let discoveredVertexes:g.atom[] = []
}