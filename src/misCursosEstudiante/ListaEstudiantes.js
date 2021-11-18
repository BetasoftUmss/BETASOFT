import React, { useEffect, useState } from "react";
import "./Vista.css";
import axios from "axios";
import MisVideo from "./MisVideo";
<<<<<<< HEAD



const baseUrl = "https://betaweb-back.herokuapp.com/api/inscritos/";

function ListaEstudiante()  {
  
   const [cursos, setCursos] = useState([]);
   const [curso, setCurso] = useState({});
  let inscritos=[];
  
  


  
  ///////////////////////////////////
  useEffect(() => {
    if(cursos.length=== 0){
    axios
      .get("https://betaweb-back.herokuapp.com/api/inscritos")
      .then((response) => {
        inscritos=response.data;
        setCursos(inscritos.map((element)=>{
         if( element.estudiante?.id_estudiante === parseInt( getCookies("id_estudiante")))
            {
              return element.curso;
            }
         
        } ))
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }, []);

 
 
=======

const baseUrl = "https://betaweb-back.herokuapp.com/api/inscritos/";

function ListaEstudiante() {
  const [cursos, setCursos] = useState([]);
  const [curso, setCurso] = useState({});
  let inscritos = [];

  ///////////////////////////////////
  useEffect(() => {
    if (cursos.length === 0) {
      axios
        .get("https://betaweb-back.herokuapp.com/api/inscritos")
        .then((response) => {
          inscritos = response.data;
          setCursos(
            inscritos.map((element) => {
              if (
                element.estudiante?.id_estudiante ===
                parseInt(getCookies("id_estudiante"))
              ) {
                return element.curso;
              }
            })
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
>>>>>>> 0d1b9bb1d5f4570851956652781e6ac324d633df

  const getCookies = (cname) => {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };
  return (
    <>
      <div className="list-group">
        <div className="col-md-6 col align-self-center">
          <div className="container">
            <h3 className="text-white">Mis cursos</h3>
            <table className="table text-white">
              <thead>
                <tr>
                  <th scope="col" className="text-white">
                    Nombres
                  </th>
                </tr>
              </thead>
              <tbody>
                {cursos.map((element) => {
<<<<<<< HEAD
                    return ( element &&
=======
                  return (
                    element && (
>>>>>>> 0d1b9bb1d5f4570851956652781e6ac324d633df
                      <tr>
                        <td className="text-white ">{element.nombre}</td>
                        <td className="text-white ocultar">
                          {element.descripcion}
                        </td>
                        <td className="text-white ocultar">
                          {element.ubicacion_img}
                        </td>
                        <td className="text-white ocultar">
                          {element.ubicacion_vid}
                        </td>
                        <td>
<<<<<<< HEAD
                        <button
                        type="button" 
                       onClick={()=> setCurso(element)}
                        className="btn btn-danger" 
                        data-bs-toggle="modal"
                        data-bs-target="#videoModal"
                          >
                          <i className="bi bi-play-btn-fill"></i>
                      
                          </button>
                        </td>
                       
                  </tr>
                    
                    );
                   
                  })}
              </tbody>
            </table>
            <MisVideo curso= {curso}/>
=======
                          <button
                            type="button"
                            onClick={() => setCurso(element)}
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#videoModal"
                          >
                            <i className="bi bi-play-btn-fill"></i>
                          </button>
                        </td>
                      </tr>
                    )
                  );
                })}
              </tbody>
            </table>
            <MisVideo curso={curso} />
>>>>>>> 0d1b9bb1d5f4570851956652781e6ac324d633df
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaEstudiante;
