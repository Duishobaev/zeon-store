import React, { useContext } from "react";
import classes from "./Cart.module.css";
import { cartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartIn from "./CartIn";

const Cart = () => {
  const { cart, cartLen } = useContext(cartContext);

  return (
    <>
      <div className="wrapper">
        <div className={classes.collection_top}>
          <Link to="/">
            <p className={classes.collection_main}>Главная</p>
          </Link>
          <p className={classes.collection_main}>/</p>
          <p className={classes.collection_top__grey}>Корзина</p>
        </div>
      </div>
      <div className={classes.cart_content}>
        <div className="wrapper">
          <div className={classes.cart}>
            <div className={classes.left}>
              {cart?.products?.map((item) => {
                return <CartIn item={item} />;
              })}
            </div>

            <div className={cartLen > 0 ? classes.right : classes.rightNone}>
              <div className={classes.summ}>Сумма заказа</div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p className={classes.grey}>Количество линеек:</p>
                <p className={classes.dark}>7 st</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p className={classes.grey}>Количество товаров:</p>
                <p className={classes.dark}>35 st</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p className={classes.grey}>Стоимость:</p>
                <p className={classes.dark}>4564</p>
              </div>
              <div
                className={classes.sale}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <p className={classes.grey}>Скидка:</p>
                <p className={classes.dark}>321655</p>
              </div>
              <div
                className={classes.cash}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <p className={classes.grey}>Итого к оплате:</p>
                <p className={classes.dark}>5646</p>
              </div>
              <button className={classes.orderBtn}>Оформить заказ</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
