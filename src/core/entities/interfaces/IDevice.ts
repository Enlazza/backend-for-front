import IDeviceAttributes from './IDeviceAttributes';

export default interface IDevice extends IDeviceAttributes {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
