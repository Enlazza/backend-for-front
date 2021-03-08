import { Application, Request, Response } from 'express';
import IAlert from '../../entities/interfaces/IAlert';
import AlertRepository from '../repositories/AlertRepository';
import AlertsService from '../services/AlertsService';

export default (app: Application) => {
  const alertRepository = new AlertRepository();
  const alertsService = new AlertsService(alertRepository);

  app.get('/users/:companyId/alerts', async (req: Request, res: Response) => {
    const companyId: number = parseInt(req.params.companyId, 10);

    alertsService
      .getAlertsByCompanyId(companyId)
      .then((response) => res.send(response))
      .catch((err) => res.send(err));
  });

  app.put('/alerts/:alertId/status', async (req: Request, res: Response) => {
    const alertId: number = parseInt(req.params.alertId, 10);
    const status: number = req.body.status

    alertsService
      .updateStatusById(alertId, status)
      .then((response) => res.send(response))
      .catch((err) => res.send(err));
  });

  app.get('/alerts/:alertId', async (req: Request, res: Response) => {
    const alertId: number = parseInt(req.params.alertId, 10);

    alertsService
      .getAlertByAlertId(alertId)
      .then((response) => res.send(response))
      .catch((err) => res.send(err));
  });

  app.delete('/alerts/:alertId/delete', async (req: Request, res: Response) => {
    const alertId: number = parseInt(req.params.alertId, 10);

    alertsService
      .deleteAlertById(alertId)
      .then((response) => res.send(response))
      .catch((err) => res.send(err));
  });

  app.put('/alerts/edit', async (req: Request, res: Response) => {
    const id: number = req.body.alert_id
    const data: IAlert = req.body.alert_data

    alertsService
      .updateAlertById(id, data)
      .then((response) => res.send(response))
      .catch((err) => res.send(err));
  });

  app.post('/alerts/add', async (req: Request, res: Response) => {
    const data: IAlert = req.body.alert_data

    alertsService
      .addAlert(data)
      .then((response) => res.send(response))
      .catch((err) => res.send(err));
  });

  app.get('/devices/:deviceId/alerts', async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.deviceId)

    alertsService
      .getAlertsByDeviceId(id)
      .then((response) => res.send(response))
      .catch((err) => res.send(err));
  });
}
