import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos }) => {
  return (
    <div className="mt-4">
      <h3>Lista de tareas</h3>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tarea</th>
            <th scope="col">Estado</th>
            <th scope="col">Funciones</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <TodoItem key={TodoItem.id} todo={todo}></TodoItem>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
