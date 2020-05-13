import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import firebase from "../Config/firebase";
import { FaShoppingCart } from "react-icons/fa";

function BarraNav() {
  function logout() {
    firebase.auth().signOut();
    localStorage.removeItem("usuarioLogueado");
    console.log("has cerrado tu sesion");
    window.location.reload(false);
  }

  return (
    <Navbar className="navbar navbar-dark bg-dark navbar-expand-lg" expand="lg">
      <Navbar.Brand>
        <span className="text-white brand"> UTN.BA - </span>
        <span className="text-danger brand">Centro de e-Learning</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="navbar-nav ml-auto justify-content-end"
      >
        <Nav className="navbar-nav ml-auto justify-content-end">
          <Nav.Link className="nav-link" as={Link} to="/Cart">
            <span>
              {" "}
              <FaShoppingCart className="carritoNav" />
            </span>
          </Nav.Link>
          <Nav.Link className="nav-link" as={Link} to="/">
            {" "}
            <span>Inicio</span>
          </Nav.Link>
          <Nav.Link className="nav-link" as={Link} to="/Registro">
            <span>Registro </span>
          </Nav.Link>

          {localStorage.getItem("usuarioLogueado") ? (
            <Nav.Link
              as={Link}
              className="nav-link"
              onClick={logout}
              to="/Login"
            >
              {" "}
              <span> Log out</span>
            </Nav.Link>
          ) : (
            <Nav.Link as={Link} className="nav-link" to="/Login">
              {" "}
              <span> Login</span>
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default BarraNav;
