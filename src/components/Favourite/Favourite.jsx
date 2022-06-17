import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import classes from "../Favourite/Favourite.module.css";
import { favoriteContext } from "../../context/FavoriteContext";
import { CardActionArea } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";
import RandomView from "../RandomView/RandomView";
import { Link } from "react-router-dom";

const Favorite = () => {
  const { fav, getFav, deleteProdInFav, favoriteLength } =
    useContext(favoriteContext);

  const [extraProducts, setExtraProducts] = useState([]);
  const [limit, setLimit] = useState(12);

  useEffect(() => {
    getFav();
  }, []);

  const ScrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      150
    ) {
      setLimit(limit + 12);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", ScrollHandler);

    return () => {
      document.removeEventListener("scroll", ScrollHandler);
    };
  }, []);

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

  return (
    <>
      <div className="wrapper">
        <div className={classes.collection_top}>
          <Link to="/">
            <p className={classes.collection_main}>Главная</p>
          </Link>
          <p className={classes.collection_main}>/</p>
          <p className={classes.collection_top__grey}>Избранное</p>
        </div>
      </div>
      <div className={classes.favContent}>
        <div className="wrapper">
          <h3 className={classes.favTitle}>Избранное</h3>
          <div>
            {fav.products?.length > 0 ? (
              <>
                <p className={classes.favSubtitle}>
                  Товары в избранном: {favoriteLength}
                </p>
                <div className={classes.cardContent}>
                  {fav.products
                    .filter((i, k) => k < limit)
                    .map((item1) => (
                      <Card
                        className={classes.card}
                        key={item1.item.id}
                        square={true}
                      >
                        <CardActionArea>
                          <FavoriteIcon
                            className="favorite"
                            style={{
                              color: "red",
                              position: "absolute",
                              top: "2%",
                              right: "5%",
                            }}
                            onClick={() => {
                              deleteProdInFav(item1.item.id);
                            }}
                          />
                          <CardMedia
                            className={classes.img}
                            height="140"
                            component="img"
                            image={item1.item.img}
                            alt="image"
                          />
                          <CardContent>
                            <Typography
                              className={classes.cardTitle}
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {item1.item.type}
                            </Typography>
                            {item1.item.discount ? (
                              <div>
                                <span className={classes.discount}>
                                  {Math.ceil(
                                    item1.item.price -
                                      (item1.item.price * item1.item.discount) /
                                        100
                                  )}{" "}
                                  p
                                </span>
                                <span className={classes.discount}>
                                  {item1.item.price} p
                                </span>
                              </div>
                            ) : (
                              <Typography
                                className="hit-price"
                                variant="body2"
                                color="text.secondary"
                              >
                                <p className={classes.discount}>
                                  {item1.item.price}{" "}
                                </p>
                              </Typography>
                            )}
                            <Typography
                              className={classes.favSize}
                              variant="body2"
                              color="text.secondary"
                            >
                              Размер : {item1.item.size}
                            </Typography>
                            <CardMedia
                              className={classes.multiple}
                              component="img"
                              image={item1.item.multiple}
                              alt="image"
                            />
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    ))}
                </div>
              </>
            ) : (
              <>
                <div>
                  <p className={classes.favEmptyTitle}>
                    У вас пока нет избранных товаров
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
      </div>
    </>
  );
};
export default Favorite;
