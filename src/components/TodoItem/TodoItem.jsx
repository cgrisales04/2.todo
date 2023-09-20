const TodoItem = ({ todo }) => {
  console.log(todo);
  return (
    <tr>
      <th scope="row">{todo.id}</th>
      <td>{todo.title}</td>
      <td>{todo.completed}</td>
      <td>
        
      </td>
    </tr>
  );
};

export default TodoItem;
