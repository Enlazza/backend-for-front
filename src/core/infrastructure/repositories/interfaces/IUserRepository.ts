import IUser from '../../entities/interfaces/IUser';
import IUserAttributes from '../../entities/interfaces/IUserAttributes';

export default interface IUserRepository {
  create(user: IUserAttributes): Promise<IUser | Error>;
}
