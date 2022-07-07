import React, { useContext, useEffect, useState } from "react";
import { getContext } from "../../context/Context";
import SummerCol from "./SummerCol";
import classes from "../Summer/Summer.module.css";
import { Link } from "react-router-dom";
import { Pagination } from "antd";
import NewCol from "../NewCol/NewCol";
import Similar from "../Details/Similar";

const Summer = () => {
  const { items, getItemsData } = useContext(getContext);
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getItemsData(limit, page);
  }, [page]);

  const [type, setType] = useState("");
  const bread = (type) => {
    setType(type);
  };

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
          <Link to="/collections">
            <p className={classes.collection_main}>Коллекции</p>
          </Link>
          <p className={classes.collection_main}>/</p>
          <p className={classes.collection_top__grey}>{type}</p>
        </div>
      </div>
      <div className={classes.homeContent}>
        <div className="wrapper">
          <div className={classes.title}>
            <div className={classes.homeTitle}>{type}</div>
          </div>
          <div className={classes.content}>
            {items.map((item) => (
              <SummerCol key={item.id} item={item} bread={bread} />
            ))}
          </div>
          <Pagination
            defaultCurrent={1}
            current={page}
            total={32}
            onChange={onChange}
            className={classes.pagination}
          />

          <Similar />
        </div>
      </div>
    </>
  );
};

export default Summer;
