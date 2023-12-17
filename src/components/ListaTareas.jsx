import { useReducer } from "react";
import { useForm } from "../hooks/useForm";

import '../style/listaTareas.css'

const inicialState = [
  {
    id: new Date().getTime(),
    tarea: "Explicar Reducer",
    finalizada: false,
  },
];


const tareaReducer = (state = inicialState, action = {}) => {
  switch (action.type) {
    case "[TAREAS] Agregar Tarea":
      return [...state, action.payload];
    case "[TAREAS] Finalizar Tarea":
      return state.map((t) => {
        if (t.id === action.payload) {
          return {
            ...t,
            finalizada: !t.finalizada,
          };
        }
        return t;
      });
    case "[TAREAS] Eliminar Tarea":
      return state.filter((tarea)=>tarea.id !== action.payload)
      ;
    case "[TAREAS] Borrar Todo":
      
      return state = [];

    default:
      return state;
  }
};

export const ListaTareas = () => {
  const [tareasState, dispatch] = useReducer(tareaReducer, inicialState);

  const { tarea, formState, onInputChange } = useForm({ tarea: "" });

  const agregarTarea = (evento) => {
    evento.preventDefault();
    
    if (formState.tarea === "") return;

    const newTarea = {
      id: new Date().getTime(),
      tarea: formState.tarea,
      finalizada: false,
    };

    const accion = {
      type: "[TAREAS] Agregar Tarea",
      payload: newTarea,
    };
    dispatch(accion);
    formState.tarea = '';
  } 

  const finalizarTarea = ({ id }) => {
    const accion = {
      type: "[TAREAS] Finalizar Tarea",
      payload: id,
    };
    dispatch(accion);
  };

  const borrarTarea = ({id})=>{
    const accion ={
      type:"[TAREAS] Eliminar Tarea",
      payload: id
    }
    dispatch(accion)
  }

  const borrarTodo =()=>{
    const accion = {
      type: "[TAREAS] Borrar Todo",
      payload:''
    }
    dispatch(accion)
  }

  return (
    <>
      <form onSubmit={agregarTarea}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="tarea"
            placeholder="Ingresa tarea"
            value={tarea}
            onChange={onInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button type="button" className="btn btn-primary" onClick={borrarTodo} >
          Borrar todo
        </button>
      </form>
      <hr />
      <ul className="list-group">
        {tareasState.map((t) => {
          return (
            <li className="list-group-item" key={t.id}>
              {t.tarea}
              <div>
                <input
                  value={t.finalizada}
                  type="checkbox"
                  onChange={() => finalizarTarea(t)}
                />
              <button 
                className="btn btn-danger"
                onClick={()=>borrarTarea(t)}
                >Borrar</button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
