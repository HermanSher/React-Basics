// import React from 'react'
// import "./App.css";
import styles from "./App.module.css";
// import {Header, Footer} from './components/Header.component'; when not as default
// import Header, { Footer } from "./components/Header.component";
// import Header from "./components/Header.component";

// const details = <h1>Developer</h1>;

// const sal = 1500;
// function App() {
// const name = "Hermann";
// const name = <h1>hello, I am from a variable</h1>
// const name = <h1>Hermann</h1>;
// const age = <h2>{27}</h2>;
// const email = <h2>herman@hermann.com</h2>;
////////////////////////////////////
// const user = (
//   <div>
//     {name} {age} {email}
//   </div>
// );

// return (
//   <div className="App">
// {/* <h1>{name}</h1> */}
// {/* <div>
// {name} {age} {email}
// </div> */}
// {/* {user} */}
// {/* {details} */}
// {/* working with props */}
// {/* <User name="Hermann" age={26} email="hermann@mail.com" />
// <User name="Fahyien" age={22} email="fahyien@mail.com" />
// <User name="Reyan" age={16} email="reyan@mail.com" /> */}
//       <Job salary={sal} position="Senior SDE" company="Amazon" />
//       <Job salary={150000} position="Junior SDE" company="Google" />
//       <Job salary={120000} position="Project Manager" company="Netflix" />
//     </div>
//   );
// }

//Simple javaScript Function
// const getName = () => {
//   return "Hermann";
// };

//React Component
// const User = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.email}</h1>
//     </div>
//   );
// };

// const Job = (props) => {
//   return (
//     <div>
//       <h3>{props.salary}</h3>
//       {/* <h3>{sal}</h3> */}
//       <h3>{props.position}</h3>
//       <h3>{props.company}</h3>
//     </div>
//   );
// };
//////////////////////////////////////////////
/////////////////////////////////////////////
//Module 3 CSS In React

// function App(){
//   return (
//     <div classname= {styles.App}>
//       <h1 className = {styles.name}> Hermann</h1>
//     </div>
//   )
// }

///////////////////////////////////////////////////////
//////////TERNARY OPERATOR
function AppTest() {
  const age = 15;
  const isGreen = true;

  //   if(age>=18){
  //     return <h1>OVER AGE</h1>
  //   }else{
  //   return(
  //     <div className = {styles.App}>UNDER AGE</div>
  //   )
  // }

  return (
    <div className={styles.App}>
      {age >= 18 ? <h1>Over Age</h1> : <h1>UNDER AGE</h1>}

      <h1 style={{ color: isGreen ? "green" : "red" }}>This is some random</h1>

      {isGreen && <button>Luck</button>}
    </div>
  );
}

export default AppTest;
