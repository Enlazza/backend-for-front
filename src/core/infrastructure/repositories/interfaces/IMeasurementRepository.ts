import IMeasurement from "../../../entities/interfaces/IMeasurement";

export default interface IMeasurementRepository {
  getLatestByRouterId(id: number): Promise<IMeasurement | null>;
  getByRouterIdByDates(id: number, date1: Date, date2: Date): Promise<Array<IMeasurement> | null>;
}