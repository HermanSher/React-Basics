import { useState, useEffect } from "react";
import Axios from "axios";

// const facts =  fetch("https://catfact.ninja/fact").then((res)=>{
//     res.json().then((data)=>{

//     })
// })

export const CatFacts = () => {
  const [catFact, setCatFact] = useState("");

  const handleFactButton = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    handleFactButton();
  }, []);

  return (
    <div className="App">
      <button onClick={handleFactButton}>Generate Cat Fact</button>
     <h1><p>{catFact}</p></h1> 
    </div>
  );
};
