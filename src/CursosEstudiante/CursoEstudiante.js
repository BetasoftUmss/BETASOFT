<<<<<<< HEAD
import React,{useState} from "react";
import InscribirCurso from "./InscribirCurso";
=======
import React, { useState } from "react";
import InscribirCurso from "./InscribirCurso";
import MisVideo from "../misCursosEstudiante/MisVideo";
import "./InscribirCurso.css";
>>>>>>> 0d1b9bb1d5f4570851956652781e6ac324d633df

const CursoEstudiante = ({ cursos = [] }) => {
  const [curso, setCurso] = useState({});
  return (
    <div>
      {cursos.map((item) => (
        <div
          className="p-1 text-white border-top border-start border-end border-bottom border-white"
          id="cursos"
        >
          <a
            type="button"
            onClick={() => setCurso(item)}
            className="vistaprevia"
            data-bs-toggle="modal"
            data-bs-target="#videoModal"
          >
            <img
              src={item.ubicacion_img}
              alt=""
              width="200px"
              height="150px"
              className=" alin border-top border-start border-end border-bottom border-white"
            />
          </a>
          <div className=" card-body style m-0 ">
            <h4 id="instructor-nombre" className="card-title">
              {item.instructor.nombre}
            </h4>
            <h4 id="instructor-apellido-paterno" className="card-title">
              {item.instructor.apellido_paterno}
            </h4>
            <h4 id="instructor-apellido-materno" className="card-title">
              {item.instructor.apellido_materno}
            </h4>
            <a
              type="button"
              onClick={() => setCurso(item)}
              className="vistaprevia"
              data-bs-toggle="modal"
              data-bs-target="#videoModal"
              id="nombre-curso"
            >
              {" "}
              <p id="nombre-del-curso" className="card-text">
                {item.nombre}
              </p>
            </a>
            <p id="Descripcion" className="card-text">
              {item.descripcion}
            </p>
          </div>
<<<<<<< HEAD
          <div class="d-grid justify-content-md-end">
=======
<<<<<<< HEAD
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
>>>>>>> develop
          <button 
          type="button" 
          onClick={() => setCurso(item)} 
          data-bs-toggle="modal"  
          data-bs-target="#staticBackdrop" 
          className="btnnn btn-outline-warning">
            Inscribirse
<<<<<<< HEAD
            </button><br/>
=======
=======

          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button
              type="button"
              onClick={() => setCurso(item)}
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              className="  btn btn-outline-success boton-inscribirse  "
            >
              Inscribirse
>>>>>>> 0d1b9bb1d5f4570851956652781e6ac324d633df
            </button>
>>>>>>> develop
          </div>
        </div>
      ))}
<<<<<<< HEAD
         <InscribirCurso curso={curso}/>
=======
      <InscribirCurso curso={curso} />
      <MisVideo curso={curso} />
>>>>>>> 0d1b9bb1d5f4570851956652781e6ac324d633df
    </div>
  );
};

export default CursoEstudiante;
