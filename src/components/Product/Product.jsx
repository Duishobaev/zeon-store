import React, { useContext, useState } from "react";
import { ReactComponent as Heart } from "../../assets/Vector.svg";
import { ReactComponent as EmptyHeart } from "../../assets/EmptyHeart.svg";
import { favoriteContext } from "../../context/FavoriteContext";
import classes from "../Product/Product.module.css";
import red from "../../images/red_corner.svg";
import { Link } from "react-router-dom";
import img2 from "../../images/imgHov2.png";
import img3 from "../../images/imgHov3.png";
import img4 from "../../images/imgHov4.png";

const Product = ({ item }) => {
  const { addDelFav, isProdInFav } = useContext(favoriteContext);
  const [inFav, setInFav] = useState(isProdInFav(item.id));
  const [hovPic, setHovPic] = useState(item.img);
  const [hovFollow, setHovFollow] = useState("follow5");
  const [light, setLight] = useState(false);

  let saleRes = Math.ceil((item.price * item.sale) / 100);

  const handleMouse = (event) => {
    let mouseX = event.nativeEvent.offsetX;
    let cardWidth = event.target.clientWidth;
    let changeWidth = cardWidth / 4;
    setLight(true);

    if (mouseX > 1 && mouseX < changeWidth) {
      setHovPic(item.img);
      setHovFollow("follow1");
    } else if (mouseX > changeWidth && mouseX < changeWidth * 2) {
      setHovPic(img2);
      setHovFollow("follow2");
    } else if (mouseX > changeWidth * 2 && mouseX < changeWidth * 3) {
      setHovPic(img3);
      setHovFollow("follow3");
    } else if (mouseX > changeWidth * 3 && mouseX < changeWidth * 4) {
      setHovPic(img4);
      setHovFollow("follow4");
    }
  };

  const handleMouseLeave = () => {
    setHovPic(item.img);
    setLight(false);
    setHovFollow("follow5");
  };

  return (
    <>
      <div className={classes.home}>
        <div className={classes.home_item}>
          <Link to={`/${item.collection}/${item.id}`}>
            <img
              className={classes.photos}
              src={hovPic}
              alt="#"
              onMouseMove={(e) => handleMouse(e)}
              onMouseLeave={() => handleMouseLeave()}
            />
          </Link>
          <div className={hovFollow}></div>
          {item.sale ? <img className={classes.sale} src={red} alt="" /> : null}
          {item.sale !== undefined ? (
            <p className={classes.discount}>{item.sale}%</p>
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
              {item.sale !== undefined ? (
                <div className={classes.price}>{saleRes} р</div>
              ) : null}
              {item.sale !== undefined ? (
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
