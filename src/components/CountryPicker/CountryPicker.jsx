import React, { useState, useEffect } from "react";
import { NativeSelect, InputLabel, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";
import { favoriteCountries } from "../../utils/utils";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);

  const sortedCountriesData = [
    ...fetchedCountries.sort(
      (a, b) => favoriteCountries(a) - favoriteCountries(b)
    ),
  ];

  return (
    <FormControl className={styles.formControl}>
      <InputLabel shrink htmlFor="select-multiple-native">
        Please select
      </InputLabel>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {sortedCountriesData.map((country, idx) => (
          <option key={idx} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
