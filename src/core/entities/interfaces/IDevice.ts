import IPersistentObject from './IPersistentObject';

export default interface IDevice extends IPersistentObject {
  name: string;
  mac: string;
  cellphone: number;
  installationCode: string;
  modelId: number;
  companyId: number;
}
