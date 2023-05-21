import "./App.css";
import User from "./components/User";

const App2 = () => {
  //   const names = ["Hermann", "Fahyien", "Rehan", "Farhan", "Reyan","Lucas"];
  const users = [
    { name: "Hermann", age: 26 },
    { name: "Fahyien", age: 22 },
    { name: "Reyan", age: 16 },
  ];
  return (
    <div className="App">
      {/* with array */}
      {/* {names.map((name,key)=>{
        return <h1 key = {key}> {name} </h1>
    })} */}

      {/* with object */}
      {/* {users.map((user, key) => {
        return <div>{user.name} {user.age}</div>
      })} */}

      {/* with props */}
      {users.map((user, key) => {
        return <User namee={user.name} age={user.age} />;
      })}
    </div>
  );
};

export default App2;
