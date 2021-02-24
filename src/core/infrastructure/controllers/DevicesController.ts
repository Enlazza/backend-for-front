import { Application, Request, Response } from 'express';
import { AxiosError } from 'axios';
import DevicesRepository from '../repositories/DeviceRepository';

export default (app: Application) => {
  app.get('/devices', async (req: Request, res: Response) => {
    const deviceRepository = new DevicesRepository();
    deviceRepository.getAll()
      .then((response) => res.send(response))
      .catch((err: AxiosError) => res.send(err));
  });
};
