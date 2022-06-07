import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "../Header/Header.module.css";
import logo from "../../images/zeonLogo.svg";
import like from "../../images/likeLogo.svg";
import heartAlarm from "../../assets/heartAlarm.svg";
import cart from "../../images/cartLogo.svg";
import { favoriteContext } from "../../context/FavoriteContext";

const Header = () => {
  const { favoriteLength } = useContext(favoriteContext);
  return (
    <>
      <header className={classes.header}>
        <div className="wrapper">
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
                <a href="">+996565656565</a>
              </span>
            </div>
          </div>
          <div className={classes.header_center}>
            <div className={classes.header_center__left}>
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
              <input type="text" placeholder="Поиск" />
            </div>
            <div className={classes.header_center__right}>
              <div className={classes.header_center__right1}>
                {favoriteLength > 0 ? (
                  <img src={heartAlarm} alt="#" />
                ) : (
                  <img src={like} alt="#" />
                )}

                <Link to="/favourite">
                  <span>Избранное</span>
                </Link>
              </div>
              <div className={classes.line}></div>
              <div className={classes.header_center__right1}>
                <img src={cart} alt="" />
                <Link to="/cart">
                  <span>Корзина</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
