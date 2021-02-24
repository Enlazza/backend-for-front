import IDevice from '../../../entities/interfaces/IDevice';

export default interface IDeviceRepository {
  getAll(): Promise<Array<IDevice> | null>;
}