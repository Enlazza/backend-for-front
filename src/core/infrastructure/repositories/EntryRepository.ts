import axios from 'axios';
import IEntryRepository from './interfaces/IEntryRepository';
import config from '../../../config';
import IEntry from '../../entities/interfaces/IEntry';

export default class EntryRepository implements IEntryRepository {
  getByDeviceId(id: number) {
    return axios
      .get(config.coreUrl + '/entries/by_device/' + id)
      .then((response) => response.data)
      .catch((err) => err);
  }

  add(data: IEntry) {
    return axios
      .post(config.coreUrl + '/entries/add', data)
      .then((response) => response.data)
      .catch((err) => err);
  }

  deleteById(id: number) {
    return axios
      .delete(config.coreUrl + '/entries/' + id + '/delete/')
      .then((response) => response.data)
      .catch((err) => err);
  }
}
