import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "../Header/Header.module.css";
import logo from "../../images/zeonLogo.svg";
import like from "../../images/likeLogo.svg";
import heartAlarm from "../../assets/heartAlarm.svg";
import cart from "../../images/cartLogo.svg";
import fullCart from "../../images/fullCartLogo.svg";
import { favoriteContext } from "../../context/FavoriteContext";
import { cartContext } from "../../context/CartContext";
import SearchBar from "../Search/SearchBar";

const HeaderCenter = () => {
  const { favoriteLength } = useContext(favoriteContext);
  const { cartLen } = useContext(cartContext);
  return (
    <>
      <div className={classes.header_center}>
        <div className={classes.header_center__left}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <SearchBar className={classes.inp} placeholder="поиск" />
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
            {cartLen > 0 ? (
              <img src={fullCart} alt="#" />
            ) : (
              <img src={cart} alt="#" />
            )}
            <Link to="/cart">
              <span>Корзина</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderCenter;
