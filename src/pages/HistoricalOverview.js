import React from "react";
import { connect } from "react-redux";
import {
  Col,
  Row,
  Button,
  ButtonGroup,
  Dropdown,
} from "@themesberg/react-bootstrap";
import {
  SalesValueWidgetPhone,ProgressTrackWidget
} from "../components/Widgets";
import VisitorsPerDay from "../components/VisitorsPerDay";
import AverageVisitorsPerDay from "../components/charts/AverageVisitorsPerDay";
import Top5BusiestDays from "../components/charts/Top5BusiestDays";

const HistoryComponent = (props) => {
  const graphData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    series: [[1, 2, 2, 3, 3, 4, 3]],
  };
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <h4>Historical Analysis</h4>
          <p className="mb-0">
            This page shows insights about the data of the past.
          </p>
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

      <Row>
        <Col xs={12} className="mb-4 d-none d-sm-block">
          <VisitorsPerDay
            title="Visitors over time"
            datePicker={true}
          />
        </Col>
        <Col xs={12} className="mb-4 d-sm-none">
          <SalesValueWidgetPhone
            title="Visitors over time"
            value="10,567"
            percentage={10.57}
            data={graphData} // TODO
          />
        </Col>
      </Row>

      <Dropdown.Divider className="my-3 border-indigo" />

      {/* <Row>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Best Day"
            title="345k"
            period="Feb 1 - Apr 1"
            percentage={18.2}
            icon={faChartLine}
            iconColor="shape-secondary"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Revenue"
            title="$43,594"
            period="Feb 1 - Apr 1"
            percentage={28.4}
            icon={faCashRegister}
            iconColor="shape-tertiary"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CircleChartWidget title="Traffic Share" data={trafficShares} />
        </Col>
      </Row> */}
      <Row>
      <Col xs={12} className="mb-4 d-none d-sm-block" >
          <AverageVisitorsPerDay
            title="Average number of visitors per day of the week"
            // data={graphData}
          />
      </Col>
      <Col xs={12} className="mb-4 d-none d-sm-block" >
      <Top5BusiestDays />
      </Col>
      </Row>
      
    </>
  );
};
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(HistoryComponent);
