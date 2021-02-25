import IDeviceRepository from '../repositories/interfaces/IDeviceRepository';

export default class DevicesService {
  private deviceRepository: IDeviceRepository;
  private alertRepository: IAlertRepository;

  constructor(deviceRepository: IDeviceRepository, alertRepository: IAlertRepository) {
    this.deviceRepository = deviceRepository;
    this.alertRepository = alertRepository;
  }

  async getAllRouters() {
    return this.deviceRepository.getAll();
  };

  async getRouterByID(id: number) {
    return this.deviceRepository.getById(id);
  }

}
