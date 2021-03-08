import IDevice from '../../../entities/interfaces/IDevice';
import IModel from '../../../entities/interfaces/IModel';
import IResponse from '../../../entities/interfaces/IResponse';

export default interface IDeviceRepository {
  getByCompanyId(id: number): Promise<Array<IDevice & IModel> | null>;
  getByMac(mac: string): Promise<IDevice | null>;
  add(device: IDevice): Promise<IResponse | Error>
}
