import { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function ToDo() {

  const [list, setList] = useState([]);

  useEffect(() => {
    if (list.length === 0) {
      fetch("https://dummyjson.com/todos")
        .then((res) => res.json())
        .then((data) => {
           const formattedTodos = data.todos.map((todo) => ({
            text: todo.todo,
            done: todo.completed
          }));

        setList(formattedTodos);
        });
    }
  }, []);

  
  const addTodo = (text) => {
    fetch("https://dummyjson.com/todos/add",{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        todo: 'Use DummyJSON in the project',
        completed: false,
        userId: 5,
      })
    })
    .then(res => res.json())
    .then(console.log);
    
    setList([
      ...list,
      {
        text,
        done: false
      }
    ]);
  };

  const deleteTodo = (index) => {
    fetch('https://dummyjson.com/todos/1', {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(console.log);
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  const toggleTodo = (index, checked) => {
    fetch('https://dummyjson.com/todos/1', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        completed: checked,
      })
    })
      .then(res => res.json())
      .then(console.log);
  
    const updatedList = [...list];

    updatedList[index] = {
      ...updatedList[index],
      done: checked
    };

    setList(updatedList);
  }
    
  

  const editTodo = (index, text) => {
    const updatedList = [...list];

    updatedList[index] = {
      ...updatedList[index],
      text
    };

    setList(updatedList);
  };

  return (
    <div className="bg-gray-800 min-h-screen">
      <div className="flex justify-center pt-10 min-h-screen">
        <div className="bg-gray-200 p-6 rounded-xl w-100">

          <TodoInput onAddTodo={addTodo} />

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