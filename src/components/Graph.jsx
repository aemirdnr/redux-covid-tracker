import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const options = {
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

const data = {
  labels,
  datasets: [
    {
      label: "Infected",
      data: [55, 65, 44, 51, 46, 61, 59],
      borderColor: "orange",
      backgroundColor: "transparent",
      pointBorderColor: "transparent",
      pointBorderWidth: 4,
      tension: 0.5,
    },
    {
      label: "Deaths",
      data: [12, 11, 8, 13, 9, 9, 7],
      borderColor: "red",
      backgroundColor: "transparent",
      pointBorderColor: "transparent",
      pointBorderWidth: 4,
      tension: 0.5,
    },
  ],
};

function Graph() {
  return (
    <>
      <Line options={options} data={data} />
    </>
  );
}

export default Graph;
