import React from "react";
import { Typography } from "@material-ui/core";
import styles from "./Footer.module.css";

const Footer = ({ data: { lastUpdate } }) => {
  return (
    <div className={styles.container}>
      <Typography variant="body1"> Covid19 live stats</Typography>
      <Typography variant="body2" color="textSecondary">
        {new Date(lastUpdate).toDateString()}
      </Typography>
    </div>
  );
};

export default Footer;
