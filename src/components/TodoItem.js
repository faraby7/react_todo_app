import React from 'react';

function TodoItem(props) {
  const { id, title } = props.todo

  let btnStle = () => {
    return {
      background: '#ff0000',
      color: '#fff',
      border: 'none',
      padding: '5px 8px',
      borderRadius: '50%',
      cursor: 'pointer',
      float: 'right'
    }
  }

  let getStyle = () => {
    return {
      background: '#13431222',
      padding: '10px',
      borderBotton: '1px #ccc dotted',
      textDecoration: props.todo.completed ?
      'line-through' : 'none'
    }
  }


  return (
    <div style={getStyle()}>
      <p>
        <input type="checkbox" onChange={props.markComplete.bind(this ,id)} />
        { title }
        <button onClick={props.delTodo.bind(this ,id)} style={btnStle()}>x</button>
      </p>
    </div>
  )
}

export default TodoItem;
