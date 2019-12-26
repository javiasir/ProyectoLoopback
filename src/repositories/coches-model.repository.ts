import {DefaultCrudRepository} from '@loopback/repository';
import {CochesModel, CochesModelRelations} from '../models';
import {CochesDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CochesModelRepository extends DefaultCrudRepository<
  CochesModel,
  typeof CochesModel.prototype.id,
  CochesModelRelations
> {
  constructor(
    @inject('datasources.cochesDS') dataSource: CochesDsDataSource,
  ) {
    super(CochesModel, dataSource);
  }
}
