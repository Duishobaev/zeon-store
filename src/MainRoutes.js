import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Cart from "./components/Cart/Cart";
import Collections from "./components/Collections/Collections";
import Details from "./components/Details/Details";
import Favourite from "./components/Favourite/Favourite";
import Home from "./components/Home/Home";
import News from "./components/News/News";
import Scroll from "./components/Scroll/Scroll";
import ScrollToTop from "./components/Scroll/Scroll";
import Summer from "./components/Summer/Summer";

const MainRoutes = () => {
  return (
    <>
      <Scroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/news" element={<News />} />
        <Route path="collections/summer" element={<Summer />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/:collection/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
