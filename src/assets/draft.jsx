// Махабат, [03.06.2022 16:51]
// import React, { useContext, useEffect, useState } from "react";
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import "./Favorite.css";
// import { favoriteContext } from "../../context/favoriteContext";
// import { CardActionArea } from "@mui/material";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import axios from "axios";
// import Random from "../Random/Random";
// import Color from "../Colors/Color";
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
    axios.get(`http://localhost:8000/summer?_limit=2`).then((response) => {
      setExtraProducts((prev) => [...prev, ...response.data]);
    });
  }, []);
  useEffect(() => {
    axios.get(`http://localhost:8000/new?_limit=1`).then((response) => {
      setExtraProducts((prev) => [...prev, ...response.data]);
    });
  }, []);
  useEffect(() => {
    axios.get(`http://localhost:8000/hits?_limit=1`).then((response) => {
      setExtraProducts((prev) => [...prev, ...response.data]);
    });
  }, []);
  useEffect(() => {
    axios.get(`http://localhost:8000/brandnew?_limit=1`).then((response) => {
      setExtraProducts((prev) => [...prev, ...response.data]);
    });
  }, []);
  return (
    <div className="fav-div">
      <div className="container">
        <h3 className="fav-main-title">Избранное</h3>
        <div>
          {fav?.products.length > 0 ? (
            <>
              <p className="fav-main-text">
                Товары в избранном {favoriteLength}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {fav.products
                  .filter((i, k) => k < limit)
                  .map((item1) => (
                    <Card key={item1.item.id} square={true}>
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
                          className="photos"
                          height="140"
                          component="img"
                          image={item1.item.img}
                          alt="fav image"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {item1.item.title}
                          </Typography>
                          {item1.item.discount ? (
                            <div>
                              <span className="discount">
                                {Math.ceil(
                                  item1.item.price -
                                    (item1.item.price * item1.item.discount) /
                                      100
                                )}{" "}
                                p
                              </span>
                              <span className="price-discount">
                                {item1.item.price} p
                              </span>
                            </div>
                          ) : (
                            <Typography
                              className="hit-price"
                              variant="body2"
                              color="text.secondary"
                            >
                              <p className="discount">{item1.item.price} p</p>
                            </Typography>
                          )}
                          <Typography variant="body2" color="text.secondary">
                            Размер : {item1.item.size}
                          </Typography>
                          <Color />
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  ))}
              </div>
            </>
          ) : (
            <>
              <div>
                <p className="favorite-text">
                  У вас пока нет избранных товаров
                </p>
                <h3 className="favorite-title">Возможно Вас заинтересует</h3>
              </div>
              <div style={{ display: "flex" }}>
                {extraProducts.map((item) => (
                  <Random item={item} key={item.id} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Favorite;
