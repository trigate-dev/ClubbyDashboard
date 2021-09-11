import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp
} from "@fortawesome/free-solid-svg-icons";
import {
  Card
} from "@themesberg/react-bootstrap";
import {
    BarChart
  } from "./Charts";
import { fetchBarChartData } from "../services/data/actions";


export const BarChartWidget = (props) => {
    const { title, data = [] } = props;
    const [graphData, setGraphData] = useState(null) 
    
    useEffect(() => {
        fetchBarChartData().then(
          (data) => {
            setGraphData(data);
          }
        );
      }, []);
  
    return (
      <Card border="light" className="shadow-sm" >
        <Card.Body className="d-flex flex-row align-items-center flex-0 border-bottom">
          <div className="d-block">
            <h5 className="fw-normal mb-2">{title}</h5>
          </div>
          <div className="d-block ms-auto">
            {data.map((d) => (
              <div
                key={`bar-element-${d.id}`}
                className="d-flex align-items-center text-end mb-2"
              >
                <span className={`shape-xs rounded-circle bg-${d.color} me-2`} />
                <small className="fw-normal">{d.label}</small>
              </div>
            ))}
          </div>
        </Card.Body>
        {console.log('ola')}
        {graphData ? <Card.Body className="p-2" style={{height: 300}}> 
        {/* fix height */}
          <BarChart data={graphData} />
        </Card.Body> : null }
        
      </Card>
    );
  };

  export default BarChartWidget