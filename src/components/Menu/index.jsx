import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="flex justify-between items-center w-full bg-emerald-700 p-2 text-slate-200 shadow-lg">
      {/* Nombre */}
      <h2 className="">LA BOLA</h2>
      {/* Links */}
      <div className="flex px-2 ">
        <Link
          to={"/"}
          className="flex bg-white/5 py-1 px-2 rounded-md shadow-lg shadow-black/20 hover:bg-green-500 transition-colors"
        >
          {" "}
          <AiOutlineHome className="text-lg mr-1" /> Inicio
        </Link>
      </div>
    </div>
  );
};
