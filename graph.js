class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(name) {
    if (!this.adjacencyList[name]) this.adjacencyList[name] = []; 
  }
}

let name = "firstKey";

let graph = new Graph();
graph.addVertex(name);
graph.addVertex("secondKey");

console.log(graph);