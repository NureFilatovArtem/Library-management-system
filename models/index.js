const { Sequelize, DataTypes } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

// Ініціалізація Sequelize
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    port: config.port || 5432,
  }
);

// Імпортуємо всі моделі
const Book = require('./book')(sequelize, DataTypes);
const Reader = require('./reader')(sequelize, DataTypes);
const Borrowing = require('./borrowing')(sequelize, DataTypes);
const Staff = require('./staff')(sequelize, DataTypes);

// Додаємо всі моделі до sequelize.models
sequelize.models = {
  Book,
  Reader,
  Borrowing,
  Staff,
};

// Якщо є асоціації між моделями, викликаємо їх
Object.values(sequelize.models).forEach((model) => {
  if (model.associate) {
    model.associate(sequelize.models);
  }
});

module.exports = { sequelize, Sequelize };