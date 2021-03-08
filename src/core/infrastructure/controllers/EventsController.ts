import { Application, Request, Response } from 'express';
import EventRepository from '../repositories/EventRepository';
import EventsService from '../services/EventsService';

export default (app: Application) => {
  const eventRepository = new EventRepository();
  const eventsService = new EventsService(eventRepository);

  app.get('/users/:companyId/latest_events/', async (req: Request, res: Response) => {
    const companyId: number = parseInt(req.params.companyId, 10);
    const day: number = parseInt(req.params.day, 10);

    eventsService
      .getLatestEventsByCompanyId(companyId)
      .then((response) => res.send(response))
      .catch((err) => res.send(err));
  });

  app.get('/alerts/:alertId/events', async (req: Request, res: Response) => {
    const alertId: number = parseInt(req.params.alertId, 10);

    eventsService
      .getEventsByAlertId(alertId)
      .then((response) => res.send(response))
      .catch((err) => res.send(err));
  });

  app.get('/devices/:deviceId/events/:date1/:date2', async (req: Request, res: Response) => {
    const deviceId: number = parseInt(req.params.alertId, 10);
    const fromDateString: string = req.params.date1;
    const toDatetring: string = req.params.date2;
    const fromDateArray: Array<string> = fromDateString.split('-');
    const toDateArray: Array<string> = toDatetring.split('-');

    const fromDate = new Date(fromDateArray[0] + '-' + fromDateArray[1] + '-' + fromDateArray[2] + ' ' + fromDateArray[3] + ':' + fromDateArray[4] + ':' + fromDateArray[5]);
    const toDate = new Date(toDateArray[0] + '-' + toDateArray[1] + '-' + toDateArray[2] + ' ' + toDateArray[3] + ':' + toDateArray[4] + ':' + toDateArray[5]);

    eventsService
      .getEventsByDeviceIdByDates(deviceId, fromDate, toDate)
      .then((response) => res.send(response))
      .catch((err) => res.send(err));
  });
}
