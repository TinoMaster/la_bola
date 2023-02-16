import React, { useEffect, useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";

const date = new Date();
const largeDate = `${date.getDate()}/${
  date.getMonth() + 1
}/${date.getFullYear()}`;

const defaultCollection = {
  numbers: {
    fijo: 0,
    corrido_1: 0,
    corrido_2: 0,
  },
  date: largeDate,
  schedule: "",
  lists: [],
};

export const NewProject = () => {
  const [collection, setCollection] = useState(defaultCollection);
  const [newProject, setNewProject] = useState(false);

  useEffect(() => {
    if (collection.lists.length === 0 && collection.schedule === "") {
      setNewProject(true);
    }
  }, []);

  const selectSchedule = (e) => {
    setCollection({ ...collection, schedule: e.target.name });
    setNewProject(false);
  };

  return (
    <div className="w-full h-full text-sm justify-around font-serif relative flex flex-wrap">
      {/* Modal New Project */}
      {newProject && (
        <div className="flex justify-center items-center w-full h-full absolute bg-black/10 z-20">
          <div className="flex flex-wrap py-5 bg-white shadow-md rounded-md">
            <h3 className="w-full text-center p-2 text-green-600">
              Nueva Coleccion
            </h3>
            <div className="w-full flex flex-wrap justify-center">
              <p className="w-full text-center p-2">Horario:</p>
              <label
                className="m-1 px-3 py-2 rounded-md shadow-md bg-black/20 hover:bg-green-600 transition-colors hover:cursor-pointer"
                htmlFor="tarde"
              >
                Tarde
              </label>
              <input
                onChange={selectSchedule}
                className="hidden"
                type="radio"
                name="tarde"
                id="tarde"
              />
              <label
                className="m-1 px-3 py-2 rounded-md shadow-md bg-black/20 hover:bg-green-600 transition-colors hover:cursor-pointer"
                htmlFor="noche"
              >
                Noche
              </label>
              <input
                onChange={selectSchedule}
                className="hidden"
                type="radio"
                name="noche"
                id="noche"
              />
            </div>
          </div>
        </div>
      )}
      {/* Seccion1 */}
      <div className="w-full lg:w-2/5 xl:w-1/5 relative">
        {/* Info Proyecto */}
        <div className="w-full flex justify-between bg-slate-800 p-2 rounded-md text-slate-200 shadow-md shadow-black/30">
          <h2>Nueva Coleccion</h2>
          <h2>{collection.date}</h2>
          <h2>{collection.schedule}</h2>
        </div>
        {/* Lista hechas */}
        <div className="p-2 my-2 relative">
          <Link
            to={"/newProject/newList"}
            className="flex absolute px-2 text-slate-100 rounded-md py-1 items-center shadow-md shadow-black/40 bg-green-500 top-0 right-2"
          >
            <AiOutlineFileAdd className="mr-1" />
            Nueva Lista
          </Link>
          {collection?.lists?.length === 0 ? (
            <p>No hay listas creadas</p>
          ) : (
            collection?.lists?.map((list) => {
              <div className="">
                <p className="">{list.name}</p>
              </div>;
            })
          )}
        </div>
      </div>
      {/* Seccion2 */}
      <div className="p-2 w-full lg:w-3/5 h-full bg-slate-50 shadow-inner shadow-black/20 rounded-md relative">
        <Outlet setCollection={setCollection} />
      </div>
    </div>
  );
};
