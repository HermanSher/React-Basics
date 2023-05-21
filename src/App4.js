// import React from "react";
// import { useState } from "react";
// import "./App.css";

//STATE IN REACT USESTATE HOOK

// const App = () => {
//Calling useState,setAge is a function
//    const [age, setAge] = useState(0);
// let age1 = 0;
// const increaseAge = function(){
//     age1++;
//     console.log(age)
// }
//   const increaseAge = function () {
//     setAge(age + 1);
//     console.log(age);
//   };
/////////////////////////////////////////////////

//   return (
//     <div>
//       {age}
//       <button onClick={increaseAge}>Increase</button>
//     </div>
//   );
// };

// export default App;
////////////////////////////////////
////ANOTHER EXAMPLE WITH HOOK(useState) for capturing type even with event.target.value
/*const App = () => {
  const [inputText, setInputText] = useState("");

  const inputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={inputChange} />
      {inputText}
    </div>
  );
};

export default App;*/

//ANOTHER EXAMPLE WITH HOOK HIDE AND SHOW TEXT
// const App = () => {
//     const [showText, setShowText] = useState(false);

//     const handleText = ()=>{
//         setShowText(!showText);
//     }
//   return (
//     <div>
//         <button onClick={handleText}>Show/Hide</button>
//         {showText === true && <h1>HI MY NAME IS HERMANN</h1>}
//     </div>
//   )
// }

// export default App

//////////////////////////////////////
// const App = () => {
//   const [textColor, setTextColor] = useState("red");

//   const toggleColor = () => {
//     setTextColor(textColor === "red" ? "green" : "red");
//   };

//   return (
//     <div>
//       <h1 style={{ color: textColor }}>HI MY NAME IS HERMANN</h1>
//       <button onClick={toggleColor}>Toggle Color</button>
//     </div>
//   );
// };
// export default App


//////////////////////////////////////////////////
//Counter App


// const App = () => {
//   let [count, setCount] = useState(0);

//   const increCount = () => {
//     setCount(count + 1);
//     console.log(count);
//   };

//   const decreCount = () => {
//     setCount(count - 1);
//     console.log(count);
//   };

//   const restCount = () => {
//     setCount((count = 0));
//     console.log(count);
//   };

//   return (
//     <div className="App">
//       <h1>{count}</h1>
//       <button className="btn" onClick={increCount}>
//         Increase
//       </button>
//       <button className="btn" onClick={decreCount}>
//         Decrease
//       </button>
//       <button className="btn" onClick={restCount}>
//         Set to Zero
//       </button>
//     </div>
//   );
// };

// export default App;
