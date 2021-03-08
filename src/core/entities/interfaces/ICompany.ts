import IPersistentObject from './IPersistentObject';

export default interface ICompany extends IPersistentObject {
  adminId: number;
  companyName: string;
  address: string;
  rut: string;
  business: string;
  logo: string;
  website: string;
}