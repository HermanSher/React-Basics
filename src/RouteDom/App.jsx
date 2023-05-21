import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import {Data, dataLoader} from "./Data";
import Contact from "./Contact";
import { Root } from "./Root";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<Home />} />
        <Route path="/data" element={<Data />} loader={dataLoader}/>
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );

  return <div className="App">
    <RouterProvider router = {router}/>
  </div>;
};

export default App;
