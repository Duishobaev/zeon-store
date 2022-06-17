import React, { useContext, useEffect, useState } from "react";
import { ReactComponent as Heart } from "../../assets/Vector.svg";
import { ReactComponent as EmptyHeart } from "../../assets/EmptyHeart.svg";
import classes from "../Product/Product.module.css";
import { favoriteContext } from "../../context/FavoriteContext";
import red from "../../images/red_corner.svg";
import { Link } from "react-router-dom";

const SummerCol = ({ item, sale, bread }) => {
  const { addDelFav, isProdInFav } = useContext(favoriteContext);
  const [inFav, setInFav] = useState(isProdInFav(item.id));

  useEffect(() => {
    bread(item.type);
  }, [item]);
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
              className={classes.heart}
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
            <ul>
              <li className={classes.title_dress}>{item.type}</li>
              <li className={classes.price}>{item.price}</li>
              <li className={classes.size}>Размер: {item.size}</li>
            </ul>
            <img src={item.multiple} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SummerCol;
