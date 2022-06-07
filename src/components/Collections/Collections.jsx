import { Link } from "react-router-dom";
import classes from "../Collections/Collections.module.css";
import React, { useContext, useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { getContextCol } from "../../context/ContextCol";

const Collections = () => {
  const { collects, getColData } = useContext(getContextCol);
  const limit = 8;

  useEffect(() => {
    getColData(limit);
  }, [limit]);

  return (
    <>
      <div className={classes.collectionContent}>
        <div className={classes.wrapper}>
          <div className={classes.collection_top}>
            <Link to="/">
              <p className={classes.collection_main}>Главная</p>
            </Link>
            <p className={classes.collection_main}>/</p>
            <p className={classes.collection_top__grey}>Коллекции</p>
          </div>
          <div className={classes.title}>
            <div className={classes.homeTitle}>Коллекция</div>
          </div>
          <div className={classes.content}>
            {collects.map((item) => {
              return (
                <div className={classes.home} key={item.id}>
                  <div className={classes.home_item}>
                    <img className={classes.photos} src={item.img} alt="/" />
                    <p className={classes.descr}>{item.descr}</p>
                  </div>
                  <Link to="summer">
                    <button className={classes.btn_col}>
                      Смотреть все <ArrowForwardIosIcon />
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;