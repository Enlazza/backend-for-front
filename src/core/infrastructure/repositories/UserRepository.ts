import axios from 'axios';
import config from '../../../config';
import IUserRepository from './interfaces/IUserRepository';
import IUserAttributes from '../../entities/interfaces/IUserAttributes';
import IUser from '../../entities/interfaces/IUser';

export default class UserRepository implements IUserRepository {
  private token;
  private client;

  constructor(token: string) {
    this.token = token;
    this.client = axios.create({
      baseURL: config.coreUrl,
      timeout: config.coreTimeout,
      headers: {
        
      },
    });
  }

  create(userData: IUserAttributes): IUser {

  }
}
