import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  let {username} = useParams();
  return (
    <div>
      <h1>This is the Account page of {username}</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Change To Home
      </button>
    </div>
  );
};

export default Account;
