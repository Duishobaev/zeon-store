import React, { useContext, useState } from "react";
import { ReactComponent as Heart } from "../../assets/Vector.svg";
import { ReactComponent as EmptyHeart } from "../../assets/EmptyHeart.svg";
import classes from "../RandomView/RandomView.module.css";
import { favoriteContext } from "../../context/FavoriteContext";

const RandomView = ({ item }) => {
  const { addDelFav, isProdInFav } = useContext(favoriteContext);
  const [inFav, setInFav] = useState(isProdInFav(item.id));

  return (
    <>
      <div className="wrapper">
        <div className={classes.home}>
          <div className={classes.home_item}>
            <img className={classes.photos} src={item.img} alt="" />
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
      </div>
    </>
  );
};

export default RandomView;
