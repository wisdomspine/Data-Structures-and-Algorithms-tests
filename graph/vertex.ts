import { BaseModel } from '../core/base-model';

export class Vertex<T = unknown> extends BaseModel<Vertex<T>> {
  data: T;
  /**
   * an array of neighbouring  nodes
   */
  neighbours: Array<Vertex<T>> = [];
}
