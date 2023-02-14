import React from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className="w-full h-full relative ">
      <h2>Inicio</h2>
      <Link
        to={"/newProject"}
        className="absolute p-3 shadow-md shadow-black/40 rounded-full bg-darkMode/90 bottom-2 right-2"
      >
        <AiOutlineFileAdd className="text-slate-100" />
      </Link>
    </div>
  );
};
