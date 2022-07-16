import { Skeleton } from "@mui/material";
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/home/Home.container";
import NotFound from "./containers/notFound/NotFound.container";
import Root from "./containers/root/Root.container";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
