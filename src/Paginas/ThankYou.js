import React, { Fragment } from "react";
import Alert from "react-bootstrap/Alert";

function ThankYou() {
  return (
    <Fragment>
      <h2 className="text-center bg-danger text-white py-2 subtitulo">
        ¡ Gracias por confiar en nosotros !
      </h2>
      <Alert className="alertCarrito" variant="success">
        <Alert.Heading>Tu pago se ha realizado con éxito</Alert.Heading>
        <p>
          Te hemos enviado un e-mail con los detalles de acceso a tus cursos.
        </p>
      </Alert>
    </Fragment>
  );
}

export default ThankYou;
