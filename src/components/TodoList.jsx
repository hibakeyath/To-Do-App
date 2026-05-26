import TodoItem from "./todoItem";

function TodoList({
  list,
  setList,
  editingIndex,
  setEditingIndex,
  editText,
  setEditText
}) {
  return (
    <ul>
      {list.map((item, index) => (
        <TodoItem
          key={index}
          item={item}
          index={index}
          list={list}
          setList={setList}
          editingIndex={editingIndex}
          setEditingIndex={setEditingIndex}
          editText={editText}
          setEditText={setEditText}
        />
      ))}
    </ul>
  );
}

export default TodoList;