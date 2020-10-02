import React, { useState } from 'react';
import './App.css';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Header from './components/layout/Header'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todos, setTodos] = useState(
    [
      {
        id: uuidv4(),
        title: 'Take out the trash',
        completed : false
      },
      {
        id: uuidv4(),
        title: 'Dinner with wife',
        completed: true
      },
      {
        id: uuidv4(),
        title: 'Take other course',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Devops course',
        completed: true
      }
    ]
  )


  let markComplete = (id) => {
    setTodos(todos.map(todo => {
      if(todo.id === id ) {
        todo.completed = !todo.completed
      }
      return todo;
      })
    )
  }


  let delTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  let addTodo = (title) => {
    let newTodo = {
      id: uuidv4(),
      title,
      completed: false
    }

    setTodos(todos => [...todos, newTodo])
  }

  return (
    <div className="App">
      <Header />
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} modos={"youssef"} delTodo={delTodo}  markComplete={markComplete}/>
    </div>
  );
}

export default App;
