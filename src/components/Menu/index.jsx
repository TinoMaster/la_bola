import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="flex justify-between items-center font-serif w-full bg-slate-800 p-2 text-slate-200">
      {/* Nombre */}
      <h2 className="text-lg">LA BOLA</h2>
      {/* Links */}
      <div className="flex px-2">
        <Link
          to={"/"}
          className="flex bg-white/5 py-1 px-2 rounded-md shadow-md shadow-black/40 hover:bg-green-500 transition-colors"
        >
          {" "}
          <AiOutlineHome className="text-xl mr-1" /> Inicio
        </Link>
      </div>
    </div>
  );
};
