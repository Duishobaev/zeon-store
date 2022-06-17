import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getContext } from "../../context/Context";
import classes from "./Details.module.css";
import DetailCard from "./DetailCard";
import Similar from "./Similar";

const Details = () => {
  const { collection, id } = useParams();
  const { detData, showDetails } = useContext(getContext);

  useEffect(() => {
    showDetails(collection, id);
  }, []);

  return (
    <>
      <div className="details">
        <div className="wrapper">
          <div className={classes.collection_top}>
            <Link to="/">
              <p className={classes.collection_main}>Главная</p>
            </Link>
            <p className={classes.collection_main}>/</p>
            <Link to="/collections">
              <p className={classes.collection_main}>Коллекции</p>
            </Link>
            <p className={classes.collection_main}>/</p>
            <Link to="#">
              <p className={classes.collection_main}>{detData.type}</p>
            </Link>
            <p className={classes.collection_main}>/</p>
            <p className={classes.collection_top__grey}>{detData.descr}</p>
          </div>
          <DetailCard detail={detData} />
          <Similar detail={detData} />
        </div>
      </div>
    </>
  );
};

export default Details;
