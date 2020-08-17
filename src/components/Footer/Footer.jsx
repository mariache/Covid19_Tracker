import React from "react";
import { Typography } from "@material-ui/core";
import styles from "./Footer.module.css";
import moment from "moment";

const Footer = ({ lastUpdate }) => {
  return (
    <div className={styles.container}>
      <Typography variant="body1"> Covid19 live stats</Typography>
      <Typography variant="body2" color="textSecondary">
        {moment(lastUpdate).format("YYYY-MM-DD")}
      </Typography>
    </div>
  );
};

export default Footer;
