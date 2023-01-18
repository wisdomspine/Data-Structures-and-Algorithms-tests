import { Vertex } from '../graph/vertex';

/**
 * An implementation of graph general search
 * Takes s, the vertex for which we want to find all vertices reachable from it
 * mark s as visited
 * add s to the list of rechable vertices
 * let edges keep track of edges
 * push s to edges
 * while there is an edge in edges
 *  remove edge from edges
 *  find the unvisited vertex of edge
 *  visit the unvisited vertex, add it to reachable vertices, and push it edges to edges
 *
 * return the accumulated reachable vertices
 */
export function generalGraphSearch(rootVertex: Vertex) {
  rootVertex.isVisited = true;
  const reachableVertices = [rootVertex];
  const edges = rootVertex.edges;

  let current: Edge;
  while (edges.length > 0) {
    current = edges.shift();
    if (current.source.isVisited && !current.destination.isVisited) {
      edges.push(...current.destination.edges);
      current.destination.isVisited = true;
      reachableVertices.push(current.destination);
    } else if (!current.source.isVisited && current.destination.isVisited) {
      edges.push(...current.source.edges);
      current.source.isVisited = true;
      reachableVertices.push(current.source);
    }
  }
  return reachableVertices;
}
