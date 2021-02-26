import IPersistentObject from './IPersistentObject';

export default interface ICompany extends IPersistentObject {
  name: string;
  address: string;
  rut: string;
  business: string;
  logo: string;
  website: string;
}