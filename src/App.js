import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import { Cards, Chart, CountryPicker, Footer } from "./components";
import { fetchData } from "./api";
import image from "./images/covid19.png";

const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchedData = async () => {
      setData(await fetchData());
    };
    fetchedData();
  }, []);

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    setCountry(country);
    setData(fetchedData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <div className={styles.app__left}>
          <div className={styles.app__header}>
            <img className={styles.image} src={image} alt="COVID-19" />
            <CountryPicker handleCountryChange={handleCountryChange} />
          </div>
        </div>
      </div>
      <h1 className={styles.header}>
        {country ? `Live stats for ${country}` : "Live stats Worldwide"}
      </h1>
      <Cards data={data} />
      <Chart country={country} data={data} />
      <Footer lastUpdate={data ? data.lastUpdate : new Date()} />
    </div>
  );
};

export default App;
