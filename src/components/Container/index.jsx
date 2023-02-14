import React from "react";
import { Route, Routes } from "react-router-dom";
import { Inicio } from "../Pages/Inicio";
import { NewProject } from "../Pages/Nuevo Proyecto";
import { NewList } from "../Pages/Nuevo Proyecto/Nueva Lista";

export const Container = () => {
  return (
    <div className="w-full h-screen flex p-2 overflow-hidden">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/newProject" element={<NewProject />}>
          <Route path="newList" element={<NewList />} />
        </Route>
      </Routes>
    </div>
  );
};
