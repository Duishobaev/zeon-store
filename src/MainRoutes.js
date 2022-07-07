import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Cart from "./components/Cart/Cart";
import Collections from "./components/Collections/Collections";
import Details from "./components/Details/Details";
import Favourite from "./components/Favourite/Favourite";
import Help from "./components/Help/Help";
import Home from "./components/Home/Home";
import News from "./components/News/News";
import Scroll from "./components/Scroll/Scroll";
import ScrollToTop from "./components/Scroll/Scroll";
import ResultPage from "./components/Search/ResultPage";
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
        <Route path="/help" element={<Help />} />
        <Route path="/result/:name" element={<ResultPage />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
