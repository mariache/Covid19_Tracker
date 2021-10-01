import React from "react";
import { Spinner } from "../../components";
import { Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import InfoCard from "../InfoCard/InfoCard";

const Cards = ({ data }) => {
  if (!data?.confirmed) {
    return <Spinner />;
  }

  const cardsData = [
    {
      type: "Infected",
      value: data.confirmed.value,
      text: "Number of active cases",
      styles: styles.infected,
    },
    {
      type: "Recovered",
      value: data.recovered.value,
      text: "Number of recoveries",
      styles: styles.recovered,
    },
    {
      type: "Deaths",
      value: data.deaths.value,
      text: "Number of deaths",
      styles: styles.deaths,
    },
  ];
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {cardsData.map((data, idx) => (
          <InfoCard
            type={data.type}
            styles={data.styles}
            lastUpdate={data.lastUpdate}
            text={data.text}
            idx={idx}
            value={data.value}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Cards;
