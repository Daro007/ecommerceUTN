import React from "react";
import "./App.css";
import Registro from "./Paginas/Registro";
import Login from "./Paginas/Login";
import Homepage from "./Paginas/Homepage";
import DetalleProducto from "./Paginas/DetalleProducto";
import { Switch, Route } from "react-router-dom";
import Footer from "./Componentes/Footer";
import Header from "./Componentes/Header";
import BarraNav from "./Componentes/Nav";
import { Redirect } from "react-router-dom";
import Cart from "./Paginas/Cart";
import PaymentForm from "./Paginas/PaymentForm";
import ThankYou from "./Paginas/ThankYou";

// import { render } from "@testing-library/react";

function App() {
  return (
    <div className="App">
      <div id="content-wrap">
        <Header />
        <BarraNav />
        <Switch>
          <Route exact path="/Registro">
            <Registro />
          </Route>
          <Route exact path="/ThankYou">
            {localStorage.getItem("usuarioLogueado") ? (
              <ThankYou />
            ) : (
              <Redirect exact to="/Login" />
            )}
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/PaymentForm">
            {localStorage.getItem("usuarioLogueado") ? (
              <PaymentForm />
            ) : (
              <Redirect exact to="/Login" />
            )}
          </Route>
          <Route exact path="/Cart">
            {localStorage.getItem("usuarioLogueado") ? (
              <Cart />
            ) : (
              <Redirect exact to="/Login" />
            )}
          </Route>
          <Route exact path="/">
            {localStorage.getItem("usuarioLogueado") ? (
              <Homepage />
            ) : (
              <Redirect exact to="/Login" />
            )}
          </Route>
          <Route exact path="/productos/:id">
            {localStorage.getItem("usuarioLogueado") ? (
              <DetalleProducto />
            ) : (
              <Redirect exact to="/Login" />
            )}
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
