// const Planets = (props) => {
//   return (
//     <div>
//         <h3>{props.name}</h3>
//     </div>
//   )
// }

// export default Planets


const Planets = () => {
    const planets = [
      { name: "Mars", isGasPlanet: false },
      { name: "Earth", isGasPlanet: false },
      { name: "Jupiter", isGasPlanet: true },
      { name: "Venus", isGasPlanet: false },
      { name: "Neptune", isGasPlanet: true },
      { name: "Uranus", isGasPlanet: true },
    ];
    return (
      <div>
          {planets.map((planet)=>{
           return planet.isGasPlanet && <h3 key={planet.name}>{planet.name}</h3>
          })}
      </div>
    )
  }
  
  export default Planets