import * as g from '../src/Functional-paradigm/Graph'

const v1 = g.createAtom(1)
const v2 = g.createAtom(2)
const v3 = g.createAtom(3)
const v4 = g.createAtom(4)

const a1:g.edge = [v1,v2]
const a2:g.edge = [v2,v3]
const a3:g.edge = [v2,v4]
const a4:g.edge = [v4,v1]

const g1:g.graph = [a1,a2,a3,a4]

test('Adjacency list', ()=>{
  const listOfAtoms = g.getListOfAtoms(g1)
  expect(listOfAtoms).toStrictEqual([v1,v2,v3,v4])

  const listOfAdjacency = g.getListOfAdjacency(g1, ()=>listOfAtoms)
  expect(listOfAdjacency)
  .toStrictEqual([
    [ v1, [v2,v4] ],
    [ v2, [v1,v3,v4]],
    [ v3, [v2]],
    [ v4, [v2,v1]],//here, order is important
  ])
})