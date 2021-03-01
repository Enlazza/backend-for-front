import IAlert from '../../entities/interfaces/IAlert';
import IAlertRepository from '../repositories/interfaces/IAlertRepository'

export default class AlertsService {
  private alertRepository: IAlertRepository;

  constructor(alertRepository: IAlertRepository) {
    this.alertRepository = alertRepository;
  }

  /*
    En los siguientes métodos se devuelve lo mismo que entrega el core,
    eventualmente se debería cambiar para que lo retornado siga el formato del
    contrato entre el BFF y el front
  */

  async getAlertsByCompanyId(id: number) {
    return this.alertRepository.getByCompanyId(id);
  }

  async updateStatusById(id: number, status: number) {
    status = 1 - status;
    const res = this.alertRepository.updateStatusById(id, status);
    // Aca se modifica la respuesta para que siga el contrato entre BFF y front?
    return res
  }

  async getAlertByAlertId(id: number) {
    return this.alertRepository.getByAlertId(id);
  }

  async deleteAlertById(id: number) {
    const res = this.alertRepository.deleteById(id);
    // Aca se modifica la respuesta para que siga el contrato entre BFF y front?
    return res
  }

  async updateAlertById(id: number, data: IAlert) {
    const res = this.alertRepository.updateById(id, data);
    // Aca se modifica la respuesta para que siga el contrato entre BFF y front?
    return res
  }

  async addAlert(data: IAlert) {
    const res = this.alertRepository.add(data);
    // Aca se modifica la respuesta para que siga el contrato entre BFF y front?
    return res
  }

  async getAlertsByDeviceId(id: number) {
    const res = this.alertRepository.getByDeviceId(id);
    // Aca se modifica la respuesta para que siga el contrato entre BFF y front?
    return res
  }
}
