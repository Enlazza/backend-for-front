import IEntry from '../../entities/interfaces/IEntry';
import IEntryRepository from '../repositories/interfaces/IEntryRepository';

export default class EntriesService {
  private entryRepository: IEntryRepository;

  constructor(entryRepository: IEntryRepository) {
    this.entryRepository = entryRepository;
  }

  async getEntriesByDeviceId(id: number) {
    return this.entryRepository.getByDeviceId(id);
  };

  async add(data: IEntry) {
    return this.entryRepository.add(data);
  }

  async deleteById(id: number) {
    return this.entryRepository.deleteById(id);
  }
}