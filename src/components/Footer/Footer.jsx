import React, { useEffect, useState } from "react";
import phoneIcon from "../../images/phoneIcon.svg";
import mailIcon from "../../images/mailIcon.svg";
import instaIcon from "../../images/instaIcon.png";
import telegIcon from "../../images/TelegIcon.svg";
import whatsIcon from "../../images/WhatsIcon.png";
import classes from "../Footer/Footer.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Footer = () => {
  const [footData, setFootData] = useState([]);

  useEffect(() => {
    getFooter();
  }, []);

  const getFooter = async () => {
    const { data } = await axios("http://localhost:8000/footer");
    setFootData(data);
  };

  return (
    <>
      <div className={classes.footer}>
        <div className={classes.wrapper}>
          {footData.map((item) => {
            return (
              <div key={item.id} className={classes.footer_inner}>
                <div className={classes.footer_inner__nav}>
                  <Link to="/">
                    <img
                      className={classes.logo}
                      src={item.logo}
                      alt="footerLogo"
                    />
                  </Link>
                </div>
                <div className={classes.footer_inner__nav}>
                  <h4>Компания</h4>
                  <ul>
                    <Link to="/about">
                      <li>О нас</li>
                    </Link>
                    <Link to="/news">
                      <li>Новости</li>
                    </Link>
                    <Link to="/help">
                      <li>Помощь</li>
                    </Link>
                    <Link className={classes.public} to="/public">
                      <li>Публичная оферта</li>
                    </Link>
                  </ul>
                </div>
                <div className={classes.footer_inner__nav}>
                  <h4>Контакты</h4>
                  <ul>
                    <li>
                      <img src={phoneIcon} alt="" />
                      <a href="tel:+99656565656">{item.phone}</a>
                    </li>
                    <li>
                      <img src={phoneIcon} alt="" />
                      <a href="tel:+99656565656">{item.phone}</a>
                    </li>
                    <li>
                      <img src={mailIcon} alt="" />
                      <a href="https://mail.ru">{item.mail}</a>
                    </li>
                  </ul>
                </div>
                <div className={classes.footer_inner__nav}>
                  <h4>Мы в социальных сетях:</h4>
                  <ul>
                    <li>
                      <img src={instaIcon} alt="" />
                      <a href="https://instagram.com">{item.instagram}</a>
                    </li>
                    <li>
                      <img src={telegIcon} alt="" />
                      <a href="https://telegram.com">{item.telegram}</a>
                    </li>
                    <li>
                      <img src={whatsIcon} alt="" />
                      <a href="https://whatsapp.com">{item.whatsapp}</a>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}

          <div className={classes.zeon}>Developed by Zeon 2022</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
