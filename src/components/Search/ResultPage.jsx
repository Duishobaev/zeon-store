import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Product from "../Product/Product.jsx";
import axios from "axios";
import classes from "./ResultPage.module.css";

const ResultPage = () => {
  const { name } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/all?name_like=${name}`)
      .then((a) => setData(a.data));
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className={classes.collection_top}>
          <Link to="/">
            <p className={classes.collection_main}>Главная</p>
          </Link>
          <p className={classes.collection_main}>/</p>
          <p className={classes.collection_top__grey}>Результаты</p>
        </div>
        <div className={classes.researchCard}>
          {Array.isArray(data) &&
            data.map((elem, index) => {
              return <Product key={elem.id} item={elem} />;
            })}
        </div>
      </div>
    </>
  );
};

export default ResultPage;
