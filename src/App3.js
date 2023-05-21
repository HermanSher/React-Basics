import React from "react";
import Planets from "./components/Planets";

const App3 = () => {
  // const planets = [
  //   { name: "Mars", isGasPlanet: false },
  //   { name: "Earth", isGasPlanet: false },
  //   { name: "Jupiter", isGasPlanet: true },
  //   { name: "Venus", isGasPlanet: false },
  //   { name: "Neptune", isGasPlanet: true },
  //   { name: "Uranus", isGasPlanet: true },
  // ];
  //   const gasPlanets = planets.filter((planet) => planet.isGasPlanet);

  return (
    <div>
      {
        // planets.map(
        //   (planet) =>
        //     planet.isGasPlanet && <h1 key={planet.name}> {planet.name}</h1>
        // )

        /* {gasPlanets.map((planet)=>{
        return <Planets key={planet.name} name={planet.name}/>
       })} */


       <Planets/>

      }
    </div>
  );
};

export default App3;


// 7061349807
