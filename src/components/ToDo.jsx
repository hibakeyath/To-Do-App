
import { useState, useEffect } from "react";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function useTodo() {

    const [list, setList] = useState(() => {
        const savedList = localStorage.getItem("todos");
        return savedList ? JSON.parse(savedList) : [];
    });
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(list));
    }, [list]);
     const addTodo = (text) => {
        setList([...list,
        {
            text: text,
            done: false
        }
        ])
    }

   
    const deleteTodo = (index) => {
        const updatedList = [...list];
        updatedList.splice(index, 1);
        setList(updatedList);
    };
    const toggleTodo = (index, checked) => {
        const updatedList = [...list];
        updatedList[index] = {
            ...updatedList[index],
            done: checked
        };
        setList(updatedList);
    };
    const editTodo = (index, text) => {
        const updatedList = [...list];
        updatedList[index] = {
            ...updatedList[index],
            text
        };
        setList(updatedList);

    }

    return (
        {
            list,
            addTodo,
            deleteTodo,
            toggleTodo,
            editTodo
        }
    )
}

function ToDo() {
  const {
    list,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodo
  } = useTodo();

  return (
    <div className="bg-gray-800 min-h-screen">
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-200 p-6 rounded-xl w-100">
          <TodoInput
            onAddTodo={addTodo}
          />
          <TodoList
            list={list}
            editTodo={editTodo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />

        </div>
      </div>
    </div>
  );
}

export default ToDo;