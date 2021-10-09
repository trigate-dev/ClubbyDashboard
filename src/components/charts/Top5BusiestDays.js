import React, { useState, useEffect } from "react";
import {
  Card
} from "@themesberg/react-bootstrap";
import {
    BarChart
  } from "../Charts";
import { fetchTop5DaysChartData } from "../../services/data/actions";
import {ProgressTrackWidget} from "../Widgets"

export const RankChartWidget = (props) => {
    const { title, data = [] } = props;
    const [graphData, setGraphData] = useState(null) 
    
    useEffect(() => {
        fetchTop5DaysChartData().then(
          (data) => {
            setGraphData(data);
          }
        );
      }, []);
    return (
     <Card border="light" className="shadow-sm" >
        
          <ProgressTrackWidget cardHeader={'Top 5 Busiest Days'} subHeader={'jajaja'} data={graphData}/>
        
      </Card>
    );
  };

  export default RankChartWidget