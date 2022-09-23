import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  BarElement,
} from "chart.js";
import { useEffect } from "react";

import { Line, Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { fetchDailyData } from "../redux/dataSlice";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const options = {
  responsive: true,
  stacked: false,
  plugins: {},
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {},
    },
  },
};

function Graph() {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.covid.country);
  const covidData = useSelector((state) => state.covid.data);
  const dailyData = useSelector((state) => state.covid.dailyData);

  useEffect(() => {
    dispatch(fetchDailyData());
  }, [dispatch]);

  const countryData = {
    labels: ["Infected", "Deaths"],
    datasets: [
      {
        label: " Count",
        data: [covidData.confirmed.value, covidData.deaths.value],
        borderColor: "orange",
        backgroundColor: ["cyan", "blue"],
      },
    ],
  };

  let dateLabels = [];
  let totalInfected = [];
  let totalDeaths = [];

  if (dailyData !== "") {
    dateLabels = dailyData.map((item) => item.reportDate);
    totalInfected = dailyData.map((item) => item.totalConfirmed);
    totalDeaths = dailyData.map((item) => item.deaths.total);
  }

  const globalData = {
    labels: dateLabels,
    datasets: [
      {
        label: " Total Infected",
        data: totalInfected,
        borderColor: "cyan",
        backgroundColor: "transparent",
        pointBorderColor: "transparent",
        pointBorderWidth: 0,
        tension: 0.5,
      },
      {
        label: " Total Deaths",
        data: totalDeaths,
        borderColor: "blue",
        backgroundColor: "transparent",
        pointBorderColor: "transparent",
        pointBorderWidth: 0,
        tension: 0.5,
      },
    ],
  };

  return (
    <>
      {country === "Global" ? (
        <Line options={options} data={globalData} />
      ) : (
        <Bar options={options} data={countryData} />
      )}
    </>
  );
}

export default Graph;
