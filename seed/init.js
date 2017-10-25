import sequelize from './sequelize';

import models from './models';
import User from './models/user';
import Todo from './models/todo';

models();

sequelize.sync().then(() => {
  User.create({ firstName: 'Dylan', lastName: 'Vuz' }).then(user => {
    Todo.create({ name: "Create this talk", completed: false }).then(todo => {
      user.addTodos(todo);
    })
  });
});
