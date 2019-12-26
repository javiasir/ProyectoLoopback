import {Entity, model, property} from '@loopback/repository';

@model()
export class CochesModel extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  marca: string;

  @property({
    type: 'string',
    required: true,
  })
  modelo: string;

  @property({
    type: 'string',
  })
  imagen?: string;


  constructor(data?: Partial<CochesModel>) {
    super(data);
  }
}

export interface CochesModelRelations {
  // describe navigational properties here
}

export type CochesModelWithRelations = CochesModel & CochesModelRelations;
