import axios from 'axios';
import IEventRepository from './interfaces/IEventRepository';
import config from '../../../config';

export default class EventRepository implements IEventRepository {
  getByUserIdAndDay(id: number, day: number) {
    return axios
      .get(config.coreUrl + '/events/by_user/' + id + '/by_day/' + day)
      .then((response) => response.data)
      .catch((err) => err);
  }
  getByAlertId(id: number) {
    return axios
      .get(config.coreUrl + '/events/by_alert/' + id)
      .then((response) => response.data)
      .catch((err) => err);
  }
}
