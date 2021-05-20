import React, { useState, useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App() {
  let initTodo = [];

  const [todos, setTodos] = useState(initTodo);

  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onDelete = (id) => {
    setTodos(todos.filter((e) => {
      return e.id !== id;
    }));
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const addTodo = (title, description) => {
    let id;
    if (todos.length === 0) {
      id = 1;
    } else {
      id = todos[todos.length - 1].id + 1;
    }

    const newTodo = {
      id: id,
      title: title,
      description: description
    }
    setTodos([...todos, newTodo]);
  }

  return (
    <div className="App">
      <Header title="todos list" />
      <TodoList todos={todos} onDelete={onDelete} addTodo={addTodo} />
      <Footer />
    </div>
  );
}

export default App;
