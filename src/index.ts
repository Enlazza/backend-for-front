import bodyParser from 'body-parser';
import express, { Application } from 'express';
import config from './config';

import measurementRoutes from './core/infrastructure/controllers/MeasurementController';


// Boot express
const app: Application = express();
const { appPort } = config;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

measurementRoutes(app);

// Start server
app.listen(appPort, () => console.log(`Server is listening on port ${appPort}!`));
