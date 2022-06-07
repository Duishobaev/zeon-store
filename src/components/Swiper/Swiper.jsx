import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import classes from "../Swiper/Swiper.module.css";

export default function Swiper() {
  const [hero, setHero] = useState([]);

  useEffect(() => {
    getHero();
  }, []);

  const getHero = async () => {
    const { data } = await axios("http://localhost:8000/hero");
    setHero(data);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
  };
  return (
    <>
      {hero.map((item) => {
        return (
          <Slider key={item.id} {...settings} className={classes.slider}>
            <div className={classes.slider_inner}>
              <img src={item.img} alt="" />
            </div>
            <div className={classes.slider_inner}>
              <img src={item.img} alt="" />
            </div>
            <div className={classes.slider_inner}>
              <img src={item.img} alt="" />
            </div>
          </Slider>
        );
      })}
    </>
  );
}
