import IUserAttributes from './IUserAttributes';

export default interface IUser extends IUserAttributes {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}