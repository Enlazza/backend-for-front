import IPersistentObject from './IPersistentObject';

export default interface IUserAttributes extends IPersistentObject {
  name: string;
  password: string;
  email: string;
  companyId: number;
}
