import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createContext } from "react";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";

export const AppContext = createContext();

export const App = () => {
  const [username, setUsername] = useState("Zyloon");
  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <Router>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/profile"}>Profile</Link>
          <Link to={"/contact"}>Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
};
