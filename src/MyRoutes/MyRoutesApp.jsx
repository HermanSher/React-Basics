import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navigation from "./Pages/Navigation";
import Shop from "./Pages/Shop";
import Account from "./Pages/Account";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navigation from "./Pages/Navigation";

export const MyRoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/account/:username" element={<Account />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Route>
      </Routes>
    </Router>
  );
};
