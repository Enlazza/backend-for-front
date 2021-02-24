import bodyParser from 'body-parser';
import express, { Application } from 'express';
import config from './config';
import DevicesRepository from './core/infrastructure/repositories/DeviceRepository';
import devicesController from './core/infrastructure/controllers/DevicesController';

// Boot express
const app: Application = express();
const { appPort } = config;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

devicesController(app);

// Start server
app.listen(appPort, () => console.log(`Server is listening on port ${appPort}!`));