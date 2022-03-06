
import React, { useState } from "react";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setToDos] = useState([])
  return (
    <div className="App">
      <header>
        <h1>Nepson Todo List</h1>
      </header>
      <Form setInputText={setInputText} todos={todos} setToDos={setToDos} inputText={inputText} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
