import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function TodoItem({
  item,
  index,
  list,
  setList,
  editingIndex,
  setEditingIndex,
  editText,
  setEditText
}) {
  return (
    <li className="flex justify-between items-center bg-blue-300 p-3 my-2 rounded-xl hover:bg-blue-400 transition-all duration-300">

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
              };

              setList(updatedList);
              setEditingIndex(null);
              setEditText("");
            }}
            className="bg-gray-800 hover:bg-gray-600 text-white px-2 py-1 rounded-lg"
          >
            Save
          </button>
        </>
      ) : (
        <div className="flex items-center gap-3 w-full">

          <span
            style={{
              textDecoration: item.done ? "line-through" : "none"
            }}
          >
            {item.text}
          </span>

          <button
            onClick={() => {
              const updatedList = [...list];
              updatedList.splice(index, 1);
              setList(updatedList);
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>

          <button
            onClick={() => {
              setEditingIndex(index);
              setEditText(item.text);
            }}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>

          <input
            type="checkbox"
            checked={item.done}
            className="w-5 h-5"
            onChange={(e) => {
              const updatedList = [...list];

              updatedList[index] = {
                ...updatedList[index],
                done: e.target.checked
              };

              setList(updatedList);
            }}
          />

        </div>
      )}
    </li>
  );
}

export default TodoItem;