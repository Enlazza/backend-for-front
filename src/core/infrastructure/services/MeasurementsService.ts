import IMeasurementRepository from '../repositories/interfaces/IMeasurementRepository';

export default class MeasurementsService {
  private measurementRepository: IMeasurementRepository;

  constructor(measurementRepository: IMeasurementRepository) {
    this.measurementRepository = measurementRepository;
  }

  async getLatestMeasurementByRouterId(id: number) {
    this.measurementRepository.getLatestByRouterId(id);
  }

  async getMeasurementsByRouterIdByDates(id: number, date1: Date, date2: Date) {
    this.measurementRepository.getByRouterIdByDates(id, date1, date2);
  }
}