import sequelize from './models';

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});
