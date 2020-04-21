import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { Spinner } from "../../components";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return <Spinner />;
  }

  const dataToMap = [
    {
      type: "Infected",
      value: confirmed.value,
      text: "Number of active COVID-19 cases",
      styles: styles.infected,
    },
    {
      type: "Recovered",
      value: recovered.value,
      text: "Number of recoveries from COVID-19",
      styles: styles.recovered,
    },
    {
      type: "Deaths",
      value: deaths.value,
      text: "Number of deaths caused by COVID-19",
      styles: styles.deaths,
    },
  ];
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {dataToMap.map((data, idx) => (
          <Grid
            key={idx}
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, data.styles)}
          >
            <CardContent>
              <Typography color="textSecondary" gutter="bottom">
                {data.type}
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={data.value}
                  duration={2}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">{data.text}</Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cards;
