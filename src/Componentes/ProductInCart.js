import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsTrash } from "react-icons/bs";

function ProducInCart({ data, id }) {
  function handleItem() {
    if (sessionStorage.getItem(id)) {
      sessionStorage.removeItem(id);
      window.location.reload(false);
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <div className="perfil bg-secondary">
            <img
              src={data.imagen}
              alt="imagen del curso"
              className="imgPerfil"
            />
            <div className="datosPersona">
              <p>
                <span>Curso:</span> {data === null ? "" : data.curso}
              </p>
              <p>
                <span>Precio: $</span> {data === null ? "" : data.precio}
              </p>
              <button onClick={handleItem} className="btn-verPerfil">
                Eliminar <BsTrash />{" "}
              </button>{" "}
              {/* {console.log(data)} */}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProducInCart;
