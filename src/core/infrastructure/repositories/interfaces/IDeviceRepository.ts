import IDevice from '../../../entities/interfaces/IDevice';

export default interface IDeviceRepository {
  getByUserId(id: number): Promise<Array<IDevice> | null>;
  getByMac(mac: string): Promise<IDevice | null>;
  add(id: number, device: IDevice): Promise<IDevice | Error>
}
