import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { Typography } from "antd";
import React from "react";
import { ExpandMoreOutlined } from "@mui/icons-material";
import classes from "./Help.module.css";

const Accord = () => {
  const [current, setCurrent] = React.useState(-1);
  const changeState = (panel) => (e, newValue) => {
    setCurrent(newValue ? panel : -1);
  };
  return (
    <>
      <div className={classes.accordion_title}>Помощь</div>
      <Accordion expanded={current === 0} onChange={changeState(0)}>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography className={classes.ac_title}>
            Как я могу заказать одежду?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.ac_descr}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
          laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque
          pellentesque massa ornare sit pellentesque elit nulla. Id est tellus
          maecenas ornare velit. Ut cras ut rhoncus fermentum pharetra a
          sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
          laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque
          pellentesque massa ornare sit pellentesque elit nulla. Id est tellus
          maecenas ornare velit.
        </AccordionDetails>
      </Accordion>
      <div className={classes.br}></div>
      <Accordion expanded={current === 1} onChange={changeState(1)}>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography className={classes.ac_title}>
            Как осуществляется доставка?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.ac_descr}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
          laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque
          pellentesque massa ornare sit pellentesque elit nulla. Id est tellus
          maecenas ornare velit. Ut cras ut rhoncus fermentum pharetra a
          sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
          laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque
          pellentesque massa ornare sit pellentesque elit nulla. Id est tellus
          maecenas ornare velit.
        </AccordionDetails>
      </Accordion>
      <div className={classes.br}></div>
      <Accordion expanded={current === 2} onChange={changeState(2)}>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography className={classes.ac_title}>
            Где производятся вещи?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.ac_descr}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
          laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque
          pellentesque massa ornare sit pellentesque elit nulla. Id est tellus
          maecenas ornare velit. Ut cras ut rhoncus fermentum pharetra a
          sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
          laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque
          pellentesque massa ornare sit pellentesque elit nulla. Id est tellus
          maecenas ornare velit.
        </AccordionDetails>
      </Accordion>
      <div className={classes.br}></div>
      <Accordion expanded={current === 3} onChange={changeState(3)}>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography className={classes.ac_title}>
            Как будет упакован заказ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.ac_descr}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
          laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque
          pellentesque massa ornare sit pellentesque elit nulla. Id est tellus
          maecenas ornare velit. Ut cras ut rhoncus fermentum pharetra a
          sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
          laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque
          pellentesque massa ornare sit pellentesque elit nulla. Id est tellus
          maecenas ornare velit.
        </AccordionDetails>
      </Accordion>
      <div className={classes.br}></div>
      <Accordion expanded={current === 4} onChange={changeState(4)}>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography className={classes.ac_title}>
            Lorem ipsum dolor sit amet?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.ac_descr}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
          laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque
          pellentesque massa ornare sit pellentesque elit nulla. Id est tellus
          maecenas ornare velit. Ut cras ut rhoncus fermentum pharetra a
          sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
          laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque
          pellentesque massa ornare sit pellentesque elit nulla. Id est tellus
          maecenas ornare velit.
        </AccordionDetails>
      </Accordion>
      <div className={classes.br}></div>
      <Accordion expanded={current === 5} onChange={changeState(5)}>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography className={classes.ac_title}>
            Есть ли возврат, при условии если одежда пришла не того размера?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.ac_descr}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
          laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque
          pellentesque massa ornare sit pellentesque elit nulla. Id est tellus
          maecenas ornare velit. Ut cras ut rhoncus fermentum pharetra a
          sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
          laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque
          pellentesque massa ornare sit pellentesque elit nulla. Id est tellus
          maecenas ornare velit.
        </AccordionDetails>
      </Accordion>
      <div className={classes.br}></div>
      <Accordion expanded={current === 6} onChange={changeState(6)}>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography className={classes.ac_title}>
            Как я могу оставить заявку на обратную связь
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.ac_descr}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
          laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque
          pellentesque massa ornare sit pellentesque elit nulla. Id est tellus
          maecenas ornare velit. Ut cras ut rhoncus fermentum pharetra a
          sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
          laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque
          pellentesque massa ornare sit pellentesque elit nulla. Id est tellus
          maecenas ornare velit.
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Accord;
