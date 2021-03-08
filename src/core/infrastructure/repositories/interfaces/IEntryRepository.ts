import IEntry from '../../../entities/interfaces/IEntry';
import IResponse from '../../../entities/interfaces/IResponse';

export default interface IEntryRepository {
  getByDeviceId(id: number): Promise<Array<IEntry> | null>;
  add(data: IEntry): Promise<IResponse | null>;
  deleteById(id: number): Promise<IResponse | null>;
}