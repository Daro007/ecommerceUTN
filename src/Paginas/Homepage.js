import React from "react";
import Loading from "../Componentes/Loading";
import Productos from "../Componentes/Productos";
import firebase from "../Config/firebase";

class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      productos: [],
    };
  }

  async componentDidMount() {
    var this_class = this;
    return firebase.db
      .collection("/productos")
      .get()
      .then(function (querysnapshot) {
        console.log(querysnapshot.docs);
        this_class.setState({
          productos: querysnapshot.docs,
          loading: false,
        });
      });
  }

  render() {
    return (
      <div>
        <h2 className="text-center bg-danger text-white py-2 subtitulo">
          Nuestro catálogo de cursos
        </h2>
        {this.state.loading === true ? (
          <Loading
            style={
              this.state.loading === true
                ? { display: "block" }
                : { display: "none" }
            }
          ></Loading>
        ) : (
          <div>
            {this.state.productos.map((doc) => (
              <Productos key={doc.id} id={doc.id} datos={doc.data()} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Homepage;
