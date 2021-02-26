import axios from 'axios';
import IEventRepository from './interfaces/IEventRepository';
import config from '../../../config';

export default class EventRepository implements IEventRepository {
  getByUserIdAndDay(id: number, day: number) {
    return axios
      .get(config.coreUrl + '/users/' + id + '/events/' + day)
      .then((response) => response.data)
      .catch((err) => err);
  }
  getByAlertId(id: number) {
    return axios
      .get(config.coreUrl + '/alerts/' + id + '/events')
      .then((response) => response.data)
      .catch((err) => err);
  }
}
