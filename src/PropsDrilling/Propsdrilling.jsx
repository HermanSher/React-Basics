import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// import Navigation from "./Pages/Navigation";
import Shop from "./Pages/Shop";
import Account from "./Pages/Account";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navigation from "./Pages/Navigation";

export const Propsdrilling = () => {
  const [userName, setUserName] = useState("Sam smith");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home userName = {userName}/>} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/account" element={<Account userName = {userName} setUserName = {setUserName}/>} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Route>
      </Routes>
    </Router>
  );
};
