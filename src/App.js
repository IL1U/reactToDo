import React from 'react';
import './App.css';
import AddTodo from './todo/AddTodo';
import TodoList from './todo/TodoList';
import Context from "./context";

function App() {
  
  const [todos, setTodos] = React.useState([
    {id: 1, status: false, title: "Купить хлеб"},
    {id: 2, status: true, title: "Купить масло"},
    {id: 3, status: false, title: "Купить молоко"}
  ]);

  function toggleTodo (id) {
    setTodos (
      todos.map (todo => {
        if (todo.id === id) todo.status = !todo.status;
        return todo;
      })
    );
  }

  function removeTodo (id) {
    setTodos (
      todos.filter (todo => todo.id !== id)
    )
  }

  function addTodo (value) {
    setTodos (
      todos.concat([{id: Date.now(), status: false, title: value}])
    )
  }

  return (
    <Context.Provider value = {{remove: removeTodo}}>
      <div>
        <h1>Список дел на React.js</h1>
        <AddTodo onCreate = {addTodo}/>
        {todos.length ? <TodoList listTodo={todos} onToggle={toggleTodo}/> : "Список пуст" }
      </div>
    </Context.Provider>
  );
}

export default App;
