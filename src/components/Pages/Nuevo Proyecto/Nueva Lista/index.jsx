import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FijoYcorrido } from "./fijoYcorrido";
import { Parlets } from "./parlets";

const defaultList = {
  name: "",
  single: [],
  parlet: [],
};

export const NewList = ({ setCollection, setIsOpenNewList }) => {
  const [list, setList] = useState(defaultList);
  const [newList, setNewList] = useState(true);
  const [errorName, setErrorName] = useState("");

  const handlerStartList = () => {
    if (list.name === "") {
      setErrorName("El campo nombre esta vacio");
    } else {
      setNewList(false);
    }
  };

  const handlerName = (e) => {
    setErrorName("");
    setList({ ...list, name: e.target.value });
  };

  return (
    <div className="">
      {newList ? (
        <div className="flex justify-center items-center w-full h-full absolute bg-black/10 z-20">
          {/* Cuadro */}
          <div className="flex flex-wrap justify-center py-5 bg-white shadow-md rounded-md relative">
            {/* Error */}
            {errorName !== "" && (
              <p className="absolute -top-8 bg-red-400 p-2 rounded-md text-slate-200">
                {errorName}
              </p>
            )}
            <h3 className="w-full text-center text-yellow-500">Nueva Lista</h3>
            <div className="w-full flex flex-wrap justify-center">
              <p className="w-full text-center py-2">Nombre:</p>
              <input
                onChange={handlerName}
                type="text"
                className="shadow-inner shadow-black/40 p-1 rounded-md focus:outline-none"
              />
              <div className="flex justify-center w-full">
                <button
                  onClick={handlerStartList}
                  className="mx-1 my-2 rounded-md p-2 bg-black/10 shadow-md hover:cursor-pointer hover:bg-green-500 transition-colors"
                >
                  Aceptar
                </button>
                <Link
                  to={"/newProject"}
                  className="mx-1 my-2 rounded-md p-2 bg-black/10 shadow-md hover:cursor-pointer hover:bg-red-500 transition-colors"
                >
                  Cancelar
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap">
          <div className="flex justify-between items-center w-full bg-slate-800 rounded-md text-slate-200">
            <h2 className="text-center py-2 px-5 mt-1 ">{`Lista: ${list.name}`}</h2>
            <div className="mr-2">
              <button className="mx-2 p-1 bg-white/10 rounded-md shadow-md shadow-black/40 hover:cursor-pointer hover:bg-green-500">
                Guardar
              </button>
              <Link
                to={"/newProject"}
                className="mx-2 p-1 bg-white/10 rounded-md shadow-md shadow-black/40 hover:cursor-pointer hover:bg-red-500"
              >
                Cancelar
              </Link>
            </div>
          </div>
          {/* Datos de la lista */}
          <div className="flex flex-wrap w-full">
            {/* Parte de fijos y corridos */}
            <FijoYcorrido />
            {/* Parte de parlets */}
            <Parlets />
          </div>
        </div>
      )}
    </div>
  );
};
