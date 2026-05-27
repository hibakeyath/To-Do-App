import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function TodoItem({
  item,
  index,
  editTodo,
  toggleTodo,
  deleteTodo
}) 
{
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.text);

  const handleSave = () => {
    editTodo(index, editText);
    setIsEditing(false);
  };
  
  
  return (
    <li className="flex justify-between items-center bg-blue-300 p-3 my-2 rounded-xl hover:bg-blue-400 transition-all duration-300">

      {isEditing  ? (
        <>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="border-2 rounded-lg px-2 py-1"
          />

          <button
            onClick={handleSave}
            className="bg-gray-800 hover:bg-gray-600 text-white px-2 py-1 rounded-lg"
            >
            Save
          </button>
        </>
      ) : (
        <div className="flex items-center gap-3 w-full">
          <span style={{textDecoration: item.done ? "line-through" : "none"}}>{item.text}</span>

          <button onClick={() => {deleteTodo(index)}}>
            <FontAwesomeIcon icon={faTrash} />
          </button> 

          <button onClick={() => {
            setIsEditing(true);
            setEditText(item.text);
          }}>
            <FontAwesomeIcon icon={faEdit} />
          </button>

          <input
            type="checkbox"
            checked={item.done}
            className="w-5 h-5"
            onChange={(e) =>
              toggleTodo (index, e.target.checked)
            }
          /> 

        </div>
      )}
    </li>
  );
}

export default TodoItem;