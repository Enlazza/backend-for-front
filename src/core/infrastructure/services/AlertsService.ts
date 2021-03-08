import IAlert from '../../entities/interfaces/IAlert';
import IAlertRepository from '../repositories/interfaces/IAlertRepository'

export default class AlertsService {
  private alertRepository: IAlertRepository;

  constructor(alertRepository: IAlertRepository) {
    this.alertRepository = alertRepository;
  }

  async getAlertsByCompanyId(id: number) {
    const res = await this.alertRepository.getByCompanyId(id);
    if (res == null) {
      return res;
    }
    else {
      const final: any[] = [];
      for (let i = 0; i < res.length; i++) {
        let aux = res[i];
        let obj = {
          id: aux.id,
          name: aux.alertName,
          deviceId: aux.deviceId,
          deviceName: aux.deviceName,
          entry: aux.entry,
          description: "hola, soy una alerta",
          status: aux.alertStatus,
        }
        final.push(obj);
      }
      return final;
    }
  }

  async updateStatusById(id: number, status: number) {
    status = 1 - status;
    return this.alertRepository.updateStatusById(id, status);
  }

  async getAlertByAlertId(id: number) {
    const data = this.alertRepository.getByAlertId(id);
    const res = {};
  }

  async deleteAlertById(id: number) {
    return this.alertRepository.deleteById(id);
  }

  async updateAlertById(id: number, data: IAlert) {
    return this.alertRepository.updateById(id, data);
  }

  async addAlert(data: IAlert) {
    return this.alertRepository.add(data);
  }

  async getAlertsByDeviceId(id: number) {
    const res = this.alertRepository.getByDeviceId(id);
    // Aca se modifica la respuesta para que siga el contrato entre BFF y front?
    return res
  }
}
