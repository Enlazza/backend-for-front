import { Application, Request, Response } from 'express';
import IDevice from '../../entities/interfaces/IDevice';
import DeviceRepository from '../repositories/DeviceRepository';
import DevicesService from '../services/DevicesService';

export default (app: Application) => {
  const deviceRepository = new DeviceRepository();
  const devicesService = new DevicesService(deviceRepository);

  app.get('/users/:userId/routers', async (req: Request, res: Response) => {
    const userId: number = parseInt(req.params.userId, 10);

    devicesService
      .getRoutersByUserId(userId)
      .then((response) => res.send(response))
      .catch((err) => res.send(err));
  });

  app.post('routers/add', async (req: Request, res: Response) => {
    const userId: number = req.body.user_id
    const data: IDevice = req.body.router_data

    devicesService
      .add(userId, data)
      .then((response) => res.send(response))
      .catch((err) => res.send(err));
  });
};
