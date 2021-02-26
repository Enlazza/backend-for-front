import IPersistentObject from './IPersistentObject';

export default interface IDevice extends IPersistentObject {
  name: string;
  mac: string;
  cellphone: number;
  installation_code: string;
  model_id: number;
  company_id: number;
}
