import React, { useContext, useEffect, useState } from "react";
import { getContext } from "../../context/Context";
import ColList from "../ColList/ColList";
import classes from "../Home/Home.module.css";
import NewCol from "../NewCol/NewCol";
import Product from "../Product/Product";
import Strength from "../Strength/Strength";
import Swiper from "../Swiper/Swiper";

const Home = () => {
  const { items, getItemsData } = useContext(getContext);
  const [limit, setLimit] = useState(8);
  const [max, setMax] = useState(true);

  useEffect(() => {
    getItemsData(limit);
  }, [limit]);

  function more() {
    setLimit(limit + 4);
    if (limit == 12) {
      setMax(false);
    }
  }

  return (
    <>
      <div className={classes.homeContent}>
        <div className="wrapper">
          <Swiper />
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
        </div>
      </div>
    </>
  );
};

export default Home;
