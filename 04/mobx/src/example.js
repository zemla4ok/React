const todoStore = observable({
  /* some observable state */
  todos: [],
  
  /* a derived value */
  get completedCount() {
    return this.todos.filter(todo => todo.completed).length;
  }
});

/* a function that observes the state */
autorun(() => {
  console.log(`
	Completed ${todoStore.completedCount}
    of ${todoStore.todos.length}
  `);
});

todoStore.todos[0] = {
  title: 'Take my lunch',
  completed: false
};
