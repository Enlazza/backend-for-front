import { Application, Request, Response } from 'express';
import IDevice from '../../entities/interfaces/IDevice';
import DeviceRepository from '../repositories/DeviceRepository';
import DevicesService from '../services/DevicesService';

export default (app: Application) => {
  const deviceRepository = new DeviceRepository();
  const devicesService = new DevicesService(deviceRepository);

  app.get('/users/:companyId/devices', async (req: Request, res: Response) => {
    const companyId: number = parseInt(req.params.userId, 10);

    devicesService
      .getDevicesByCompanyId(companyId)
      .then((response) => res.send(response))
      .catch((err) => res.send(err));
  });

  app.post('devices/add', async (req: Request, res: Response) => {
    const data: IDevice = req.body.deviceData

    devicesService
      .add(data)
      .then((response) => res.send(response))
      .catch((err) => res.send(err));
  });
};
