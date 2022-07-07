import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "../Header/LeftNav.module.css";
import like from "../../images/likeLogo.svg";
import heartAlarm from "../../assets/heartAlarm.svg";
import cart from "../../images/cartLogo.svg";
import fullCart from "../../images/fullCartLogo.svg";
import { favoriteContext } from "../../context/FavoriteContext";
import { cartContext } from "../../context/CartContext";
import styled from "styled-components";
import teleg from "../../images/burgTeleg.svg";
import whats from "../../images/burgWhats.svg";
import phone from "../../images/burgPhone.svg";

const Div = styled.div`
  transform: ${({ open }) =>
    open ? "translateX(-15px)" : "translateX(-150%)"};
  transition: transform 0.3s ease-in-out;
`;

const LeftNav = ({ open }) => {
  const { favoriteLength } = useContext(favoriteContext);
  const { cartLen } = useContext(cartContext);
  return (
    <Div open={open} className={classes.burgWindow}>
      <div className={classes.burgMenu}>
        <div className={classes.burgMenu_title}>Меню</div>
      </div>
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
      <div className={classes.header_center__right}>
        <div className={classes.burgMenu_fav}>
          {favoriteLength > 0 ? (
            <img src={heartAlarm} alt="#" />
          ) : (
            <img src={like} alt="#" />
          )}

          <Link to="/favourite">
            <span>Избранное</span>
          </Link>
        </div>
        <div className={classes.burgMenu_cart}>
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

      <div className={classes.burgFont}>Свяжитесь с нами:</div>
      <div
        className={classes.burgFont}
        style={{ display: "flex", marginTop: 7 }}
      >
        <p style={{ color: "#979797", marginRight: 6 }}>Тел:</p>+996 000 000 000
      </div>
      <div>
        <a href="https://telegram.com">
          <img className={classes.burgImg} src={teleg} alt="" />
        </a>
        <a href="https://whatsapp.com">
          <img className={classes.burgImg} src={whats} alt="" />
        </a>
        <a href="tel:+99656565656">
          <img className={classes.burgImg} src={phone} alt="" />
        </a>
      </div>
    </Div>
  );
};

export default LeftNav;
