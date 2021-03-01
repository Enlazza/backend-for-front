import axios from 'axios';
import IAlertRepository from './interfaces/IAlertRepository';
import config from '../../../config';
import IAlert from '../../entities/interfaces/IAlert';

export default class AlertRepository implements IAlertRepository {
  getByCompanyId(id: number) {
    return axios
      .get(config.coreUrl + '/alerts/by_company/' + id)
      .then((response) => response.data)
      .catch((err) => err);
  }

  updateStatusById(id: number, status: number) {
    const body = { status };
    return axios
      .put(config.coreUrl + '/alerts/' + id + '/status', body)
      .then((response) => response.data)
      .catch((err) => err);
  }

  getByAlertId(id: number) {
    return axios
      .get(config.coreUrl + '/alerts/' + id)
      .then((response) => response.data)
      .catch((err) => err)
  }

  deleteById(id: number) {
    return axios
      .delete(config.coreUrl + '/alerts/' + id + '/delete/')
      .then((response) => response.data)
      .catch((err) => err);
  }

  updateById(id: number, data: IAlert) {
    return axios
      .put(config.coreUrl + '/alerts/' + id + '/edit', data)
      .then((response) => response.data)
      .catch((err) => err);
  }

  add(data: IAlert) {
    return axios
      .post(config.coreUrl + '/alerts/add', data)
      .then((response) => response.data)
      .catch((err) => err);
  }

  getByDeviceId(id: number) {
    return axios
      .get(config.coreUrl + '/alerts/by_device' + id)
      .then((response) => response.data)
      .catch((err) => err);
  }
}
