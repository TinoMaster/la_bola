import React, { useEffect, useState } from "react";
import { RiAddCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { httpHelper } from "../../../helpers/httpHelper";
import apiConfig from "../../../config/api_config.json";
import { useDispatch, useSelector } from "react-redux";
import { setAllDocuments } from "../../../actions";

export const Inicio = () => {
  const documents = useSelector((state) => state.documents);
  const dispatch = useDispatch();

  const [error, setError] = useState({});
  useEffect(() => {
    httpHelper()
      .get(`${apiConfig.api.url}/api/documents`)
      .then((res) => {
        if (res?.error) {
          setError(res);
        } else if (res.success) {
          setError({});
          dispatch(setAllDocuments(res.data));
        }
      });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="w-full h-full relative">
      {/* Ultimos movimientos */}
      <div className="flex flex-col p-2">
        <h3 className="text-xl py-3">Movimientos recientes</h3>
        <div className="w-full h-[220px] bg-black/10 rounded-lg shadow-md"></div>
      </div>
      {/* Agregar app */}
      <div className="flex flex-col p-2">
        <h3 className="p-2 w-full">Lista de Aplicaciones</h3>
        {/* Caja de aplicaciones */}
        <div className="w-full h-[180px]">
          {/* Caja add aplicacion */}
          <div
            className="flex flex-col justify-center items-center w-[140px] h-full p-2 bg-black/10 shadow-md rounded-md  bottom-2 right-2"
            onClick={() => {
              navigate("./newProject", { state: "/" });
            }}
          >
            <RiAddCircleFill className="text-3xl text-slate-700" /> <p className="text-sm">Añadir Aplicacion</p>
          </div>
        </div>
      </div>
    </div>
  );
};
