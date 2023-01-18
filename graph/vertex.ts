import { BaseModel } from '../core/base-model';
import { Edge } from './edge';

export class Vertex<T = unknown> extends BaseModel<Vertex<T>> {
  data: T;
  isVisited: boolean = false;
  /**
   * an array of incidented edges
   */
  edges: Array<Edge> = [];
}
