import React, { Component } from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

const Ul = styled.ul`
  margin-bottom: 30px;
  max-width: 300px;
  font-size: 20px;
`;


const Li = styled.li`
  padding: 5px 0;
  line-height: 30px;
  cursor: pointer;
  &:hover {
	small {
      display: inline-block;
	}
  }
  small {
	display: none;
    margin-left: 30px;
	float: right;
  }
  span {
	color: green;
  }
`;

@observer
class TodoList extends Component {
  render() {
    const { store } = this.props;
    return (
      <div>
        <Ul>
		      {store.todos.map((todo, index) => (
          	<TodoItem 
              key={index} 
              todo={todo} 
              onDelete={() => store.todos.splice(index, 1)} 
            />
          ))}
        </Ul>
        <div>
          <input ref={ref => this.inputRef = ref} />
          <button onClick={() => store.add(this.inputRef.value)}>
          	Add New Todo
          </button>
        </div>
        <p>Completed: {store.completedCount}</p>
      </div>
    );
  }
}

@observer
class TodoItem extends Component {
  toggleTodo = () => {
    const { todo } = this.props;
  	todo.completed = !todo.completed;
  }
  
  render() {
    const { todo, onDelete } = this.props;
    return (
      <Li onClick={this.toggleTodo}>
      	{todo.task}
        {todo.completed && <span>&nbsp;&nbsp;&nbsp;&#10004;</span>}
        <small onClick={onDelete}> &#10005;</small>
      </Li>
    );
  }
}


export default TodoList;
