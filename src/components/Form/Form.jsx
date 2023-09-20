import uuid4 from "uuid4";

const Form = ({ inputTodo, setInputTodo, todos, setTodos }) => {
  const handlerTask = (event) => {
    setInputTodo(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    const newTodo = {
      id: uuid4(),
      title: inputTodo,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputTodo("");
  };

  return (
    <form onSubmit={submitForm} className="d-flex flex-row">
      <input
        type="text"
        className="form form-control"
        name="task"
        placeholder="Ingresar tarea."
        value={inputTodo}
        onChange={(event) => {
          handlerTask(event);
        }}
      />
      <button type="submit" className="btn btn-success ms-3">
        Add
      </button>
    </form>
  );
};

export default Form;
