import React from "react";
import { Link } from "react-router-dom";
import classes from "../Header/Header.module.css";

const HeaderTop = () => {
  return (
    <>
      <div className={classes.header_top}>
        <div>
          <ul className={classes.nav_left}>
            <Link to="/about">
              <li>О нас</li>
            </Link>
            <Link to="/collections">
              <li>Коллекции</li>
            </Link>
            <Link to="/news">
              <li>Новости</li>
            </Link>
          </ul>
        </div>
        <div className={classes.nav_right}>
          <span>
            Тел:
            <a href="tel:+99656565656" className={classes.headPhone}>
              +996565656565
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
