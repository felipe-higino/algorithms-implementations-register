function DeepFirstSearch
(graph = [[0,1],[0,2]], firstNode = 0)
{
    let nodes = []  //[0,1,2]
    graph.map((edge)=>{
        edge.map((node)=>{
            if(!nodes.includes(node))
                nodes.push(node);
        })
    })

    let adjacecyList =    //[[0,1,2],[1,0][2,0]]
    nodes.map((node)=>{
        let adj = []
        adj.push(node)

        let allEdgesWithCurrentNode =
        graph.filter((edge)=>{
            return edge.includes(node);
        })

        let adjacentVertexes = 
        allEdgesWithCurrentNode.map((edge_)=>{
            console.log(edge_);
            
            let otherNode = edge_.filter((node_)=>{
                node_ != node;
            })
            return otherNode;
        })
        //console.log(adjacentVertexes);
        return adj;
    })
    
    //console.log(adjacecyList);
    
    //return [[0,1],[0,2]]  //firstNode = 0
    //return [[1,0,2]]      //firstNode = 1
    //return [[2,0,1]]      //firstNode = 2
}

DeepFirstSearch();















