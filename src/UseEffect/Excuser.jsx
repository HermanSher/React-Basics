import { useState } from "react";
import Axios from "axios";
// import '../Styles/Excuser.css'
import "../Styles/excuser.scss";

export const Excuser = () => {
  const [excuser, setExcuser] = useState("");

  const handleFetchExcuse = (type) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${type}/`).then(
      (res) => {
        setExcuser(res.data[0].excuse);
      }
    );
  };
  //   const handleExcuse = (name) => {
  //     FetchExcuse(name);
  //   };
  return (
    <div className="Excuser">
      <div className="heading">
        <h1 className="heading">Generate an Excuse!!</h1>
      </div>
      <div className="buttons">
        <button
          className="btn-party"
          onClick={() => handleFetchExcuse("party")}
        >
          PARTY
        </button>
        <button
          className="btn-office"
          onClick={() => handleFetchExcuse("office")}
        >
          OFFICE
        </button>
        <button
          className="btn-family"
          onClick={() => handleFetchExcuse("family")}
        >
          FAMILY
        </button>
      </div>
      <div className="answer">
        <h3 className="result">{excuser}</h3>
      </div>
    </div>
  );
};
