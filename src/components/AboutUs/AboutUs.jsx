import React, { useEffect, useState } from "react";
import classes from "../AboutUs/AboutUs.module.css";
import aboutImg1 from "../../images/aboutPhoto1.png";
import aboutImg2 from "../../images/aboutPhoto2.png";
import aboutImg3 from "../../images/aboutPhoto3.png";
import { Link } from "react-router-dom";
import axios from "axios";

const AboutUs = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    getAbout();
  }, []);

  const getAbout = async () => {
    const { data } = await axios("http://localhost:8000/about");
    setAbout(data);
  };

  return (
    <>
      <div className="wrapper">
        <div className={classes.about_top}>
          <Link to="/">
            <p className={classes.about_main}>Главная</p>
          </Link>
          <p className={classes.about_main}>/</p>
          <p className={classes.about_top__grey}>О нас</p>
        </div>
      </div>
      <div className={classes.aboutContent}>
        <div className={classes.wrapper}>
          {about.map((item) => {
            return (
              <div key={item.id} className={classes.aboutUs}>
                <div className={classes.leftImages}>
                  <div>
                    <img className={classes.pic1} src={item.img1} alt="" />
                    <img className={classes.pic2} src={item.img2} alt="" />
                  </div>
                  <div className={classes.pic3_wrap}>
                    <img className={classes.pic3} src={item.img3} alt="" />
                  </div>
                </div>
                <div className={classes.rightDesc}>
                  <h3>{item.title}</h3>
                  <p>{item.descr}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
