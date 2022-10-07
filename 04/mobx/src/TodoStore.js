import { observable, autorun, computed } from 'mobx';

class TodoStore {
  @observable todos = [
    {
      task: 'Get up',
      completed: false
    },
    {
      task: 'Go to work',
      completed: false
    },
    {
      task: 'Take lunch',
      completed: false
    },
    {
      task: 'Take a walk',
      completed: false
    }
  ];
  
  constructor() {
    autorun(() => console.log(this.report));
  }

  @computed get completedCount() {
    return this.todos.filter(todo => todo.completed).length;
  }

  @computed get report() {
    return `Progress: ${this.completedCount}/${this.todos.length}`;
  }

  add(task) {
    this.todos.push({
      task,
      completed: false
    });
  }
}

export default TodoStore;
