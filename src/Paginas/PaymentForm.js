import React, { useState, Fragment } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";

const PaymentForm = () => {
  const [state, setState] = useState({
    number: "",
    name: "Su nombre",
    cvc: "",
    expiry: "",
    focus: "",
  });

  const handleFocus = (e) => {
    setState({
      ...state,
      focus: e.target.name,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const [validated, setValidated] = useState(false);
  const [payment, setPayment] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      event.preventDefault();
      event.stopPropagation();
      sessionStorage.clear();
      localStorage.removeItem("total");
      setPayment(true);
    } else if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Fragment>
      <h2 className="text-center bg-danger text-white py-2 subtitulo">
        ¿ Qué estás esperando ?
      </h2>
      <Card className="paymentCard">
        <Card.Body className="card">
          <Cards
            cvc={state.cvc}
            expiry={state.expiry}
            focused={state.focus}
            name={state.name}
            number={state.number}
          />
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label> Número de la tarjeta</Form.Label>
              <Form.Control
                type="number"
                className="form-control"
                name="number"
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 16);
                }}
                placeholder="Número de tarjeta"
                onChange={handleChange}
                onFocus={handleFocus}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <input
                type="text"
                className="form-control"
                name="name"
                maxLength="30"
                placeholder="Nombre"
                onChange={handleChange}
                onFocus={handleFocus}
                required
              />
              <Form.Control.Feedback type="invalid">
                Escriba su nombre como figura en su tarjeta.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Vencimiento</Form.Label>
                <Form.Control
                  type="number"
                  className="form-control"
                  name="expiry"
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 4);
                  }}
                  placeholder="Expiración"
                  onChange={handleChange}
                  onFocus={handleFocus}
                  required
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>CVC</Form.Label>
                <Form.Control
                  type="number"
                  className="form-control"
                  name="cvc"
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 4);
                  }}
                  placeholder="CVC"
                  onChange={handleChange}
                  onFocus={handleFocus}
                  required
                />
              </Form.Group>
            </Form.Row>
            <Button type="submit" className="btn btn-dark btn-block btn-lg">
              Pagar $ {localStorage.getItem("total")}
            </Button>
          </Form>
        </Card.Body>
      </Card>
      {payment ? <Redirect to="/ThankYou" /> : null}
    </Fragment>
  );
};

export default PaymentForm;
