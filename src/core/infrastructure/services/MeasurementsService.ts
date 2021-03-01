import IMeasurementRepository from '../repositories/interfaces/IMeasurementRepository';

export default class MeasurementsService {
  private measurementRepository: IMeasurementRepository;

  constructor(measurementRepository: IMeasurementRepository) {
    this.measurementRepository = measurementRepository;
  }

  async getLatestMeasurementByDeviceId(id: number) {
    return this.measurementRepository.getLatestByDeviceId(id);
  }

  async getMeasurementsByDeviceIdByDates(id: number, date1: Date, date2: Date) {
    return this.measurementRepository.getByDeviceIdByDates(id, date1, date2);
  }
}