// nodes(vertices) + connections(edges)

class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }

    removeEdge(v1,v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(vertex=> vertex!= v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(vertex=> vertex!= v1)
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }

        delete this.adjacencyList[vertex];
    }
}

let g = new Graph();

g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("London");
g.addVertex("India");

g.addEdge("Dallas","London");
g.addEdge("Tokyo","Dallas");
g.addEdge("Tokyo","India");
g.addEdge("India","Dallas");

g.removeEdge("Tokyo","Dallas");

g.removeVertex("Tokyo");