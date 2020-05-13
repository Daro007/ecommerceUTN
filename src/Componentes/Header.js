import React from "react";
import UTNimg from "../Images/UTN-eLearning-fondo.png";

function Header() {
  return (
    <div>
      <header className="appHeader">
        <img
          id="logo"
          className="img-responsive"
          src={UTNimg}
          alt="Imagen del Campus Virtual UTN FRBA"
        />
      </header>
    </div>
  );
}

export default Header;
