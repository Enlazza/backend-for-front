import IUser from '../../../entities/interfaces/IUser';

export default interface IUserRepository {
  create(user: IUser): Promise<IUser | Error>;
}
