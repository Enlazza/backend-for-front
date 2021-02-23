import DeviceModel from '../models/DeviceModel';
import MeasurementModel from '../models/MeasurementModel';

import IDeviceRepository from './interfaces/IDeviceRepository';
import IMeasurementAttributes from '../models/interfaces/IMeasurementAttributes';
import IDeviceAttributes from '../models/interfaces/IDeviceAttributes';

const DeviceRepository: IDeviceRepository = {
  create(device: IDeviceAttributes) {
    return DeviceModel.create(device);
  },

  addMeasurement(deviceId: number, measurement: IMeasurementAttributes) {
    return MeasurementModel.create({ deviceId, ...measurement });
  },

  findByMac(mac: string) {
    return DeviceModel.findOne({ where: { mac } });
  },
};

export default DeviceRepository;
