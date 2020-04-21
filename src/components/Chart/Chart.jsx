import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
      options={{
        responsive: true,
        scales: {
          yAxes: [
            {
              ticks: {
                callback: function (value, index, values) {
                  return value >= 1e6
                    ? value / 1e6 + "M"
                    : value >= 1000 && value !== 0
                    ? value / 1000 + "K"
                    : value;
                },
                autoSkip: true,
                maxTicksLimit: 10,
                beginAtZero: true,
              },
              gridLines: {
                display: true,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
      }}
    />
  ) : null;

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            data: [confirmed.value, recovered.value, deaths.value],
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
        responsive: true,
        scales: {
          yAxes: [
            {
              ticks: {
                callback: function (value, index, values) {
                  return value >= 1e6
                    ? value / 1e6 + "M"
                    : value >= 1000 && value !== 0
                    ? value / 1000 + "K"
                    : value;
                },
                autoSkip: true,
                maxTicksLimit: 10,
                beginAtZero: true,
              },
              gridLines: {
                display: true,
              },
            },
          ],
        },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  );
};

export default Chart;
