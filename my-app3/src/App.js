// import logo from './logo.svg';
// import './App.css';
// import React, { useState, useRef, useEffect } from 'react';
// import TodoList from './TodoList'
// import uuidv4 from 'uuid/v4'

// const LOCAL_STORAGE_KEY = 'todoApp.todos'

// //let myId = 1;

// function App() {
//   const [todos, setTodos] = useState([])
//   const todoNameRef = useRef()

//   useEffect(() => {
//     const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
//     console.log("storedTodos", storedTodos)
//     if (storedTodos) setTodos(storedTodos)
//   }, [])

//   useEffect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
//   }, [todos])

//   function toggleTodo(id) {
//     const newTodos = [...todos]
//     const todo = newTodos.find(todo => todo.id === id)
//     todo.complete = !todo.complete
//     setTodos(newTodos)
//   }

//   function handleAddTodo(e) {
//     const name = todoNameRef.current.value
//     if (name === '') return
//     setTodos(prevTodos => {
//       return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
//     })
//     todoNameRef.current.value = null
//   }

//   function handleClearTodos() {
//     const unCompletedTodos = todos.filter(todo => !todo.complete)
//     setTodos(unCompletedTodos)
//   }

//   return (
//     <>
//       <TodoList todos={todos} toggleTodo={toggleTodo} />
//       <input ref={todoNameRef} type="text" />
//       <button onClick={handleAddTodo}>Add Todo</button>
//       <button onClick={handleClearTodos}>Clear Complete</button>
//       <div>{todos.filter(todo => !todo.complete).length} left to do</div>
//     </>
//   )
// }

// export default App;

import React, { useState } from 'react';
import TodoList from './TodoList';


function App() {
  const [todos, setTodos] = useState(['Todo 1', 'Todo2'])
  return (
    <>
      <TodoList />
      <input type="text" />
      <button> Add Todo </button>
      <button> Clear Complete </button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
