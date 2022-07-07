import React, { useContext } from "react";
import classes from "./Cart.module.css";
import close from "../../images/close.svg";
import { useEffect } from "react";
import { cartContext } from "../../context/CartContext";

const CartIn = ({ item }) => {
  const { cart, getCart, deleteProdInCart, increase, decrease } =
    useContext(cartContext);

  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      <div
        key={item.item.id + item.item.color}
        style={{
          display: "flex",
          marginBottom: 8,
          backgroundColor: "#fff",
        }}
      >
        <div className={classes.cartTitle}>
          <img className={classes.cartImg} src={item.item.image} alt="" />
        </div>
        <div>
          <div className={classes.title}>
            <p>{item.item.descr}</p>
            <img
              style={{
                width: 14,
                height: 14,
                marginTop: 17,
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => deleteProdInCart(item.item.id, item.item.color)}
              src={close}
              alt=""
            />
          </div>
          <div style={{ display: "flex" }}>
            <p className={classes.size} style={{ marginRight: 4 }}>
              Размер:
            </p>
            <p className={classes.size}>{item.item.size}</p>
          </div>
          <div style={{ display: "flex" }}>
            <p className={classes.color}>Цвет:</p>
            <div
              className={classes.colorBan}
              style={{ backgroundColor: `${item.item.color}` }}
            ></div>
          </div>
          <div style={{ display: "flex" }}>
            <p className={classes.price}>{item.item.price}</p>
            <p className={classes.discount}>1755 r</p>
          </div>
          <div style={{ display: "flex" }}>
            <button
              onClick={() => decrease(item.item)}
              className={classes.cartBtn}
            >
              -
            </button>
            <div className={classes.quantity}>{item.item.count}</div>
            <button
              onClick={() => increase(item.item)}
              className={classes.cartBtn}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartIn;
