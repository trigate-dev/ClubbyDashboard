import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCashRegister,
  faChartLine,
  faCloudUploadAlt,
  faPlus,
  faRocket,
  faTasks,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Button,
  Dropdown,
  ButtonGroup,
} from "@themesberg/react-bootstrap";
import {
  CounterWidget,
  CircleChartWidget,
  BarChartWidget,
  TeamMembersWidget,
  ProgressTrackWidget,
  RankingWidget,
  SalesValueWidget,
  SalesValueWidgetPhone,
  AcquisitionWidget,
} from "../components/Widgets";
import { PageVisitsTable } from "../components/Tables";
import { trafficShares, totalOrders } from "../data/charts";
import { loginAPI } from "../services/login/actions";
import axios from "axios";
import { format } from "date-fns";
import { fetchChartData } from "../data/charts";

const TodayComponent = (props) => {
  const [presentCount, setPresentCount] = useState(0);
  const [lastChange, setLastChange] = useState(format(new Date(), "hh:mm:ss"));
  const [totalCount, setTotalCount] = useState(0);
  const [graphData, setGraphData] = useState({});

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

  useEffect(() => {
    fetchChartData("2021-07-23 10:00:00", "2021-07-24 23:00:00").then(
      (data) => {
        setGraphData(data);
      }
    );
    getPresentVisitorsAPI("2021-07-23 10:00:00", "2021-07-24 23:00:00");
    getLastVisitorsChangeAPI("2021-07-23 10:00:00", "2021-07-24 23:00:00");
    getTotalVisitorsAPI("2021-07-23 10:00:00", "2021-07-24 23:00:00");
    const interval = setInterval(() => {
      getPresentVisitorsAPI("2021-07-23 10:00:00", "2021-07-24 23:00:00");
      getLastVisitorsChangeAPI("2021-07-23 10:00:00", "2021-07-24 23:00:00");
      getTotalVisitorsAPI("2021-07-23 10:00:00", "2021-07-24 23:00:00");
      fetchChartData("2021-07-23 10:00:00", "2021-07-24 23:00:00").then(
        (data) => {
          setGraphData(data);
        }
      );
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <h4>Today</h4>
          <p className="mb-0">This page shows insights about today.</p>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          <ButtonGroup>
            <Button variant="outline-primary" size="sm">
              Share
            </Button>
            <Button variant="outline-primary" size="sm">
              Export
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <Row className="justify-content-md-center">
        <Col xs={12} className="mb-4 d-none d-sm-block">
          <SalesValueWidget
            title="Total Visitors"
            data={graphData}
            percentage={10.57}
            period={lastChange}
          />
        </Col>
        <Col xs={12} className="mb-4 d-sm-none">
          <SalesValueWidgetPhone
            title="Sales Value"
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
            category="Total Visitors"
            title={totalCount}
            period={lastChange}
            percentage={28.4}
            icon={faCashRegister}
            iconColor="shape-tertiary"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CircleChartWidget title="Traffic Share" data={trafficShares} />
        </Col>
      </Row>

      <Row>
        <Col xs={12} xl={4}>
          <Row>
            <Col xs={12} className="mb-4">
              <BarChartWidget
                title="Total orders"
                value={452}
                percentage={18.2}
                data={totalOrders}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {
  loginAPI,
})(TodayComponent);
