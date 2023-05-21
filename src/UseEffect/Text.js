import { useState, useEffect } from "react";

const Text = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  const handleText = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input onChange={handleText} />
      <h1 style={{ color: "red" }}>{text}</h1>
    </div>
  );
};

export default Text;
