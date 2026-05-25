import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function Input() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedList = localStorage.getItem("todos");


    if (savedList) {
      setList(JSON.parse(savedList));
    }
    setLoaded(true);

  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("todos", JSON.stringify(list));
    }
  }, [list, loaded]);
  return (
    <div className="bg-gray-800 min-h-screen">
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-200 p-6 rounded-xl w-100">
          <>

            <input type="text" placeholder="What do you need to do?"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className=" box-border w-72 h-12 border-2 rounded-lg"
            />

            <button onClick={() => {
              if (text.trim() === "") return;
              setList([...list, {
                text: text,
                done: false
              }]);
              setText("");


            }} className="bg-gray-500 hover:bg-gray-600 text-white px-4 h-12 rounded-r-lg">Add</button>

            <ul>
              {
                list.map((item, index) => (
                  <div key={index} className="flex justify-between items-center bg-blue-300 p-3 my-2 rounded-xl hover:bg-blue-400 transition-all duration-300 ">
                    <li className="flex items-center gap-2 mt-2 ">
                      {editingIndex === index ? (
                        <>
                          <input
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            className="border-2 rounded-lg px-2 py-1"

                          />

                          <button
                            
                            onClick={() => {
                              if (editText.trim() === "") return;
                              const updatedList = [...list];
                              
                                updatedList[index] = {
                                ...updatedList[index],
                                text: editText
                              }

                              setList(updatedList);
                              setEditingIndex(null);
                              setEditText("");
                            }}
                            className="bg-gray-800 hover:bg-gray-600 text-white px-2 py-1 rounded-r-lg gap-0"
                              
                          >
                            Save
                          </button>
                        </>
                      ) : (
                        <>
                          <span
                            style={{
                              textDecoration: item.done ? "line-through" : "none"
                            }}
                          >
                            {item.text}
                          </span>

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
                              setEditText(list[index].text);
                            }}
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <input type="checkbox"
                            checked={item.done}
                            onChange={(e) => {
                              const updatedList = [...list];
                              updatedList[index] = {
                                ...updatedList[index],
                                done: e.target.checked
                              };
                              setList(updatedList);
                            }}
                          />
                        </>
                      )}
                    </li>
                  </div>
                ))}
            </ul>


          </>
        </div>
      </div>
    </div>
  );
}
export default Input;
