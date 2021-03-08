import IPersistentObject from './IPersistentObject';

export default interface IEvent extends IPersistentObject {
  alertId: number;
  deviceId: number;
  eventStatus: number;
}
