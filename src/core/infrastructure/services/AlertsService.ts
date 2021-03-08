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
    const data = await this.alertRepository.getByAlertId(id);
    if (data == null) {
      return data;
    }
    else {
      let emailStr: string = "";
      let phoneStr: string = "";

      for (let i = 0; i < data.email.length; i++){
        if (i == 0) {
          emailStr += data.email[i].email;
        }
        else{
          emailStr += "," + data.email[i].email;
        } 
      }
      for (let i = 0; i < data.phone.length; i++){
        if (i == 0) {
          phoneStr += data.phone[i].number;
        }
        else{
          phoneStr += "," + data.phone[i].number;
        } 
      }
    

      const res = {
        id: data.alertData.id,
        entryId: data.alertData.entryId,
        name: data.alertData.alertName,
        lowerbound: data.alertData.lowerbound,
        upperbound: data.alertData.upperbound,
        entry: data.alertData.entry,
        subject: data.alertData.subject,
        body: data.alertData.body,
        description: "Ima description",
        status: data.alertData.alertStatus,
        emails: emailStr,
        phones: phoneStr,
        deviceName: data.alertData.deviceName,
      };
      return res;
    }
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
    const data = await this.alertRepository.getByDeviceId(id);
    if (data == null){
      return data;
    }
    else{
      let final: Array<any> = [];
      for (let i = 0; i < data.length; i++){
        let aux = data[i];
        let obj = {
          id: aux.id,
          name: aux.alertName,
          entry: aux.entry,
          description: "2 y 2 son 4, 4 y 2 son 6",
          status: aux.alertStatus,          
        }
        final.push(obj);
      }
      return final;
    }
  }
}
