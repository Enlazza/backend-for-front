import axios from 'axios';
import IModelRepository from './interfaces/IModelRepository';
import config from '../../../config';

export default class ModelRepository implements IModelRepository {
  getAll() {
    return axios
      .get(config.coreUrl + '/models')
      .then((response) => response.data)
      .catch((err) => err);
  }
}