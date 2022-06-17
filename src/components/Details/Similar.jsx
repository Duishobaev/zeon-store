import React, { useContext, useEffect, useState } from "react";
import { getContext } from "../../context/Context";
import classes from "./Similar.module.css";
import SimilarIn from "./SimilarIn";

const Similar = ({ detail }) => {
  const { season, getSimilar, detData } = useContext(getContext);

  useEffect(() => {
    getSimilar(detData.type);
  }, [detData]);

  return (
    <>
      <div className="wrapper">
        <h4 className={classes.simTitle}>Похожие товары</h4>
        <div className={classes.simContent}>
          {season.map((card) => {
            return <SimilarIn key={card.id} card={card} detail={detail} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Similar;
