import React from "react";
import image from "../../images/covid-logo.png";
import styles from "./Spinner.module.css";

const Spinner = () => {
  return <img src={image} className={styles.covidLogo} alt="Spinner" />;
};

export default Spinner;
