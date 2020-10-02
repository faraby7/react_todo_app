import React from 'react';
import TodoItem from './TodoItem'
function Todos(props) {


  return props.todos.map((todo, key) => {
    return(
    <div key={key}>
      <TodoItem todo={todo} delTodo={props.delTodo} markComplete={props.markComplete}/>
    </div>
    )
  });
}

export default Todos;
