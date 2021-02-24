import axios from 'axios';
import IDeviceRepository from './interfaces/IDeviceRepository';
import config from '../../../config';

export default class DeviceRepository implements IDeviceRepository {
  getAll() {
    return axios.get(config.coreUrl + '/devices')
      .then((response) => response.data)
      .catch((err) => err);
  }
}
