import React, { useState } from 'react';

function AddTodo(props) {

  let [newTodo, setTodo] = useState({
    title: ''
  })

  const formStyle = {
    display: 'flex'
  }

  const submitStyle = {
    flex: '1'
  }

  const inputStyle = {
    flex: '10',
    padding: '5px'
  }

  let onChange = (e) => setTodo({ [e.target.name]: e.target.value })
  let onSubmit = (e) => {
    e.preventDefault();
    props.addTodo(newTodo.title)
    setTodo({ title: ''})
  }

  return (
    <form onSubmit={onSubmit}style={formStyle}>
      <input
        type="text"
        name="title"
        placeholder ="Add todo ..."
        style={inputStyle}
        value={newTodo.title}
        onChange={onChange}
      />
      <input
        type="submit"
        value="Submit"
        className="btn"
        style={submitStyle}
      />
    </form>
  );
}

export default AddTodo;
