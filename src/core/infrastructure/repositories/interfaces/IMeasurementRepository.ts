import IMeasurement from "../../../entities/interfaces/IMeasurement";

export default interface IMeasurementRepository {
  getLatestByDeviceId(id: number): Promise<IMeasurement | null>;
  getByDeviceIdByDates(id: number, date1: Date, date2: Date): Promise<Array<IMeasurement> | null>;
}