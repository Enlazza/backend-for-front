import IEventRepository from '../repositories/interfaces/IEventRepository';

export default class EventsService {
  private eventRepository: IEventRepository;

  constructor(eventRepository: IEventRepository) {
    this.eventRepository = eventRepository;
  }

  async getLatestEventsByCompanyId(id: number) {
    const res = await this.eventRepository.getLatestByCompanyId(id);
    if (res == null) {
      return res;
    }
    else {
      const final: any[] = [];
      for (let i = 0; i < res.length; i++) {
        let aux = res[i];
        let obj = {
          timestamp: aux.createdAt,
          deviceId: aux.deviceId,
          deviceName: aux.deviceName,
          alertId: aux.alertId,
          alertName: aux.alertName,
          entry: aux.entry,
        }
        final.push(obj);
      }
      return final;
    }
  }

  async getEventsByAlertId(id: number) {
    const res = await this.eventRepository.getByAlertId(id);
    if (res == null) {
      return res;
    }
    else {
      const final: any[] = [];
      for (let i = 0; i < res.length; i++) {
        let aux = res[i];
        let obj = {
          timestamp: aux.createdAt,
          deviceId: aux.deviceId,
          deviceName: aux.deviceName,
          alertId: aux.alertId,
          alertName: aux.alertName,
          entry: aux.entry,
        }
        final.push(obj);
      }
      return final;
    }
  }

  async getEventsByDeviceIdByDates(id: number, date1: Date, date2: Date) {
    let data = await this.eventRepository.getByDeviceIdByDates(id, date1, date2);
    if (data == null){
      return data;
    }
    else{
      let final: Array<any> = [];
      for(let i = 0; i < data.length; i++){
        let aux = data[i];
        let obj = {
          timestamp: aux.createdAt,
          alertId: aux.alertId,
          alertName: aux.alertName,
          entry: aux.entry,
          description: "<<Chorizo>> - Usada Pekora",
        }
        final.push(obj);
      }
      return final;
    }


  }
}
