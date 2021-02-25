import axios from 'axios';
import config from '../../../config';
import IUserRepository from './interfaces/IUserRepository';
import IUserAttributes from '../../entities/interfaces/IUser';

export default class UserRepository implements IUserRepository {
  private token;
  private client;

  constructor(token: string) {
    this.token = token;
    let tout = +config.coreTimeout
    this.client = axios.create({
      baseURL: config.coreUrl,
      timeout: tout,
      headers: {

      },
    });
  }

  create(userData: IUserAttributes) {
    return axios
      .post(config.coreUrl + '/users/add', userData)
      .then((response) => response.data)
      .catch((err) => err);
  }
}
