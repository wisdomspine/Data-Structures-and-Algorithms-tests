import { BaseModel } from '../core/base-model';
import { Edge } from './edge';
import { Vertex } from './vertex';

export class Graph extends BaseModel<Graph> {
  vertices: Array<Vertex> = [];
}
