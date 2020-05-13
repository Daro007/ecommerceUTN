import React, { useEffect, useState } from "react";
import ProducInCart from "../Componentes/ProductInCart";
import Alert from "react-bootstrap/Alert";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Cart() {
  const productos = Object.entries(sessionStorage);
  //   console.log(productos);

  const [payment, setPayment] = useState(0);

  useEffect(() => {
    function suma() {
      let total = 0;
      const valores = Object.values(sessionStorage);
      let mapeado = valores.map((val) => JSON.parse(val));
      for (let i = 0; i < mapeado.length; i++) {
        let precio = parseInt(mapeado[i].precio);
        if (precio) {
          total += precio;
        }
        setPayment(total);
        localStorage.setItem("total", total);
        // console.log(total);
      }
    }
    suma();
  });

  return (
    <div>
      <h2 className="text-center bg-danger text-white py-2 subtitulo">
        ¿ Qué estás esperando ?
      </h2>
      <Alert
        variant="dark"
        className={
          sessionStorage.length > 0 ? "alertCarrito off" : "alertCarrito on"
        }
      >
        <Alert.Heading>
          El carrito está vacío <FiShoppingCart />{" "}
        </Alert.Heading>
        <p>Aún no has añadido ningún curso al carrito.</p>
      </Alert>
      {productos.map((p) => (
        <ProducInCart key={p[0]} id={p[0]} data={JSON.parse(p[1])} />
      ))}
      <div
        className={
          sessionStorage.length > 0 ? "totalPayment on" : "totalPayment off"
        }
      >
        <Alert variant="secondary">
          <Alert.Heading>Total: $ {payment}</Alert.Heading>
        </Alert>
        <Button variant="dark">
          <Link className="linkUsuario" to={`/PaymentForm`}>
            Comprar
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Cart;
