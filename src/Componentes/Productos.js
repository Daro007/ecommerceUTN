import React from "react";
import { FaSearchPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Productos({ datos, id }) {
  return (
    <Container>
      <Row>
        <Col>
          <div className="perfil bg-secondary">
            <img
              src={datos.imagen}
              alt="imagen del curso"
              className="imgPerfil"
            />
            <div className="datosPersona">
              <p>
                <span>Curso:</span> {datos === null ? "" : datos.curso}
              </p>
              <p>
                <span>Precio: $</span> {datos === null ? "" : datos.precio}
              </p>

              <button className="btn-verPerfil">
                <Link className="linkUsuario" to={`/productos/${id}`}>
                  Ver Detalle <FaSearchPlus />
                </Link>
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Productos;
