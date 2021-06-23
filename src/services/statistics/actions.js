import axios from "axios";

export async function getPresentVisitorsAPI (opening_datetime, closing_datetime) {
    await axios
      .get("/getPresentVisitors", { params: { 'opening_datetime': opening_datetime, 'closing_datetime': closing_datetime } })
      .then((response) => {
        return response

      }
    )
    .catch((err) => {
      console.log(
        "[login.actions.js] getPresentVisitorsAPI || Could not fetch data. Try again later."
      );
    });
}

