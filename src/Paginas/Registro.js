import React, { useState } from "react";
import Form from "react-bootstrap/Form";

import firebase from "../Config/firebase";
import Alert from "react-bootstrap/Alert";
import { Redirect } from "react-router-dom";

function Registro() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    password: "",
    password2: "",
  });
  const [show, setShow] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  function handleSubmit(e) {
    const formulario = document.querySelector(".needs-validation");

    if (formulario.checkValidity() === true) {
      e.preventDefault();
      const auth = firebase.auth();
      const promise = auth.createUserWithEmailAndPassword(
        form.email,
        form.password
      );
      promise.then((e) => setIsRegistered(true));
      promise.catch((e) => setShow(true));
    } else if (formulario.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    formulario.classList.add("was-validated");
  }
  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    setForm({
      ...form,
      [name]: value,
    });
  }

  function AlertDismissibleExample() {
    if (show) {
      return (
        <Alert
          variant="danger"
          className="alertLogin"
          onClose={() => setShow(false)}
          dismissible
        >
          <Alert.Heading>Error:</Alert.Heading>
          <p>
            Ha habido un inconveniente y no se ha podido registrar. Por favor,
            para más información contacte con nosotros a nuestro e-mail de
            soporte.
          </p>
        </Alert>
      );
    }
    return null;
  }

  return (
    <div>
      <h2 className="text-center bg-danger text-white py-2 subtitulo">
        Registrate y accede a los mejores cursos
      </h2>
      <AlertDismissibleExample />

      <Form
        id="formulario"
        action=""
        className="needs-validation col-lg-6 offset-lg-3"
        noValidate
        onSubmit={handleSubmit}
      >
        <h2 className="text-center">Formulario de registro</h2>
        <br />
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="nombre">
                <strong>Nombre</strong>
              </label>
              <input
                name="nombre"
                id="nombre"
                type="text"
                className="form-control"
                required
                onChange={handleChange}
              />
              <div className="invalid-feedback">Campo obligatorio</div>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="apellido">
                <strong>Apellido</strong>
              </label>
              <input
                name="apellido"
                id="apellido"
                type="text"
                className="form-control"
                required
                onChange={handleChange}
              />
              <div className="invalid-feedback">Campo obligatorio</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="email">
                <strong>E-mail</strong>
              </label>
              <input
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                name="email"
                id="email"
                type="email"
                className="form-control"
                required
                onChange={handleChange}
              />
              <div className="invalid-feedback">Ingrese un E-mail valido</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="telefono">
                <strong>Telefono</strong>
              </label>
              <input
                name="telefono"
                id="telefono"
                type="number"
                className="form-control"
                required
                onChange={handleChange}
              />
              <div className="invalid-feedback">Campo obligatorio</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="password">
                <strong>Contraseña</strong>
              </label>
              <input
                id="password"
                type="password"
                name="password"
                className="form-control"
                required
                minLength="6"
                onChange={handleChange}
              />
              <div className="invalid-feedback">Mínimo 6 caracteres</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="password2">
                <strong>Repetir Contraseña</strong>{" "}
              </label>
              <input
                id="password2"
                name="password2"
                type="password"
                className="form-control"
                required
                minLength="6"
                onChange={handleChange}
              />
              <div className="invalid-feedback">Campo obligatorio</div>
            </div>
          </div>
        </div>

        <div className="form-group row">
          <div className="col">
            <button type="submit" className="btn btn-dark">
              Registrarme
            </button>
          </div>
        </div>
      </Form>
      {isRegistered ? <Redirect to="/" /> : null}
    </div>
  );
}

export default Registro;
