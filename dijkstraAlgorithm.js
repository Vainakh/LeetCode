class WeightedGraph {
  constructor() {
    this.adjancencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjancencyList[vertex]) return this.adjancencyList[vertex] = []; 
  }
}