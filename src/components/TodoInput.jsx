function TodoInput({
  text,
  setText,
  list,
  setList
}) {
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
        onClick={() => {
          if (text.trim() === "") return;

          setList([...list,
            {
              text: text,
              done: false
            }
          ]);

          setText("");
        }}
        className="bg-gray-500 hover:bg-gray-600 text-white px-4 h-12 rounded-r-lg"
      >
        Add
      </button>
    </>
  );
}

export default TodoInput;