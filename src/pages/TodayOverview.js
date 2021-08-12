import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { faCashRegister, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Button } from "@themesberg/react-bootstrap";
import {
  CounterWidget,
  SalesValueWidget,
  SalesValueWidgetPhone,
} from "../components/Widgets";

import { loginAPI } from "../services/login/actions";
import { setLocationInfoInStoreAPI } from "../services/location/actions"
import axios from "axios";
import { format } from "date-fns";
import { fetchChartData } from "../data/charts";

const TodayComponent = (props) => {
  const [presentCount, setPresentCount] = useState(0);
  const [lastChange, setLastChange] = useState(format(new Date(), "hh:mm:ss"));
  const [totalCount, setTotalCount] = useState(0);
  const [graphData, setGraphData] = useState({});
  const [occupancy, setOccupancy] = useState(0);
  

  async function getPresentVisitorsAPI(opening_datetime, closing_datetime) {
    await axios
      .get("/getPresentVisitors", {
        params: {
          opening_datetime: opening_datetime,
          closing_datetime: closing_datetime,
        },
      })
      .then((response) => {
        setPresentCount(response.data.count);
      })
      .catch((err) => {
        console.log(
          "[TodayOverview.js] getPresentVisitorsAPI || Could not fetch data. Try again later."
        );
      });
  }

  async function getLastVisitorsChangeAPI(opening_datetime, closing_datetime) {
    await axios
      .get("/getLastVisitorsChange", {
        params: {
          opening_datetime: opening_datetime,
          closing_datetime: closing_datetime,
        },
      })
      .then((response) => {
        let date = new Date(response.data.timestamp).toLocaleString();
        setLastChange(date);
      })
      .catch((err) => {
        console.log(
          "[TodayOverview.js] getLastVisitorsChangeAPI || Could not fetch data. Try again later."
        );
      });
  }

  async function getTotalVisitorsAPI(opening_datetime, closing_datetime) {
    await axios
      .get("/getTotalVisitors", {
        params: {
          opening_datetime: opening_datetime,
          closing_datetime: closing_datetime,
        },
      })
      .then((response) => {
        setTotalCount(response.data.count);
      })
      .catch((err) => {
        console.log(
          "[TodayOverview.js] getTotalVisitorsAPI || Could not fetch data. Try again later."
        );
      });
  }

  async function getCurrentOccupancyPercentageAPI() {
    await axios
      .get("/currentOccupancyPercentage")
      .then((response) => {
        setOccupancy(response.data)
      })
      .catch((err) => {
        console.log(
          "[TodayOverview.js] getCurrentOccupancyPercentageAPI || Could not fetch data. Try again later."
        );
      });
  }

  useEffect(() => {
    if(props.openingTime && props.closingTime){
      var open = format(new Date(), "Y-MM-dd") + " " + props.openingTime 
      var close = new Date()
      close = format(close.setDate(close.getDate()+1), "Y-MM-dd") + " " + props.closingTime // TODO: add logic when club closes before midnight
      
      fetchChartData(open, close).then(
        (data) => {
          setGraphData(data);
        }
      );
      getPresentVisitorsAPI(open, close);
      getLastVisitorsChangeAPI(open, close);
      getTotalVisitorsAPI(open, close);
      getCurrentOccupancyPercentageAPI();
      
      const interval = setInterval(() => {
        
        getPresentVisitorsAPI(open, close);
        getLastVisitorsChangeAPI(open, close);
        getTotalVisitorsAPI(open, close);
        getCurrentOccupancyPercentageAPI()
        fetchChartData(open, close).then(
          (data) => {
            setGraphData(data);
          }
        );
      }, 10000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <h4>Today</h4>
          <p className="mb-0">This page shows insights about today.</p>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Button variant="outline-primary" size="sm">
          Export
          </Button>
        </div>
      </div>
      <Row className="justify-content-md-center">
        <Col xs={12} className="mb-4 d-none d-sm-block">
          <SalesValueWidget
            title="Visitors over time"
            data={graphData}
            percentage={10.57}
            period={lastChange}
          />
        </Col>
        <Col xs={12} className="mb-4 d-sm-none">
          <SalesValueWidgetPhone
            title="Visitors over time"
            data={graphData}
            percentage={10.57}
            period={lastChange}
          />
        </Col>
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Current Visitors"
            title={presentCount}
            period={lastChange}
            percentage={18.2}
            icon={faChartLine}
            iconColor="shape-secondary"
            comparison="compared to average"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Occupancy"
            title={
              occupancy + "%"
            }
            period={lastChange}
            percentage={28.4}
            icon={faCashRegister}
            iconColor="shape-tertiary"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Total Visitors"
            title={totalCount}
            period={lastChange}
            percentage={28.4}
            icon={faCashRegister}
            iconColor="shape-tertiary"
          />
        </Col>
      </Row>
    </>
  );
};

function mapStateToProps(state) {
  return {
    userInfo : state.user.user_info,
    openingTime : state.location.location_info.opening_time,
    closingTime : state.location.location_info.closing_time
  };
}

export default connect(mapStateToProps, {
  loginAPI,setLocationInfoInStoreAPI
})(TodayComponent);
