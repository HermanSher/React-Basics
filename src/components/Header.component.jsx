import Footer from "./Footer.component";
import '../Styles/header.styles.css'


const Header = function () {
  return (
    <div className="header">
      <h1 id="topic">Header</h1>

      <p>This is my React_Life</p>
      <Footer/>
    </div>
  );
};

// const Footer = function () {
//   return <h1>Footer</h1>;
// };

// export default Header; for single component export
//Named Export
// export { Header, Footer };
// export { Footer };
export default Header;
