import React, { useEffect, useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
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
    <div className="w-full h-full relative font-serif">
      <div
        className="absolute p-3 shadow-md shadow-black/40 rounded-full bg-darkMode/90 bottom-2 right-2"
        onClick={() => {
          navigate("./newProject", { state: "/" });
        }}
      >
        <AiOutlineFileAdd className="text-slate-100" />
      </div>

      {/* Render de Documentos */}
      <div className="flex flex-wrap w-full bg-slate-100">
        <h3 className="w-full text-center p-2 text-darkMode">Colecciones:</h3>

        {documents?.map((el) => (
          <div
            key={el._id}
            className="flex justify-between w-full p-2 bg-black/5 m-1 rounded-md hover:bg-black/10 hover:cursor-pointer shadow-md"
          >
            <p className="">{el.date}</p>
            <p className="">{el.schedule}</p>
          </div>
        ))}
        {documents?.length === 0 && <p>No hay colecciones disponibles</p>}
      </div>
    </div>
  );
};
