const sequelize = require('../config/connection');
const seedRegions = require('./region-seeds');
const seedProducts = require('./product-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedRegions();

  await seedProducts();

  process.exit(0);
};

seedAll();
