import IDevice from '../../../entities/interfaces/IDevice';
import IResponse from '../../../entities/interfaces/IResponse';

export default interface IDeviceRepository {
  getByCompanyId(id: number): Promise<Array<IDevice> | null>;
  getByMac(mac: string): Promise<IDevice | null>;
  add(device: IDevice): Promise<IResponse | Error>
}
