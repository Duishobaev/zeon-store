import React, { useContext, useState } from "react";
import { ReactComponent as Heart } from "../../assets/Vector.svg";
import { ReactComponent as EmptyHeart } from "../../assets/EmptyHeart.svg";
import { favoriteContext } from "../../context/FavoriteContext";
import classes from "../Product/Product.module.css";
import red from "../../images/red_corner.svg";
import { Link } from "react-router-dom";

const Product = ({ item, sale }) => {
  const { addDelFav, isProdInFav } = useContext(favoriteContext);
  const [inFav, setInFav] = useState(isProdInFav(item.id));

  return (
    <>
      <div className={classes.home}>
        <div className={classes.home_item}>
          <Link to={`/${item.collection}/${item.id}`}>
            <img className={classes.photos} src={item.img} alt="#" />
          </Link>
          {sale ? <img className={classes.sale} src={red} alt="" /> : null}
          {sale !== undefined ? (
            <p className={classes.discount}>{sale}%</p>
          ) : null}

          {inFav ? (
            <Heart
              className={classes.fullHeart}
              onClick={() => {
                addDelFav(item);
                setInFav(isProdInFav(item.id));
              }}
            />
          ) : (
            <EmptyHeart
              className={classes.heart}
              onClick={() => {
                addDelFav(item);
                setInFav(isProdInFav(item.id));
              }}
            />
          )}
          <div className={classes.list}>
            <div className={classes.title_dress}>{item.type}</div>
            <div style={{ display: "flex" }}>
              {sale !== undefined ? (
                <div className={classes.price}>
                  {Math.ceil((item.price * sale) / 100)} р
                </div>
              ) : null}
              {sale !== undefined ? (
                <div className={classes.disc}>{item.price} р</div>
              ) : (
                <div className={classes.price}>{item.price} р</div>
              )}
            </div>
            <div className={classes.size}>Размер: {item.size}</div>
            <img src={item.multiple} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
