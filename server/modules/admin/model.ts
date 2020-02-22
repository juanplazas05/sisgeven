import Sequelize from 'sequelize';
import {sequelize} from '../sequelize'

console.log('User model');

const Model = Sequelize.Model;
export class User extends Model {}
User.init({
  // attributes
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'user'
  // options
});
