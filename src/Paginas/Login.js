import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { Col, Container, Row } from "reactstrap";
import { ReactstrapInput } from "reactstrap-formik";
import firebase from "../Config/firebase";
import Alert from "react-bootstrap/Alert";
import { Redirect } from "react-router-dom";

function Login() {
  const [show, setShow] = useState(false);

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
          <p>Usuario y/o contraseña incorrectos.</p>
        </Alert>
      );
    }
    return null;
  }

  function redirect() {
    localStorage.setItem("usuarioLogueado", true);
    window.location.reload(false);
  }

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Campo obligatorio";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Por favor ingrese un e-mail válido";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        //Aca va la llamada a la API
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(
          values.email,
          values.password
        );
        promise.then((e) => redirect());
        promise.catch((e) => setShow(true));
      }}
      render={({ submitForm, isSubmitting, values }) => (
        <div>
          <h2 className="text-center bg-danger text-white py-2 subtitulo">
            Universidad Tecnológica Nacional
          </h2>
          <AlertDismissibleExample />

          <Form className="col-lg-4 offset-lg-4">
            <h2 className="text-center">Iniciar sesión</h2>
            <br />
            <Container style={{ paddingTop: "5px" }}>
              <Row>
                <Col xs="12">
                  <Field
                    type="email"
                    label="Email"
                    name="email"
                    id="email"
                    component={ReactstrapInput}
                  />
                </Col>
                <Col xs="12">
                  <Field
                    type="password"
                    label="Password"
                    name="password"
                    id="password"
                    component={ReactstrapInput}
                  />
                </Col>
                <Col xs="12">
                  <button type="submit" className="btn btn-dark">
                    Inicia sesión
                  </button>
                </Col>
              </Row>
            </Container>
          </Form>
          {localStorage.getItem("usuarioLogueado") ? <Redirect to="/" /> : null}
        </div>
      )}
    />
  );
}

export default Login;
