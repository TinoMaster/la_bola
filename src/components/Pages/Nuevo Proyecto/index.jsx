import React from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";

export const NewProject = () => {
  return (
    <div className="w-full h-full text-sm justify-around font-serif relative flex flex-wrap">
      {/* Seccion1 */}
      <div className="w-full lg:w-2/5 xl:w-1/5">
        <Link
          to={"/newProject/newList"}
          className="absolute p-3 shadow-md shadow-black/40 rounded-full bg-green-500 bottom-2 right-2"
        >
          <AiOutlineFileAdd className="text-slate-100" />
        </Link>
        {/* Info Proyecto */}
        <div className="w-full flex justify-between bg-slate-800 p-2 rounded-md text-slate-200 shadow-md shadow-black/30">
          <h2>Nueva Coleccion</h2>
          <h2>27/8/2023</h2>
          <h2>Tarde</h2>
        </div>
        {/* Lista hechas */}
        <div className="p-2">
          <p>No hay listas creadas</p>
        </div>
      </div>
      {/* Seccion2 */}
      <div className="p-2 w-full lg:w-3/5 h-full bg-slate-50 shadow-inner shadow-black/20 rounded-md">
        {/* Crear lista lista */}
        <Outlet />
      </div>
    </div>
  );
};
