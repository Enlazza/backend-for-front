import IDevice from '../../../entities/interfaces/IDevice';

export default interface IDeviceRepository {
  getAll(): Promise<Array<IDevice> | null>;
  getById(id: number): Promise<IDevice | null>;
  getByMac(mac: string): Promise<IDevice | null>;
}
