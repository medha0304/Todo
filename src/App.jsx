import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "from 7-9",
    completed: false
  }, {
    title: "Study DSA",
    description: "from 9- 10",
    completed: true
  }]);

  function addTodo() {
    setTodos([...todos, {
      title: "new Todo",
      description: "des of new todo"
    }])
  }
  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description}></Todo>
      })

      }
    </div>
  )
}

//whenevr u are rendering arrays, u should create a component given a single todo
function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
