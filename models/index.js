import User from './user';
import Todo from './todo';

export default () => {
  User.hasMany(Todo);
  Todo.belongsTo(User);
}
