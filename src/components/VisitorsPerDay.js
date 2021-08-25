import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faChartArea,
  faChartBar,
  faChartLine,
  faFlagUsa,
  faFolderOpen,
  faGlobeEurope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faAngular,
  faBootstrap,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import {
  Col,
  Row,
  Card,
  Image,
  Form,
  Button,
  ListGroup,
  ProgressBar,
} from "@themesberg/react-bootstrap";
import {
  SalesValueChart,
} from "./Charts";
import { connect } from "react-redux";
import { loginAPI } from "../services/login/actions";
import { setLocationInfoInStoreAPI } from "../services/location/actions"
import DatePicker from "./DatePicker";
import { format } from "date-fns";
import { fetchChartData } from "../data/charts";

const VisitorsPerDay = (props) => {
  const { title, datePicker } = props;
  const [graphData, setGraphData] = useState(null)
  const [startDate, setStartDate] = useState(new Date())

  function handleStartDateChange(event) {
    console.log('in visitors earleir', event)
    setStartDate(event)
    
    var open = event
    open = format(open, "Y-MM-dd") + " " + props.openingTime 
    var close = event
    close = format(close.setDate(close.getDate()+1), "Y-MM-dd") + " " + props.closingTime // TODO: add logic when club closes before midnight
    console.log('in visitors', event)
    
    fetchChartData(open, close).then(
      (data) => {
        setGraphData(data);
      }
    ); 
    
  }
    
  console.log('start',startDate)
    
  return (
    <Card className="bg-secondary-alt shadow-sm">
      <Card.Header className="d-flex flex-row align-items-center flex-0">
        <div className="d-block">
          <h5 className="fw-normal mb-2">{title}</h5>
        </div>
        {datePicker ? (<div className="d-flex ms-auto">
        <DatePicker onStartDateChange={handleStartDateChange} startDate={startDate}/>
        </div> ): null}  

      </Card.Header>
      <Card.Body className="p-2">

        <SalesValueChart data={graphData} />
      </Card.Body>
    </Card>
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
})(VisitorsPerDay);
