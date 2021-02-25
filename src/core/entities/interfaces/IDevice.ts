import IPersistentObject from './IPersistentObject';

export default interface IDevice extends IPersistentObject {
  mac: string;
  name: string;
}
