import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logoLupa from "../imagenes/logoLupa.png";

class NavegacionCursos extends Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-light" id="navInicioCursos">
        <a
          id="tituloPagina"
          class="navbar-brand"
          href="javascript:history.back()"
          border-width="medium"
        >
          BETAWEB
          <img
            src="https://previews.123rf.com/images/mochipet/mochipet1707/mochipet170700056/82167896-ilustraci%C3%B3n-vectorial-bombilla-con-haces-de-luz-en-estilo-pop-art-dibujos-animados-con-contorno-aisl.jpg"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
          />
        </a>
        <div class="mr-right">
          <div class="p-2 bd-highlight ">
            <Link to="/" id="Boton_atrasCursos" className="btn " type="button">
              Inicio
            </Link>

            <Link
              to="/cursos"
              id="boton_buscarCursos"
              className="btn "
              type="button"
            >
              Cursos
            </Link>

            <Link
              to="/inicio"
              id="boton_loginCursos"
              className="btn "
              type="button"
            >
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavegacionCursos;
