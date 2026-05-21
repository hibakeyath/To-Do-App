import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function Input() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");
  return (
    <>
      <input type="text" placeholder="What do you need to do?" 
      value={text} 
      onChange={(e) => setText(e.target.value)}
      />
      <button onClick={()=>{

        if (text.trim() === "") return;

        setList([...list,text]);
        setText("");
        
      }} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-r-lg ">Add</button>       
      <ul>
        {
          list.map((item,index)=>(
          <li key={index}>
            {editingIndex === index ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
            <button
                  onClick={() => {
                    const updatedList = [...list];
                    updatedList[index] = editText;
                    setList(updatedList);

                    setEditingIndex(null);
                    setEditText("");

                  }}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                {item}
                 <button
                  onClick={() => {
                    const newvalue = [...list];
                    newvalue.splice(index, 1);
                    setList(newvalue);
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <button
                  onClick={() => {
                    
                    setEditingIndex(index);
                    setEditText(list[index,""]); 
                  }}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </>
            )}
          </li>
        ))}
      </ul>   

    </>
  );
}
export default Input;
