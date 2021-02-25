import { Application, Request, Response } from 'express';
import DeviceRepository from '../repositories/DeviceRepository';
import DevicesService from '../services/DevicesService';

export default (app: Application) => {
  const deviceRepository = new DeviceRepository();
  const devicesService = new DevicesService(deviceRepository);

  app.get('/devices', async (req: Request, res: Response) => {
    devicesService
      .getAllRouters()
      .then((response) => res.send(response))
      .catch((err) => res.send(err));
  });

  app.get('/devices/:deviceId', async (req: Request, res: Response) => {
    const deviceId: number = parseInt(req.params.deviceId, 10);

    devicesService
      .getRouterByID(deviceId)
      .then((response) => res.send(response))
      .catch((err) => res.send(err));
  });
};
 