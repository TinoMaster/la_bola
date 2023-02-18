import React, { useRef, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

export const FijoYcorrido = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [line, setLine] = useState({});
  const [data, setData] = useState([]);

  const firstInputRef = useRef();
  const secondInputRef = useRef();
  const thirdInputRef = useRef();

  console.log(Date.now());

  const addLine = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setLine({ ...line, [name]: value, id: Date.now() });
  };

  const validateLine = (line) => {
    if (
      line?.number?.length > 0 &&
      line?.fijo?.length > 0 &&
      line?.corrido?.length > 0
    ) {
      return true;
    }
    return false;
  };

  const addData = (e, lineToAdd) => {
    e.preventDefault();
    const validate = validateLine(lineToAdd);
    if (validate) {
      setData([...data, lineToAdd]);
      setLine({});
      firstInputRef.current.value = "";
      secondInputRef.current.value = "";
      thirdInputRef.current.value = "";

      firstInputRef.current.focus();
    }
  };

  return (
    <div className="w-full lg:w-1/2 p-2 ">
      <h3
        onClick={() => setIsOpen((preState) => !preState)}
        className="flex items-center bg-violet-500 text-slate-200 p-1 rounded-sm hover:cursor-pointer"
      >
        {isOpen ? (
          <BsFillArrowDownCircleFill className="mr-1" />
        ) : (
          <IoMdAddCircle className="mr-1" />
        )}
        Fijos y corridos
      </h3>
      {/* Render */}
      <div className="w-full flex flex-col">
        {data?.map((line) => (
          <div key={line.id} className="flex">
            <p className="px-2 m-1 bg-green-400 rounded-md shadow-md">
              {line.number}
            </p>
            <p className="px-2 m-1 bg-lime-500 rounded-md shadow-md">
              {line.fijo}
            </p>
            <p className="px-2 m-1 bg-yellow-400 rounded-md shadow-md">
              {line.corrido}
            </p>
          </div>
        ))}
      </div>
      {/* Imputs */}
      <div className="w-full">
        <form className="flex justify-center w-full">
          <input
            onChange={addLine}
            className="border-2 w-1/5 mx-1 text-center focus:outline-none font-sans text-slate-600 font-semibold"
            type="number"
            name="number"
            id="number"
            ref={firstInputRef}
          />
          <input
            onChange={addLine}
            className="border-2 w-1/5 mx-1 text-center focus:outline-none font-sans text-slate-600 font-semibold"
            type="number"
            name="fijo"
            id="fijo"
            ref={secondInputRef}
          />
          <input
            onChange={addLine}
            className="border-2 w-1/5 mx-1 text-center focus:outline-none font-sans text-slate-600 font-semibold"
            type="number"
            name="corrido"
            id="corrido"
            ref={thirdInputRef}
          />
          <button
            onClick={(e) => {
              addData(e, line);
            }}
            className="px-2 ml-1 bg-green-400 rounded-md shadow-md hover:cursor-pointer hover:bg-green-500 text-slate-100"
          >
            start
          </button>
        </form>
      </div>
    </div>
  );
};
