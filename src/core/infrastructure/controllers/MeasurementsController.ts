import { Application, Request, Response } from 'express';
import MeasurementRepository from '../repositories/MeasurementRepository';
import MeasurementsService from '../services/MeasurementsService';

export default (app: Application) => {
  const measurementRepository = new MeasurementRepository();
  const measurementsService = new MeasurementsService(measurementRepository);

  app.get('/routers/:routerId/latest_measurement', async (req: Request, res: Response) => {
    const routerId: number = parseInt(req.params.routerId, 10);

    measurementsService
      .getLatestMeasurementByRouterId(routerId)
      .then((response) => res.send(response))
      .catch((err) => res.send(err));
  });

  app.get('/routers/:routerId/measurements/:date1/:date2', async (req: Request, res: Response) => {
    const routerId: number = parseInt(req.params.routerId, 10);
    const from_date_string: string = req.params.date1;
    const to_date_string: string = req.params.date2;
    const from_date_array: Array<string> = from_date_string.split('-');

    const from_date = new Date(from_date_array[0] + '-' + from_date_array[1] + '-' + from_date_array[2] + ' ' + from_date_array[3] + ':' + from_date_array[4] + ':' + from_date_array[5]);
    const to_date = new Date(to_date_array[0] + '-' + to_date_array[1] + '-' + to_date_array[2] + ' ' + to_date_array[3] + ':' + to_date_array[4] + ':' + to_date_array[5]);

    measurementsService
      .getMeasurementsByRouterIdByDates(routerId, from_date, to_date)
      .then((response) => res.send(response))
      .catch((err) => res.send(err));
  });
};
