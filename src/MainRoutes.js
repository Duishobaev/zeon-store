import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Collections from "./components/Collections/Collections";
import Favourite from "./components/Favourite/Favourite";
import Home from "./components/Home/Home";
import News from "./components/News/News";
import Summer from "./components/Summer/Summer";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/news" element={<News />} />
      <Route path="collections/summer" element={<Summer />} />
      <Route path="/favourite" element={<Favourite />} />
    </Routes>
  );
};

export default MainRoutes;
