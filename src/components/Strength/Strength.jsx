import React, { useContext, useEffect, useState } from "react";
import classes from "../Strength/Strength.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Strength = () => {
  const [str, setStr] = useState([]);

  useEffect(() => {
    getStr();
  }, []);

  const getStr = async () => {
    const { data } = await axios("http://localhost:8000/strength");
    setStr(data);
  };

  return (
    <>
      <div className="wrapper">
        <div className={classes.title}>
          <div className={classes.homeTitle}>Наши преимущества</div>
        </div>
        <div className={classes.content}>
          {str.map((item) => {
            return (
              <div className={classes.str_card} key={item.id}>
                <div className={classes.card_inner}>
                  <img className={classes.card_img} src={item.img} alt="" />
                  <p className={classes.card_title}>{item.title}</p>
                  <p className={classes.card_descr}>{item.descr}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Strength;
