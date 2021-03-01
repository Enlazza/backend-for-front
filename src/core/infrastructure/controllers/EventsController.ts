import { Application, Request, Response } from 'express';
import EventRepository from '../repositories/EventRepository';
import EventsService from '../services/EventsService';

export default (app: Application) => {
  const eventRepository = new EventRepository();
  const eventsService = new EventsService(eventRepository);

  app.get('/users/:userId/events/:day', async (req: Request, res: Response) => {
    const userId: number = parseInt(req.params.userId, 10);
    const day: number = parseInt(req.params.day, 10);

    eventsService
      .getEventsByUserIdAndDay(userId, day)
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


    eventsService
      .getEventsByAlertId(deviceId)
      .then((response) => res.send(response))
      .catch((err) => res.send(err));
  });
}
