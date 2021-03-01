import IEntry from '../../../entities/interfaces/IEntry';

export default interface IEntryRepository {
  getByDeviceId(id: number): Promise<Array<IEntry> | null>;
  add(data: IEntry): Promise<IEntry | null>;
  deleteById(id: number): Promise<IEntry | null>;
}