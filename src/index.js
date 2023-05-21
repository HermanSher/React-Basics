// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { MainApp } from "./ChildToParent/MainApp";
import { App } from "./UseContext/App";
// import { App } from "./UseContext/App";
// import { MyRoutesApp } from "./MyRoutes/MyRoutesApp";
// import { Propsdrilling } from "./PropsDrilling/Propsdrilling";
// import App from "./RouteDom/App";
// import RouteApp from "./MainApps/Route";
// import Route from "./MainApps/Route";
// import { CatFacts } from "./UseEffect/CatFacts";
// import { PredictAge } from "./UseEffect/PredictAge";
// import { Excuser } from "./UseEffect/Excuser";
// import App2 from "./App2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //  <CatFacts/>
  // <PredictAge/>
  // <div>
  //   {/* <App/> */}
  // </div>
  // <RouteApp/>
  // <MyRoutesApp/>
    // <Propsdrilling/>
    // <App/>
    <div>
    {/* <MainApp/> */}
    <App/>
    </div>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
