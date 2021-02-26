import axios from 'axios';
import IMeasurementRepository from './interfaces/IMeasurementRepository';
import config from '../../../config';

export default class MeasurementRepository implements IMeasurementRepository {
  getLatestByRouterId(id: number) {
    return axios
      .get(config.coreUrl + '/measurements/by_router/' + id)
      .then((response) => response.data)
      .catch((err) => err);
  }

  getByRouterIdByDates(id: number, date1: Date, date2: Date) {
    return axios
      .get(config.coreUrl + '/measurements/by_router/' + id + '/between_dates', { params: { date1: date1, date2: date2 } })
      .then((response) => response.data)
      .catch((err) => err);
  }
}
