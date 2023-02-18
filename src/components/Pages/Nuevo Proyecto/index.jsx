import React, { useEffect, useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";

const date = new Date();
const largeDate = `${date.getDate()}/${
  date.getMonth() + 1
}/${date.getFullYear()}`;

const defaultCollection = {
  numbers: {
    centena: 0,
    corrido_1: 0,
    corrido_2: 0,
  },
  date: largeDate,
  schedule: "",
  lists: [],
};

const defaultBeginProject = {
  schedule: "",
  numbers: {},
};

export const NewProject = () => {
  const [collection, setCollection] = useState(defaultCollection);
  const [newProject, setNewProject] = useState(false);

  const [beginProject, setBeginProject] = useState(defaultBeginProject);
  const [errorBeginProject, setErrorBeginProject] = useState({});

  useEffect(() => {
    if (
      collection.lists.length === 0 &&
      collection.lists.length === 0 &&
      collection.schedule === ""
    ) {
      setNewProject(true);
    }
  }, []);

  const selectSchedule = (e) => {
    setBeginProject({ ...beginProject, schedule: e.target.id });
  };

  const selectNumbersCollection = (e) => {
    const { name, value } = e.target;
    setBeginProject({
      ...beginProject,
      numbers: { ...beginProject.numbers, [name]: value },
    });
  };

  const validateBeginProject = () => {
    setErrorBeginProject({});
    if (beginProject.schedule === "") {
      setErrorBeginProject({ error: true, message: "Eliga el horario" });
      return false;
    } else if (
      !beginProject.numbers?.centena ||
      beginProject.numbers?.centena.length !== 3
    ) {
      setErrorBeginProject({
        error: true,
        message: "Revise el campo centena, recuerda que son 3 numeros",
      });
      return false;
    } else if (beginProject.numbers?.corrido_1.length !== 2) {
      setErrorBeginProject({
        error: true,
        message: "Revise el campo 1 Corrido, recuerda que son 2 numeros",
      });
      return false;
    } else if (beginProject.numbers?.corrido_2.length !== 2) {
      setErrorBeginProject({
        error: true,
        message: "Revise el campo 2 Corrido, recuerda que son 2 numeros",
      });
      return false;
    }
    return true;
  };

  const onReadyBeginProject = () => {
    const validation = validateBeginProject();
    if (validation) {
      setCollection({
        ...collection,
        schedule: beginProject.schedule,
        numbers: beginProject.numbers,
      });
      setBeginProject(defaultBeginProject);
      setNewProject(false);
    }
  };

  return (
    <div className="w-full h-full text-sm justify-around font-serif relative flex flex-wrap">
      {/* Modal New Project */}
      {newProject && (
        <div className="flex justify-center items-center w-full h-full absolute bg-black/10 z-20">
          <div className="flex flex-wrap py-5 bg-white shadow-md rounded-md relative">
            {/* Error */}
            {errorBeginProject?.error && (
              <p className="absolute w-full text-center -top-5 bg-red-300 rounded-md py-1 text-slate-100">
                {errorBeginProject.message}
              </p>
            )}
            <h3 className="w-full text-center p-2 text-green-600">
              Nueva Coleccion
            </h3>
            <div className="w-full flex flex-wrap justify-center">
              <p className="w-full text-center p-2">Horario:</p>
              <input
                onChange={selectSchedule}
                className="inputChecked"
                type="radio"
                name="schedule"
                id="tarde"
              />
              <label
                className="m-1 px-3 py-2 rounded-md shadow-md bg-black/20 hover:bg-green-600 transition-colors hover:cursor-pointer"
                htmlFor="tarde"
              >
                Tarde
              </label>
              <input
                onChange={selectSchedule}
                className="inputChecked"
                type="radio"
                name="schedule"
                id="noche"
              />
              <label
                className="m-1 px-3 py-2 rounded-md shadow-md bg-black/20 hover:bg-green-600 transition-colors hover:cursor-pointer"
                htmlFor="noche"
              >
                Noche
              </label>

              <p className="w-full text-center py-2">Numeros:</p>
              <div className="w-[150px] flex items-center flex-wrap">
                <p className="w-1/2">Centena:</p>
                <input
                  name="centena"
                  onChange={selectNumbersCollection}
                  className="w-1/2 my-1 shadow-inner shadow-black/40 rounded-md p-1 focus:outline-none"
                  type="number"
                />
                <p className="w-1/2">1 Corrido:</p>
                <input
                  name="corrido_1"
                  onChange={selectNumbersCollection}
                  className="w-1/2 my-1 shadow-inner shadow-black/40 rounded-md p-1 focus:outline-none"
                  type="number"
                />
                <p className="w-1/2">2 Corrido:</p>
                <input
                  name="corrido_2"
                  onChange={selectNumbersCollection}
                  className="w-1/2 my-1 shadow-inner shadow-black/40 rounded-md p-1 focus:outline-none"
                  type="number"
                />
                <button
                  onClick={() => onReadyBeginProject()}
                  className="w-full bg-green-500/40 hover:bg-green-500/70 transition-colors py-2 mt-2 rounded-md shadow-md "
                >
                  Listo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Seccion1 */}
      <div className="w-full lg:w-2/5 xl:w-1/5 relative">
        {/* Info Proyecto */}
        <div className="w-full flex justify-between bg-slate-800 p-2 rounded-md text-slate-200 shadow-md shadow-black/30">
          <div className="flex">
            <p className="mr-1 bg-white/20 text-green-400 px-1 rounded-md shadow-md shadow-black/40">
              {collection.numbers.centena}
            </p>
            <p className="mr-1 bg-white/20 text-yellow-400 px-1 rounded-md shadow-md shadow-black/40">
              {collection.numbers.corrido_1}
            </p>
            <p className="mr-1 bg-white/20 text-yellow-400 px-1 rounded-md shadow-md shadow-black/40">
              {collection.numbers.corrido_2}
            </p>
          </div>
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
