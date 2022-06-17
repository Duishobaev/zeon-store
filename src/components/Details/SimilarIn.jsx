import React, { useContext, useEffect, useState } from "react";
import { getContext } from "../../context/Context";
import classes from "./Similar.module.css";
import { ReactComponent as Heart } from "../../assets/Vector.svg";
import { ReactComponent as EmptyHeart } from "../../assets/EmptyHeart.svg";
import { favoriteContext } from "../../context/FavoriteContext";

const SimilarIn = ({ card }) => {
  const { getSimilar, detData } = useContext(getContext);
  const { addDelFav, isProdInFav } = useContext(favoriteContext);
  const [inFav, setInFav] = useState(isProdInFav(card.id));

  useEffect(() => {
    getSimilar(detData.type);
  }, [detData]);
  return (
    <>
      <div key={card.id}>
        <div className={classes.simLike}>
          <img className={classes.simImg} src={card.img} alt="" />
          {inFav ? (
            <Heart
              className={classes.heart}
              onClick={() => {
                addDelFav(card);
                setInFav(isProdInFav(card.id));
              }}
            />
          ) : (
            <EmptyHeart
              className={classes.heart}
              onClick={() => {
                addDelFav(card);
                setInFav(isProdInFav(card.id));
              }}
            />
          )}
        </div>

        <div className={classes.simPrice}>
          <p className={classes.simPrice_inner1}>12000 р</p>
          <p className={classes.simPrice_inner2}>{card.price}</p>
        </div>
        <div className={classes.cotton}>The Organic Cotton Clothes</div>
        <div className={classes.simSize}>
          <p className={classes.simSize_inner1}>Размер:</p>
          <p className={classes.simSize_inner2}>{card.size}</p>
        </div>
        <div className={classes.mult}>
          <img src={card.multiple} alt="" />
        </div>
      </div>
    </>
  );
};

export default SimilarIn;
