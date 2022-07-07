import React from "react";
import classes from "./Help.module.css";
import help from "../../images/helpImg.png";
import { Link } from "react-router-dom";
import Accord from "./Accord";

const Help = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.slick_title}>
          <div className={classes.collection_top}>
            <Link to="/">
              <p className={classes.collection_main}>Главная</p>
            </Link>
            <p className={classes.collection_main}>/</p>
            <p className={classes.collection_top__grey}>Избранное</p>
          </div>
        </div>
      </div>
      <div className={classes.helppage}>
        <div className={classes.container}>
          <div className={classes.helppage_item}>
            <div className={classes.helppage__img}>
              <img src={help} alt="" />
            </div>
            <div className={classes.Accord}>
              <Accord />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
