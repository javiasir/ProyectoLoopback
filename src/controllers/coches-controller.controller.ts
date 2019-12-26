import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {CochesModel} from '../models';
import {CochesModelRepository} from '../repositories';

export class CochesControllerController {
  constructor(
    @repository(CochesModelRepository)
    public cochesModelRepository : CochesModelRepository,
  ) {}

  @post('/coches', {
    responses: {
      '200': {
        description: 'CochesModel model instance',
        content: {'application/json': {schema: getModelSchemaRef(CochesModel)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CochesModel, {
            title: 'NewCochesModel',
            
          }),
        },
      },
    })
    cochesModel: CochesModel,
  ): Promise<CochesModel> {
    return this.cochesModelRepository.create(cochesModel);
  }

  @get('/coches/count', {
    responses: {
      '200': {
        description: 'CochesModel model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(CochesModel)) where?: Where<CochesModel>,
  ): Promise<Count> {
    return this.cochesModelRepository.count(where);
  }

  @get('/coches', {
    responses: {
      '200': {
        description: 'Array of CochesModel model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(CochesModel, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(CochesModel)) filter?: Filter<CochesModel>,
  ): Promise<CochesModel[]> {
    return this.cochesModelRepository.find(filter);
  }

  @patch('/coches', {
    responses: {
      '200': {
        description: 'CochesModel PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CochesModel, {partial: true}),
        },
      },
    })
    cochesModel: CochesModel,
    @param.query.object('where', getWhereSchemaFor(CochesModel)) where?: Where<CochesModel>,
  ): Promise<Count> {
    return this.cochesModelRepository.updateAll(cochesModel, where);
  }

  @get('/coches/{id}', {
    responses: {
      '200': {
        description: 'CochesModel model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(CochesModel, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(CochesModel)) filter?: Filter<CochesModel>
  ): Promise<CochesModel> {
    return this.cochesModelRepository.findById(id, filter);
  }

  @patch('/coches/{id}', {
    responses: {
      '204': {
        description: 'CochesModel PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CochesModel, {partial: true}),
        },
      },
    })
    cochesModel: CochesModel,
  ): Promise<void> {
    await this.cochesModelRepository.updateById(id, cochesModel);
  }

  @put('/coches/{id}', {
    responses: {
      '204': {
        description: 'CochesModel PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cochesModel: CochesModel,
  ): Promise<void> {
    await this.cochesModelRepository.replaceById(id, cochesModel);
  }

  @del('/coches/{id}', {
    responses: {
      '204': {
        description: 'CochesModel DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cochesModelRepository.deleteById(id);
  }
}
