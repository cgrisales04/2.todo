import { useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Header></Header>
      <Form
        inputTodo={inputTodo}
        setInputTodo={setInputTodo}
        todos={todos}
        setTodos={setTodos}
      ></Form>
      <TodoList todos={todos}></TodoList>
    </div>
  );
};

export default App;
