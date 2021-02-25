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
}