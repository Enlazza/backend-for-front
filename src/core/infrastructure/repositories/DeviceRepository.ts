import axios from 'axios';
import IDeviceRepository from './interfaces/IDeviceRepository';
import config from '../../../config';
import IDevice from '../../entities/interfaces/IDevice'

export default class DeviceRepository implements IDeviceRepository {

  getByUserId(id: number) {
    return axios
      .get(config.coreUrl + '/devices/by_user/' + id)
      .then((response) => response.data)
      .catch((err) => err);
  }

  getByMac(mac: string) {
    return axios
      .get(config.coreUrl + '/devices/' + mac)
      .then((response) => response.data)
      .catch((err) => err);
  }

  add(id: number, data: IDevice) {
    return axios
      .post(config.coreUrl + '/devices/add', data)
      .then((response) => response.data)
      .catch((err) => err);
  }
}
