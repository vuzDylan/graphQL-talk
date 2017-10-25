import DataTypes from 'sequelize';
import sequelize from '../sequelize';

export default sequelize.define('todos', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: DataTypes.STRING,
  completed: DataTypes.BOOLEAN,
});
