import { useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const [inputTodo, setInputTodo] = useState("");
  const [accionById, setAccionById] = useState({ accion: "Add", id: "" });
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Header></Header>
      <Form
        inputTodo={inputTodo}
        setInputTodo={setInputTodo}
        todos={todos}
        setTodos={setTodos}
        accionById={accionById}
      ></Form>
      <TodoList
        todos={todos}
        setTodos={setTodos}
        setInputTodo={setInputTodo}
        setAccionById={setAccionById}
      ></TodoList>
    </div>
  );
};

export default App;
