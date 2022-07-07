import React, { useContext, useEffect, useState } from "react";
import classes from "./Cart.module.css";
import { cartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartIn from "./CartIn";
import axios from "axios";
import RandomView from "../RandomView/RandomView";

const Cart = () => {
  const { cart, cartLen } = useContext(cartContext);
  const [extraProducts, setExtraProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/items?_limit=2`).then((response) => {
      setExtraProducts((prev) => [...prev, ...response.data]);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:8000/goods?_limit=1`).then((response) => {
      setExtraProducts((prev) => [...prev, ...response.data]);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:8000/skirts?_limit=1`).then((response) => {
      setExtraProducts((prev) => [...prev, ...response.data]);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:8000/autumn?_limit=1`).then((response) => {
      setExtraProducts((prev) => [...prev, ...response.data]);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:8000/nature?_limit=1`).then((response) => {
      setExtraProducts((prev) => [...prev, ...response.data]);
    });
  }, []);

  const totalLine = cart.products?.reduce(
    (summ, cur) => (summ = summ + cur.item.count),
    0
  );

  const conditionOfPrice = cart?.products?.reduce(
    (total, cur) => total + cur?.item?.price * cur?.item?.count,
    0
  );

  const quanProd = cart?.products?.reduce(
    (total, cur) => total + 5 * cur?.item?.count,
    0
  );

  const discount = cart?.products?.reduce(
    (total, cur) => (cur.item.sale ? total + cur.item.sale : "0"),
    0
  );

  const totalSumm = cart?.products?.reduce(
    (total, cur) =>
      cur.item.sale
        ? total + cur?.item?.price * cur?.item?.count - cur?.item?.sale
        : total + cur?.item?.price * cur?.item?.count,
    0
  );

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
          {cartLen > 0 ? (
            <div className={classes.cart}>
              <div className={classes.left}>
                {cart?.products?.map((item) => {
                  return <CartIn item={item} />;
                })}
              </div>

              <div className={cartLen > 0 ? classes.right : classes.rightNone}>
                <div className={classes.summ}>Сумма заказа</div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p className={classes.grey}>Количество линеек:</p>
                  <p className={classes.dark}>{totalLine} шт</p>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p className={classes.grey}>Количество товаров:</p>
                  <p className={classes.dark}>{quanProd} шт</p>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p className={classes.grey}>Стоимость:</p>
                  <p className={classes.dark}>{conditionOfPrice} рублей</p>
                </div>
                <div
                  className={classes.sale}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p className={classes.grey}>Скидка:</p>
                  <p className={classes.dark}>{discount} рублей</p>
                </div>
                <div
                  className={classes.cash}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p className={classes.grey}>Итого к оплате:</p>
                  <p className={classes.dark}>{totalSumm} рублей</p>
                </div>
                <button className={classes.orderBtn}>Оформить заказ</button>
              </div>
            </div>
          ) : (
            <>
              <div>
                <p className={classes.cartEmptyTitle}>Корзина</p>
                <p className={classes.favEmptyTitle}>
                  У вас пока нет товаров в корзине
                </p>
                <h3 className={classes.favEmptySubtitle}>
                  Возможно Вас заинтересует
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {extraProducts.map((item) => (
                    <RandomView item={item} key={item.id} />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
