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