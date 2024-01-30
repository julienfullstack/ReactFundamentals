import React from "react";
import coffeesImage from "./../img/coffee.jpg";

function Header(){
  return (
    <React.Fragment>
      <h1>Coffee Shop</h1>
      <img src={coffeesImage} alt="An image of coffees" style={{ width: "500px" }} />
    </React.Fragment>
  );
}

export default Header;