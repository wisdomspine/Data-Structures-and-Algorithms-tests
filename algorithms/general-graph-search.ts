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
  const visitedVertices: Set<Vertex> = new Set();
  const queue: Vertex[] = [];

  visitedVertices.add(rootVertex);
  queue.push(rootVertex);

  let current: Vertex;
  while (queue.length > 0) {
    current = queue.shift();
    for (const neighbour of current.neighbours) {
      if (!visitedVertices.has(neighbour)) {
        visitedVertices.add(neighbour);
        queue.push(neighbour);
      }
    }
  }
  return reachableVertices;
}
