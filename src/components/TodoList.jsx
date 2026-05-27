import TodoItem from "./todoItem";
function TodoList({ 
  list, 
  deleteTodo,
  toggleTodo,
  editTodo
}) {

  return (
    <ul>
      {list.map((item, index) => (
        <TodoItem
          key={index}
          item={item}
          index={index}
          editTodo = {editTodo}
          toggleTodo = {toggleTodo}
          deleteTodo = {deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;