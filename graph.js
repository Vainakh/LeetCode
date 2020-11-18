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
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1);
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      let adjecentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjecentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  DFSrecursive(start) {
    let result= [];
    let visited = {};
    let adjacencyList = this.adjacencyList;
    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
        adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
        return dfs(neighbor);
        }
      });
    })(start);
    return result;
  }
  DFSiterative(start) {
    let stack = [start];
    let result = [];
    let visited = {};
    let currentVertex;

    visited[start] = true;
    while(stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
  BFS(start) {
    let queue = [start];
    let result = [];
    let visited = {};
    let current;
    visited[start] = true;
    
    while(queue.length) {
      current = queue.shift();
      result.push(current);
      this.adjacencyList[current].forEach(neighbor => {
        if(!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

// let vertex1 = "San Francisco";
// let vertex2 = "New York";
// let vertex3 = "Moscow";
let vertex = "A";
let graph = new Graph();
// graph.addVertex(vertex1);
// graph.addVertex(vertex2);
// graph.addVertex(vertex3);

// graph.addEdge(vertex1, vertex2);
// graph.addEdge(vertex2, vertex3);
// graph.addEdge(vertex3, vertex1);
// // graph.removeEdge(vertex1, vertex2);
// graph.removeVertex(vertex1);
// graph.removeVertex(vertex2);
// graph.removeVertex(vertex3);

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph.BFS(vertex));
// console.log(graph);