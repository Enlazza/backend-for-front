import IEvent from "../../../entities/interfaces/IEvent";

export default interface IEventRepository {
  getByUserIdAndDay(id: number, day: number): Promise<Array<IEvent> | null>;
  getByAlertId(id: number): Promise<Array<IEvent> | null>;
}
