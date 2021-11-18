import React,{useState} from "react";
import InscribirCurso from "./InscribirCurso";

const CursoEstudiante = ({ cursos = [] }) => {
  const [curso, setCurso] = useState({});
  return (
    <div>
      {cursos.map((item) => (
        <div
          className="p-1 text-white border-top border-start border-end border-bottom border-white"
          id="cursos"
        >
          <a href="#">
            <img
              src={item.ubicacion_img}
              alt=""
              width="200px"
              height="150px"
              className=" alin border-top border-start border-end border-bottom border-white"
            />
          </a>
          <div className=" card-body style">
            <h4 id="instructor-nombre" className="card-title">
              {item.instructor.nombre}
            </h4>
            <h4 id="instructor-apellido-paterno" className="card-title">
              {item.instructor.apellido_paterno}
            </h4>
            <h4 id="instructor-apellido-materno" className="card-title">
              {item.instructor.apellido_materno}
            </h4>
            <p id="nombre-del-curso" className="card-text">
              {item.nombre}
            </p>
            <p id="Descripcion" className="card-text">
              {item.descripcion}
            </p>
          </div>
          <div class="d-grid justify-content-md-end">
          <button 
          type="button" 
          onClick={() => setCurso(item)} 
          data-bs-toggle="modal"  
          data-bs-target="#staticBackdrop" 
          className="btnnn btn-outline-warning">
            Inscribirse
            </button><br/>
          </div>
        </div>
      ))}
         <InscribirCurso curso={curso}/>
    </div>
  );
};

export default CursoEstudiante;
