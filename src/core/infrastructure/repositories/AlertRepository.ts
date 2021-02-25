import axios from 'axios';
import IAlertRepository from './interfaces/IAlertRepository';
import config from '../../../config';
import IDevice from '../../entities/interfaces/IDevice'
import IUser from '../../entities/interfaces/IUser'

export default class AlertRepository implements IAlertRepository {
  getByUserId(id: number) {
    return axios
      .get(config.coreUrl + '/user/' + id + '/alerts')
      .then((response) => response.data)
      .catch((err) => err);
  }

  getByAlertId(id: number) {
    return axios
      .get(config.coreUrl + '/alerts/' + id)
      .then((response) => response.data)
      .catch((err) => err)
  }

  updateStatusById(id: number, status: number) {
    const body = { status };
    return axios
      .put(config.coreUrl + '/alerts/' + id + '/status', body)
      .then((response) => response.data)
      .catch((err) => err);
  }

  deleteById(id: number) {
    return axios
      .delete(config.coreUrl + '/alerts/delete/' + id)
      .then((response) => response.data)
      .catch((err) => err);
  }
}
