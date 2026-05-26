import { useState, useEffect } from "react";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function ToDo() {
  const [text, setText] = useState("");
  const [list, setList] = useState(() => {
  const savedList = localStorage.getItem("todos");
    return savedList ? JSON.parse(savedList) : [];
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(list));
  }, [list]);
  return (
    <div className="bg-gray-800 min-h-screen">
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-200 p-6 rounded-xl w-100">

          <TodoInput
            text={text}
            setText={setText}
            list={list}
            setList={setList}
          />

          <TodoList
            list={list}
            setList={setList}
            editingIndex={editingIndex}
            setEditingIndex={setEditingIndex}
            editText={editText}
            setEditText={setEditText}
          />

        </div>
      </div>
    </div>
  );
}

export default ToDo;