import React, { useContext, useEffect, useState } from "react";
import { getContext } from "../../context/Context";
import ColList from "../ColList/ColList";
import classes from "../Home/Home.module.css";
import Modal from "../Modal/Modal";
import NewCol from "../NewCol/NewCol";
import Product from "../Product/Product";
import Strength from "../Strength/Strength";
import Swiper from "../Swiper/Swiper";
import hookPhone from "../../images/hook_phone.svg";
import hookArrow from "../../images/hook_arrow.svg";
import hookMess from "../../images/hook_mess.svg";
import hookClose from "../../images/hook_close.svg";
import hookWhapsapp from "../../images/hook_whatsapp.svg";
import hookTelegram from "../../images/hook_telegramm.svg";

const Home = () => {
  const { items, getItemsData } = useContext(getContext);
  const [limit, setLimit] = useState(8);
  const [max, setMax] = useState(true);
  const [modalActive, setModalActive] = React.useState(false);
  const [hookActive, setHookActive] = React.useState(false);

  useEffect(() => {
    getItemsData(limit);
  }, [limit]);

  function more() {
    setLimit(limit + 4);
    if (limit == 12) {
      setMax(false);
    }
  }

  const moveTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className={classes.homeContent}>
        <div className="wrapper">
          <Swiper className={classes.swiper} />
          <div className={classes.title}>
            <div className={classes.homeTitle}>Хит продаж</div>
          </div>
          <div className={classes.content}>
            {items.map((item) => (
              <Product key={item.id} item={item} />
            ))}
            {max ? (
              <button className={classes.more} onClick={more}>
                Ещё
              </button>
            ) : null}
          </div>
          <NewCol />
          <ColList />
          <Strength />
          <Modal active={modalActive} setActive={setModalActive} />
          <div className="hooks">
            <img width={25} src={hookArrow} alt="" onClick={() => moveTop()} />
            <div className="hooks_inner">
              <img
                onClick={() => setHookActive((d) => !d)}
                style={{ marginTop: 20 }}
                src={hookActive ? hookClose : hookMess}
                alt=""
              />
            </div>
          </div>
          <div
            className={hookActive ? "hooks_items active " : "hooks_item"}
            onClick={() => setHookActive(false)}
          >
            <a href="">
              <img width={44} src={hookTelegram} alt="" />
            </a>
            <a href="">
              <img width={44} src={hookWhapsapp} alt="" />
            </a>
            <img
              width={44}
              onClick={() => setModalActive(true)}
              src={hookPhone}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
