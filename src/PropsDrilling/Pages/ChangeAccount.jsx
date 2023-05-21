import React, { useState } from "react";

function ChangeAccount(props) {
  const [newUser, setNewUser] = useState("");
  return (
    <div>
      <input
        onChange={(event) => {
          setNewUser(event.target.value);
        }}
      />
      <button
        onClick={() => {
          props.setUserName(newUser);
        }}
      >
        Change Account
      </button>
    </div>
  );
}

export default ChangeAccount;
