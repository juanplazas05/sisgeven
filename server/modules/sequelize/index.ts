import {Sequelize} from 'sequelize';

// Option 1: Passing parameters separately
export const sequelize = new Sequelize('sisgeven','root' , 'root', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

export const testingDB = () => {
  sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  });
}

