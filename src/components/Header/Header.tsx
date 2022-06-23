import { NavBar } from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./style.css";

const mainNav = ["About", "Services", "Pricing", "Blog"];

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/" className="logo">
          <img src="./img/logo.png" alt="logo" className="logo__icon" />
          <h3 className="logo__title">Agency</h3>
        </Link>
        <NavBar links={mainNav} className="main-nav" />
        <Button
          text="Contact"
          onClick={() => console.log("Do something")}
          className="header__button"
        />
      </div>
    </header>
  );
};
