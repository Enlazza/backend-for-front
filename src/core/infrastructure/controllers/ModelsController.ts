import { Application, Request, Response } from 'express';
import ModelRepository from '../repositories/ModelRepository'
import ModelsService from '../services/ModelsService'

export default (app: Application) => {
  const modelRepository = new ModelRepository();
  const modelsService = new ModelsService(modelRepository);

  app.get('/models', async (req: Request, res: Response) => {

    modelsService
      .getAllModels()
      .then((response) => res.send(response))
      .catch((err) => res.send(err));
  });
}