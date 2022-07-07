import { Link } from "react-router-dom";
import classes from "../Collections/Collections.module.css";
import React, { useContext, useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { getContextCol } from "../../context/ContextCol";
import { Pagination } from "antd";

const Collections = () => {
  const { collects, getColData } = useContext(getContextCol);
  const limit = 8;
  const [page, setPage] = useState(1);

  useEffect(() => {
    getColData(limit, page);
  }, [limit, page]);

  function onChange(page) {
    setPage(page);
  }

  return (
    <>
      <div className="wrapper">
        <div className={classes.collection_top}>
          <Link to="/">
            <p className={classes.collection_main}>Главная</p>
          </Link>
          <p className={classes.collection_main}>/</p>
          <p className={classes.collection_top__grey}>Коллекции</p>
        </div>
      </div>
      <div className={classes.collectionContent}>
        <div className={classes.wrapper}>
          <div className={classes.title}>
            <div className={classes.homeTitle}>Коллекции</div>
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
          <Pagination
            defaultCurrent={1}
            current={page}
            total={32}
            onChange={onChange}
            className={classes.pagination}
          />
        </div>
      </div>
    </>
  );
};

export default Collections;
