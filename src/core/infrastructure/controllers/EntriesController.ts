import { Application, Request, Response } from 'express';
import IEntry from '../../entities/interfaces/IEntry';
import EntryRepository from '../repositories/EntryRepository';
import EntriesService from '../services/EntriesService';

export default (app: Application) => {
  const entryRepository = new EntryRepository();
  const entriesService = new EntriesService(entryRepository);

  app.get('/devices/:deviceId/entries', async (req: Request, res: Response) => {
    const deviceId: number = parseInt(req.params.userId, 10);

    entriesService
      .getEntriesByDeviceId(deviceId)
      .then((response) => res.send(response))
      .catch((err) => res.send(err));
  });

  app.post('/entries/add', async (req: Request, res: Response) => {
    const entry: IEntry = req.body.entryData

    entriesService
      .add(entry)
      .then((response) => res.send(response))
      .catch((err) => res.send(err));
  });

  app.delete('/entries/:entryId/delete', async (req: Request, res: Response) => {
    const entryId: number = parseInt(req.params.entryId)

    entriesService
      .deleteById(entryId)
      .then((response) => res.send(response))
      .catch((err) => res.send(err));
  });
}