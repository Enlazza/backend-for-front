import IDeviceRepository from '../repositories/interfaces/IDeviceRepository';

export default class DevicesService {
  private deviceRepository: IDeviceRepository;

  constructor(deviceRepository: IDeviceRepository) {
    this.deviceRepository = deviceRepository;
  }

  async getAllRouters() {
    return this.deviceRepository.getAll();
  };

  async getRouterByID(id: number) {
    return this.deviceRepository.getById(id);
  }

}
