import { useState } from "react";

const EnterInput = ({ onAdd }) => {
  const [input, setInput] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Enter todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => onAdd(input)}>Add</button>
    </>
  );
};

export default EnterInput;
