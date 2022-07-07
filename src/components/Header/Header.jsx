import React from "react";
import classes from "../Header/Header.module.css";
import HeaderTop from "./HeaderTop";
import HeaderCenter from "./HeaderCenter";
import Burger from "./Burger";
import logo from "../../images/zeonLogo.svg";
import searchLogo from "../../images/searchIcon.svg";
import SearchBar from "../Search/SearchBar";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <div className="wrapper">
          <HeaderTop />
          <HeaderCenter />
        </div>
      </header>
      <div className="wrapper">
        <nav>
          <Burger />
          <div className={classes.burgZeonLogo}>
            <img className={classes.burgZeonLogo} src={logo} alt="" />
          </div>
          <div className={classes.burgZeonSearch}>
            <img className={classes.burgZeonSearch} src={searchLogo} alt="" />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
