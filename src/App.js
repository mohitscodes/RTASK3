import React, { useState } from "react";
import "./styles.css";

function App() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (e) => {
    setText(e.target.value);
    const words = e.target.value.split(" ");
    setWordCount(words.length);
  };

  return (
    <div className="container">
      <p>Word Counter</p>
      <input
        type="text"
        className="text-field"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text here..."
      />
      <p className="word-count">Word count: {wordCount}</p>
    </div>
  );
}

export default App;
