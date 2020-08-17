import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./InfoCard.module.css";
import moment from "moment";
import CountUp from "react-countup";
import cx from "classnames";

const InfoCard = (props) => {
  return (
    <Grid
      key={props.idx}
      item
      component={Card}
      xs={12}
      md={3}
      className={cx(styles.card, props.styles)}
    >
      <CardContent>
        <Typography color="textSecondary" gutter="bottom">
          {props.type}
        </Typography>
        <Typography variant="h5">
          <CountUp start={0} end={props.value} duration={2} separator="," />
        </Typography>
        <Typography color="textSecondary">
          {moment(props.lastUpdate).format("DD-MM-YYYY")}
        </Typography>
        <Typography variant="body2">{props.text}</Typography>
      </CardContent>
    </Grid>
  );
};

export default InfoCard;
