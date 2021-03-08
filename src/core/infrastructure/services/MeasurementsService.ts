import IMeasurementRepository from '../repositories/interfaces/IMeasurementRepository';

export default class MeasurementsService {
  private measurementRepository: IMeasurementRepository;

  constructor(measurementRepository: IMeasurementRepository) {
    this.measurementRepository = measurementRepository;
  }

  async getLatestMeasurementByDeviceId(id: number) {
    let data = await this.measurementRepository.getLatestByDeviceId(id);
    if (data == null){
      return data
    }
    else{
      let voltArr: Array<number> = [];
      let currArr: Array<number> = [];      
      voltArr.push(data.v0);
      currArr.push(data.a0);
      voltArr.push(data.v1);
      currArr.push(data.a1);
      voltArr.push(data.v2);
      currArr.push(data.a2);
      voltArr.push(data.v3);
      currArr.push(data.a3);
      voltArr.push(data.v4);
      currArr.push(data.a4);
      voltArr.push(data.v5);
      currArr.push(data.a5);
      voltArr.push(data.v6);
      currArr.push(data.a6);
      voltArr.push(data.v7);
      currArr.push(data.a7);
      voltArr.push(data.v8);
      currArr.push(data.a8);
      voltArr.push(data.v9);
      currArr.push(data.a9);
      voltArr.push(data.v10);
      currArr.push(data.a10);
      voltArr.push(data.v11);
      currArr.push(data.a11);
      voltArr.push(data.v12);
      currArr.push(data.a12);
      voltArr.push(data.v13);
      currArr.push(data.a13);
      voltArr.push(data.v14);
      currArr.push(data.a14);
      voltArr.push(data.v15);
      currArr.push(data.a15);
      let final = {
        voltage: voltArr,
        current: currArr,
      };
      return final;
    }
  }

  async getMeasurementsByDeviceIdByDates(id: number, date1: Date, date2: Date) {
    let data = await this.measurementRepository.getByDeviceIdByDates(id, date1, date2);
    if (data == null){
      return data;
    }
    else{
      let final: Array<any> = []
      for (let i = 0; i < data.length; i++){
        let aux = data[i];
        let voltArr: Array<number> = [];
        let currArr: Array<number> = [];      
        voltArr.push(aux.v0);
        currArr.push(aux.a0);
        voltArr.push(aux.v1);
        currArr.push(aux.a1);
        voltArr.push(aux.v2);
        currArr.push(aux.a2);
        voltArr.push(aux.v3);
        currArr.push(aux.a3);
        voltArr.push(aux.v4);
        currArr.push(aux.a4);
        voltArr.push(aux.v5);
        currArr.push(aux.a5);
        voltArr.push(aux.v6);
        currArr.push(aux.a6);
        voltArr.push(aux.v7);
        currArr.push(aux.a7);
        voltArr.push(aux.v8);
        currArr.push(aux.a8);
        voltArr.push(aux.v9);
        currArr.push(aux.a9);
        voltArr.push(aux.v10);
        currArr.push(aux.a10);
        voltArr.push(aux.v11);
        currArr.push(aux.a11);
        voltArr.push(aux.v12);
        currArr.push(aux.a12);
        voltArr.push(aux.v13);
        currArr.push(aux.a13);
        voltArr.push(aux.v14);
        currArr.push(aux.a14);
        voltArr.push(aux.v15);
        currArr.push(aux.a15);
        let obj = {
          voltage: voltArr,
          current: currArr,
          measuredAt: aux.measuredAt,
        };
        final.push(obj);
      }
      return final;
    }
  }
}