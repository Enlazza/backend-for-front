import IAlert from "../../../entities/interfaces/IAlert";
import IDevice from "../../../entities/interfaces/IDevice";
import IEntry from "../../../entities/interfaces/IEntry";
import IEvent from "../../../entities/interfaces/IEvent";

export default interface IEventRepository {
  getLatestByCompanyId(id: number): Promise<Array<IEvent & IAlert & IDevice & IEntry> | null>;
  getByAlertId(id: number): Promise<Array<IEvent & IAlert & IDevice & IEntry> | null>;
  getByDeviceIdByDates(id: number, date1: Date, date2: Date): Promise<Array<IEvent> | null>;
}
