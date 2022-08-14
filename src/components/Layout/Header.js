import React, { Fragment } from "react";
import "./Header.css";
import mainImage from "../../assests/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h1>Food Hub</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className="main-image">
        <img src={mainImage} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
