import axios from 'axios';
import IEventRepository from './interfaces/IEventRepository';
import config from '../../../config';

export default class EventRepository implements IEventRepository {
  getLatestByCompanyId(id: number) {
    return axios
      .get(config.coreUrl + '/events/by_company/' + id + '/latest')
      .then((response) => response.data)
      .catch((err) => err);
  }

  getByAlertId(id: number) {
    return axios
      .get(config.coreUrl + '/events/by_alert/' + id)
      .then((response) => response.data)
      .catch((err) => err);
  }

  getByDeviceIdByDates(id: number, date1: Date, date2: Date) {
    return axios
      .get(config.coreUrl + '/events/by_device/' + id + '/between_dates', { params: { date1: date1, date2: date2 } })
      .then((response) => response.data)
      .catch((err) => err);
  }

}
