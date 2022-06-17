import React, { useContext, useEffect, useState } from "react";
import classes from "./DetailCard.module.css";
import blockIcon from "../../images/blockIcon.svg";
import { cartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { ReactComponent as Heart } from "../../images/fullHeartWhite.svg";
import { ReactComponent as EmptyHeart } from "../../assets/EmptyHeart.svg";
import { favoriteContext } from "../../context/FavoriteContext";

const DetailCard = ({ detail }) => {
  const { addDelFav, isProdInFav } = useContext(favoriteContext);
  const [inFav, setInFav] = useState(isProdInFav(detail.id));

  const { addToCart, checkColor } = useContext(cartContext);
  const [currColor, setCurrColor] = useState("#73A39D");
  const [accept, setAccept] = useState(false);
  const [selected, setSelected] = useState("#73A39D");

  const clickColor = (color) => {
    setSelected(color);
    setCurrColor(color);
    const value = checkColor(detail.id, color);
    value ? setAccept(true) : setAccept(false);
  };

  const sendToCart = (image, size, id, descr, color, price, count) => {
    addToCart(image, size, id, descr, color, price, count);
    setAccept(true);
  };

  return (
    <>
      <div className={classes.details_top}>
        <div className={classes.details1}>
          <div className={classes.details_left}>
            <img className={classes.img} src={detail.img} alt="img" />
            <img className={classes.img} src={detail.img} alt="img" />
            <img className={classes.img} src={detail.img} alt="img" />
            <img className={classes.img} src={detail.img} alt="img" />
          </div>
          <div className={classes.details_left2}>
            <img className={classes.img_small} src={detail.img} alt="" />
            <img className={classes.img_small} src={detail.img} alt="" />
            <img className={classes.img_small} src={detail.img} alt="" />
            <img className={classes.img_small} src={detail.img} alt="" />
          </div>
        </div>

        <div className={classes.details2}>
          <div className={classes.details_card}>
            <h4>Вечернее платье</h4>
            <div className={classes.artikul}>
              Артикул:{" "}
              <p style={{ marginLeft: "6px", color: "#393939" }}>
                {detail.art}
              </p>
            </div>
            <div className={classes.color}>
              Цвет:
              {detail.color &&
                detail?.color.map((color) => {
                  return (
                    <div
                      className={
                        selected === color.color ? classes.selColorsList : ""
                      }
                    >
                      <div
                        key={color.id}
                        className={
                          selected === color.color
                            ? classes.posColor
                            : classes.colorsList
                        }
                        style={{
                          backgroundColor: `${color.color}`,
                        }}
                        onClick={() => clickColor(color.color)}
                      ></div>
                    </div>
                  );
                })}
            </div>

            <div style={{ display: "flex" }}>
              <p className={classes.price}>{detail.price}</p>
              <p className={classes.sale}>{detail.discount}</p>
            </div>
            <h6 className={classes.about_title}>О товаре:</h6>
            <p className={classes.about}>
              За последние 35 лет бренд Bonucci из обычного производителя одежды
              превратился в широко узнаваемую марку, а его продукция – в синоним
              высокого качества и актуального стиля.{" "}
            </p>
            <div className={classes.details_descr}>
              <div className={classes.details_descr_inner1}>
                <ul>
                  <li>
                    Размерный ряд:{" "}
                    <p className={classes.detSm}>{detail.size}</p>
                  </li>
                  <li>
                    Количество в линейке :{" "}
                    <p className={classes.detSm}>{detail.count}</p>
                  </li>
                </ul>
              </div>
              <div className={classes.details_descr_inner2}>
                <ul>
                  <li>
                    Состав ткани:
                    <p className={classes.detSm}>{detail.material}</p>{" "}
                  </li>
                  <li>
                    Материал:<p className={classes.detSm}>{detail.consists}</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.button}>
              {accept ? (
                <Link to="/cart">
                  <button className={classes.cart_btn}>
                    <img className={classes.zamok} src={blockIcon} alt="" />
                    Перейти в корзину
                  </button>
                </Link>
              ) : (
                <button
                  className={classes.cart_btn}
                  onClick={() =>
                    sendToCart({
                      image: detail.img,
                      size: detail.size,
                      id: detail.id,
                      descr: detail.descr,
                      color: currColor,
                      price: detail.price,
                      count: 1,
                    })
                  }
                >
                  <img className={classes.zamok} src={blockIcon} alt="" />
                  Добавить в корзину
                </button>
              )}

              {inFav ? (
                <Heart
                  className={classes.fullHeart}
                  onClick={() => {
                    addDelFav(detail);
                    setInFav(isProdInFav(detail.id));
                  }}
                />
              ) : (
                <EmptyHeart
                  className={classes.heart}
                  onClick={() => {
                    addDelFav(detail);
                    setInFav(isProdInFav(detail.id));
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailCard;
