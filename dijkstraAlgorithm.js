class PriorityQueue {
  constructor() {
    this.values = [];
  }
}








class WeightedGraph {
  constructor() {
    this.adjancencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjancencyList[vertex]) return this.adjancencyList[vertex] = []; 
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjancencyList[vertex1].push({node: vertex2, weight});
    this.adjancencyList[vertex2].push({node: vertex1, weight});
  }
}

let graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B", 9);
graph.addEdge("A", "C", 5);
graph.addEdge("B", "C", 7);

console.log(graph);