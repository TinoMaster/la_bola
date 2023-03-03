import React from "react";

import { HashRouter } from "react-router-dom";
import { Container } from "./components/Container";
import { Menu } from "./components/Menu";

function App() {
  return (
    <div className="flex flex-col w-screen h-screen font-roboto">
      <HashRouter>
        <Menu />
        <Container />
      </HashRouter>
    </div>
  );
}

export default App;
