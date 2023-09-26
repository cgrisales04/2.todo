import uuid4 from "uuid4";
import findTaskById from "../helpers/helpers";

const Form = ({ inputTodo, setInputTodo, todos, setTodos, accionById }) => {
  const handlerTask = (event) => {
    setInputTodo(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (accionById.accion == "Add") {
      if (inputTodo !== "") {
        const newTodo = {
          id: uuid4(),
          title: inputTodo,
          completed: false,
        };
        setTodos([...todos, newTodo]);
      }
    }
    if (accionById.accion == "Update") {
      const task_selected = findTaskById(accionById.id, todos);
      if (task_selected) {
        task_selected.title = inputTodo;
        accionById.accion = "Add";
        accionById.id = "";
      }
    }
    setInputTodo("");
  };

  return (
    <form onSubmit={submitForm} className="d-flex flex-row">
      <input
        type="text"
        autoComplete="off"
        className="form form-control"
        name="task"
        placeholder="Ingresar tarea."
        value={inputTodo}
        onChange={(event) => {
          handlerTask(event);
        }}
      />
      <button type="submit" className="btn btn-success ms-3">
        {accionById.accion}
      </button>
    </form>
  );
};

export default Form;
