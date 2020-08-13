import React from "react";
import styles from "./App.module.css";
import { Cards, Chart, CountryPicker, Footer } from "./components";
import { fetchData } from "./api";
import image from "./images/covid19.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.app}>
          <div className={styles.app__left}>
            <div className={styles.app__header}>
              <img className={styles.image} src={image} alt="COVID-19" />
              <CountryPicker handleCountryChange={this.handleCountryChange} />
            </div>
          </div>
        </div>
        <h1 className={styles.header}>
          {country ? `Live stats for ${country}` : "Live stats worldwide"}
        </h1>
        <Cards data={data} />
        <Chart country={country} data={data} />
        <Footer data={data} />
      </div>
    );
  }
}

export default App;
