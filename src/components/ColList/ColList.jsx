import React, { useContext, useEffect, useState } from "react";
import { getContext } from "../../context/Context";
import classes from "../ColList/ColList.module.css";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Pagination } from "antd";

const ColList = () => {
  const { collections, getColData } = useContext(getContext);
  const [limit, setLimit] = useState(4);
  const [max, setMax] = useState(true);

  useEffect(() => {
    getColData(limit);
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
          <div className={classes.homeTitle}>Коллекция</div>
        </div>
        <div className={classes.content}>
          {collections.map((item) => {
            return (
              <div className={classes.home} key={item.id}>
                <div className={classes.home_item}>
                  <img className={classes.photos} src={item.img} alt="/" />
                  <p className={classes.descr}>{item.descr}</p>
                </div>
                <Link to="collections/summer">
                  <button className={classes.btn_col}>
                    Смотреть все <ArrowForwardIosIcon />
                  </button>
                </Link>
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

export default ColList;
