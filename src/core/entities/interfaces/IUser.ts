import IPersistentObject from './IPersistentObject';

export default interface IUserAttributes extends IPersistentObject {
  email: string;
  password: string;
  name: string;
}
