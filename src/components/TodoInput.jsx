import { useState, useEffect } from "react";
export default function TodoInput({ onAddTodo }){
  const [text, setText] = useState("");

  const handleAdd = () =>{
    if (text.trim() === "") return;
    onAddTodo(text);
    setText("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="What do you need to do?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="box-border w-72 h-12 border-2 rounded-lg"
      />

      <button
        onClick={handleAdd}
        className="bg-gray-500 hover:bg-gray-600 text-white px-4 h-12 rounded-r-lg"
      >Add</button >
    </>
  );
}



