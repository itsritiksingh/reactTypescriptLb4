import {Model, model, property} from '@loopback/repository';

@model()
export class SolutionState extends Model {
  @property({
    type: 'array',
    itemType: 'number',
    required: true,
  })
  array: number[];

  @property({
    type: 'number',
  })
  sum?: number;


  constructor(data?: Partial<SolutionState>) {
    super(data);
  }
}

export interface SolutionStateRelations {
  // describe navigational properties here
}

export type SolutionStateWithRelations = SolutionState & SolutionStateRelations;
