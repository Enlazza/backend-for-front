import sequelize from '../src/database';
import DeviceModel from '../src/core/infrastructure/models/DeviceModel';

import devices from './devices.json';

sequelize.sync({ force: true }).then(
  async () => {
    await DeviceModel.bulkCreate(devices);
  },
  (err) => console.log(err),
);
