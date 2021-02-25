import IPersistentObject from './IPersistentObject';

export default interface IEvent extends IPersistentObject {
  status: number;
}
