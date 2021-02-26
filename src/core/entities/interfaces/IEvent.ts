import IPersistentObject from './IPersistentObject';

export default interface IEvent extends IPersistentObject {
  status: number;
  alert_id: number;
  device_id: number;
}
