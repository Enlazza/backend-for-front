import axios from 'axios';
import IEventRepository from './interfaces/IEventRepository';
import config from '../../../config';

export default class EventRepository implements IEventRepository {
  getByUserIdAndDay(id: number, day: number) {
    return axios
      .get(config.coreUrl + '/alerts/' + id + '/' + day)
      .then((response) => response.data)
      .catch((err) => err);
  }
}