import axios from 'axios';
import IDeviceRepository from './interfaces/IDeviceRepository';
import config from '../../../config';
import IDevice from '../../entities/interfaces/IDevice'

export default class DeviceRepository implements IDeviceRepository {
  getAll() {
    return axios
      .get(config.coreUrl + '/devices')
      .then((response) => response.data)
      .catch((err) => err);
  }

  getById(id: number) {
    return axios
      .get(config.coreUrl + '/devices/' + id)
      .then((response) => response.data)
      .catch((err) => err);
  }

  getByMac(mac: string) {
    return axios
      .get(config.coreUrl + '/devices/' + mac)
      .then((response) => response.data)
      .catch((err) => err);
  }

  create(deviceData: IDevice) {
    return axios
      .post(config.coreUrl + '/devices/add', deviceData)
      .then((response) => response.data)
      .catch((err) => err);
  }
}
