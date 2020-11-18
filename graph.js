class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(name) {
    if (!this.adjacencyList[name]) this.adjacencyList[name] = []; 
  }
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push(vertex2);
    if (this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push(vertex1);
  }
}

let vertex1 = "San Francisco";
let vertex2 = "New York";
let vertex3 = "Moscow";

let graph = new Graph();
graph.addVertex(vertex1);
graph.addVertex(vertex2);
graph.addVertex(vertex3);

graph.addEdge(vertex1, vertex2);
graph.addEdge(vertex2, vertex3);
graph.addEdge(vertex3, vertex1);

console.log(graph);