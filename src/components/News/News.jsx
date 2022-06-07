import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "../News/News.module.css";

const News = () => {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    if (fetching) {
      axios
        .get(` http://localhost:8000/news?_limit=4&_page=${currentPage}`)
        .then((response) => {
          setPhotos([...photos, ...response.data]);
          setCurrentPage((prevState) => prevState + 1);
          setTotalCount(response.headers["x-total-count"]);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [fetching]);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      photos.length < totalCount
    ) {
      setFetching(true);
    }
  };

  return (
    <>
      <div className={classes.news}>
        <div className={classes.wrapper}>
          <div className={classes.direct}>
            <Link to="/">
              <div className={classes.main}>Главная</div>
            </Link>
            <div className={classes.divider}>/</div>
            <div className={classes.news_dir}>Новости</div>
          </div>
        </div>
      </div>
      <div className={classes.news_center}>
        <div className={classes.wrapper}>
          <h4>Новости</h4>
          {photos.map((item) => {
            return (
              <div className={classes.news_center___inner} key={item.id}>
                <img src={item.img} alt="" />
                <div>
                  <h5>{item.title}</h5>
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

export default News;
