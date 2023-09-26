import styles from "./TodoItem.module.css";

import findTaskById from "../helpers/helpers";

const TodoItem = ({ todo, todos, setTodos, setInputTodo, setAccionById }) => {
  const deleteTask = (id) => {
    const delete_task = todos.filter((task) => task.id !== id);
    setTodos([...delete_task]);
  };

  const updateTask = (id) => {
    const getTask = findTaskById(id, todos);
    setAccionById({ accion: "Update", id });
    setInputTodo(getTask.title);
  };

  const updateStatus = (id) => {
    const getTask = findTaskById(id, todos);
    if (getTask) {
      getTask.completed = !getTask.completed;
      setTodos([...todos]);
    }
  };

  return (
    <tr>
      <th scope="row">{todo.id}</th>
      <td>{todo.title}</td>
      <td>
        <span
          onClick={() => {
            updateStatus(todo.id);
          }}
          className={
            styles.cpointer +
            " badge text-bg-" +
            (todo.completed ? "success" : "danger")
          }
        >
          {todo.completed ? "Completada" : "Pendiente"}
        </span>
      </td>
      <td>
        <i
          onClick={() => {
            deleteTask(todo.id);
          }}
          className={styles.cpointer + " fa-solid fa-trash-can me-4 c-pointer"}
        ></i>
        <i
          onClick={() => {
            updateTask(todo.id);
          }}
          className={styles.cpointer + " fa-solid fa-pencil c-pointer"}
        ></i>
      </td>
    </tr>
  );
};

export default TodoItem;
