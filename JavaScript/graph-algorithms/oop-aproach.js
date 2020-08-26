let currentIndex = 0;

class Node{
    constructor() {
        this.CurrentIndex = currentIndex;
        currentIndex++;
    }
}

class Edge{
    constructor(firstNode, secondNode) {
        this.firstNode = firstNode;
        this.secondNode = secondNode;
    }
}

class Graph{
    constructor(...Edges) {
        Edges.forEach(element => {
            console.log(element.firstNode);
            console.log(element.secondNode);
        });
    }
}

let node1 = new Node();
let node2 = new Node();
let node3 = new Node();

let edge1 = new Edge(node1, node2);
let edge2 = new Edge(node1, node3);

let graph1 = new Graph(edge1, edge2);
