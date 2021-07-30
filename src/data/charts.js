import {
  faDesktop,
  faMobileAlt,
  faTabletAlt,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const trafficShares = [
  { id: 1, label: "Desktop", value: 60, color: "secondary", icon: faDesktop },
  {
    id: 2,
    label: "Mobile Web",
    value: 30,
    color: "primary",
    icon: faMobileAlt,
  },
  {
    id: 3,
    label: "Tablet Web",
    value: 10,
    color: "tertiary",
    icon: faTabletAlt,
  },
];

const totalOrders = [
  { id: 1, label: "July", value: [1, 5, 2, 5, 4, 3], color: "primary" },
  { id: 2, label: "August", value: [2, 3, 4, 8, 1, 2], color: "secondary" },
];

export { trafficShares, totalOrders };

export function fetchChartData(opening_datetime, closing_datetime) {
  //TODO: specify which graph
  return axios
    .get("/presentVisitorsAtChange", {
      params: {
        opening_datetime: opening_datetime,
        closing_datetime: closing_datetime,
      },
    })
    .then((response) => {
      var labels = response.data.map((x) =>
        new Date(x.timestamp).toLocaleTimeString()
      );
      var series = response.data.map((x) => x.visitors_present);
      const data = {
        labels: labels,
        series: [series],

        // series: [{ meta: "labels", value: series }], // add meta data to present in the tooltip: find a way how to map over the values and pr
      };
      return data;
    })
    .catch((err) => {
      console.log(
        "[statistics.actions.js] getPresentVisitorsAtChangeAPI || Could not fetch the data. Try again later."
      );
    });
}
