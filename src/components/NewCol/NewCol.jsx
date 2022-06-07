import React, { useContext, useEffect, useState } from "react";
import { getContext } from "../../context/Context";
import classes from "../NewCol/NewCol.module.css";

const NewCol = () => {
  const { goods, getGoodsData } = useContext(getContext);
  const [limit, setLimit] = useState(4);
  const [max, setMax] = useState(true);

  useEffect(() => {
    getGoodsData(limit);
  }, [limit]);

  function more() {
    setLimit(limit + 4);
    if (limit == 4) {
      setMax(false);
    }
  }

  return (
    <>
      <div className="wrapper">
        <div className={classes.title}>
          <div className={classes.homeTitle}>Новинки</div>
        </div>
        <div className={classes.content}>
          {goods.map((item) => {
            return (
              <div className={classes.home} key={item.id}>
                <div className={classes.home_item}>
                  <img className={classes.photos} src={item.img} alt="/" />
                  <div className={classes.list}>
                    <ul>
                      <li className={classes.title_dress}>{item.type}</li>
                      <li className={classes.price}>{item.price}</li>
                      <li className={classes.size}>Размер: {item.size}</li>
                    </ul>
                    <img src={item.multiple} alt="" />
                  </div>
                </div>
              </div>
            );
          })}

          {max ? (
            <button className={classes.more} onClick={more}>
              Ещё
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default NewCol;
