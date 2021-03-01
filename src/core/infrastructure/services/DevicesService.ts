import IDevice from '../../entities/interfaces/IDevice';
import IDeviceRepository from '../repositories/interfaces/IDeviceRepository';

export default class DevicesService {
  private deviceRepository: IDeviceRepository;

  constructor(deviceRepository: IDeviceRepository) {
    this.deviceRepository = deviceRepository;
  }

  async getDevicesByCompanyId(id: number) {
    return this.deviceRepository.getByCompanyId(id);
  };

  async add(data: IDevice) {
    return this.deviceRepository.add(data);
  }
}
