import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="footer bg-danger">
        <p className="text-white">© 2020 Centro de e-Learning UTN FRBA</p>

        <a
          href="https://www.facebook.com/CursosonlineUTN/"
          about="_blank"
          className="icons"
        >
          <FaTwitter></FaTwitter>
        </a>
        <a
          className="icons"
          href="https://twitter.com/elearningUTN"
          about="_blank"
        >
          <FaFacebook></FaFacebook>
        </a>
      </footer>
    </div>
  );
}

export default Footer;
