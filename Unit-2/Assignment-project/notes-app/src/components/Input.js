import React, {useState} from "react"

const Input = ({onAdd}) => {
    const [inputText, setInputText ] = useState("");

    const handleAdd = () => {
        onAdd(inputText);
        setInputText("");
    }
   return (
    <div style={{ margin: "1rem" }} className="contains">
      <input
        className="input-container "
        type="text"
        placeholder="Type your note..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="add-button" onClick={handleAdd}>+</button>
    </div>
  );

}

export default Input