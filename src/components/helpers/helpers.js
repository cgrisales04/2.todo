export default function findTaskById(id = "", todos = []) {
  return todos.find((task) => task.id == id);
}
