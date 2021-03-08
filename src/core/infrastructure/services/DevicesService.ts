import IDevice from '../../entities/interfaces/IDevice';
import IDeviceRepository from '../repositories/interfaces/IDeviceRepository';

export default class DevicesService {
  private deviceRepository: IDeviceRepository;

  constructor(deviceRepository: IDeviceRepository) {
    this.deviceRepository = deviceRepository;
  }

  async getDevicesByCompanyId(id: number) {
    const res = await this.deviceRepository.getByCompanyId(id);
    if (res == null) {
      return res;
    }
    else {
      const final: any[] = [];
      for (let i = 0; i < res.length; i++) {
        let aux = res[i];
        let obj = {
          id: aux.id,
          modelId: aux.modelId,
          companyId: aux.companyId,
          mac: aux.mac,
          name: aux.deviceName,
          hostname: aux.hostname,
          model: aux.modelName,
          status: aux.deviceStatus,
          cellphone: aux.cellphone,
          imgDir: aux.imgDir,
        }
        final.push(obj);
      }
      return final;
    }
  }

  async add(data: IDevice) {
    return this.deviceRepository.add(data);
  }
}
