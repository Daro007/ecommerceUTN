import React, { useState, useEffect, Fragment } from "react";
import { FaCartPlus } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Loading from "../Componentes/Loading";
import firebase from "../Config/firebase";
import Image from "react-bootstrap/Image";

function DetalleProducto() {
  const [cart, setCart] = useState(false);
  const [producto, setProductos] = useState("");

  const { id } = useParams();
  // console.log(idu);

  useEffect(() => {
    async function fetchData() {
      return firebase.db
        .doc("productos/" + id)
        .get()
        .then((doc) => {
          setProductos(doc.data());
          // console.log(doc.data());
        });
    }
    fetchData();
  }, [id]);

  useEffect(() => {
    function mostrar() {
      if (sessionStorage.getItem(id) === null) {
        setCart(false);
      } else if (sessionStorage.getItem(id)) {
        setCart(true);
      }
    }
    mostrar();
  }, [id]);

  function handleCart() {
    if (sessionStorage.getItem(id) === null) {
      const detallesDelProducto = {
        curso: producto.curso,
        precio: producto.precio,
        imagen: producto.imagen,
      };
      const productoSerializado = JSON.stringify(detallesDelProducto);
      sessionStorage.setItem(id, productoSerializado);

      setCart(true);
    } else if (sessionStorage.getItem(id)) {
      sessionStorage.removeItem(id);
      setCart(false);
    }
  }

  return (
    <Fragment>
      <h2 className="text-center bg-danger text-white py-2 subtitulo">
        ¿ Qué estás esperando ?
      </h2>
      <div className="miPerfil">
        <Image
          className="fotoUsuario"
          src={producto.imagen}
          rounded
          alt="foto del curso"
        />
        <div className="dataMiPerfil">
          <div className="contenedor-flex">
            <div className="parrafo">
              <span>Curso:</span>{" "}
              {producto === "" ? <Loading /> : producto.curso}
            </div>

            <div className="parrafo">
              <span>Precio: $</span>{" "}
              {producto === "" ? <Loading /> : producto.precio}
            </div>
          </div>
          <div className="parrafo">
            <span>Descripción:</span>{" "}
            {producto === "" ? <Loading /> : producto.descripcion}
          </div>
          <div className="parrafo">
            <span>SKU:</span> {producto === "" ? <Loading /> : id}
          </div>
          <div className={cart === false ? "noAniadido" : "aniadido"}>
            <span>
              Curso añadido al carrito <FaShoppingCart />
            </span>
          </div>
          <br />

          <button className="btn-agregar" onClick={handleCart}>
            <FaCartPlus
              display={cart === false ? "inline-block" : "none"}
            ></FaCartPlus>{" "}
            {cart === false ? "Agregar" : "Eliminar"}
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default DetalleProducto;
