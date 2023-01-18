import { BaseModel } from '../core/base-model';
import { Vertex } from './vertex';

export class Edge extends BaseModel<Edge> {
  /**
   * source vertex
   */
  source!: Vertex;

  /**
   * destination vertex
   */
  destination!: Vertex;
}
