import IPersistentObject from './IPersistentObject';

export default interface IDevice extends IPersistentObject {
  modelId: number;
  companyId: number;
  deviceName: string;
  mac: string;
  hostname: string;
  cellphone: number;
  installationCode: string;
}
