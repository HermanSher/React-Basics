import React from "react";
// import { useNavigate} from "react-router-dom";
import ChangeAccount from "./ChangeAccount";

const Account = (props) => {
  // const navigate = useNavigate();
  return (
    <div>
      <h1>This Account is for {props.userName}</h1>
      <ChangeAccount setUserName = {props.setUserName}/>
    </div>
  );
};

export default Account;


// {/* <button
// onClick={() => {
  // navigate("/");
// }}
// >
// Change To Home
// </button> */}