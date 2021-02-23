import * as dotenv from 'dotenv';

dotenv.config();

export default {
  appPort: process.env.APP_PORT ?? 4000,
  coreUrl: process.env.CORE_URL ?? 'http://localhost:4000',
  coreTimeout: process.env.CORE_TIMEOUT ?? 15000,
};
