import React, { useState, useEffect } from "react";
import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  LineSeries,
  Crosshair
} from "react-vis";
import { Row, Col } from "react-bootstrap";

export default function ResponsivePlot(props) {
  const color = props.color ? props.color : "darkcyan";
  const [windowSize, setWindowSize] = useState(getWindowDimensions());
  const [crosshairData, setCrosshairData] = useState({ x: 0, y: 0 });
  const [mouseOver, setMouseOver] = useState(false);
  const modes = ["noWobble", "gentle", "wobbly", "stiff"];

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  useEffect(() => {
    const handleResize = () => setWindowSize(getWindowDimensions());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Col
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: "5px"
      }}
    >
      <p>{props.title}</p>
      <XYPlot
        height={windowSize.height * props.height}
        width={windowSize.width * props.width}
        animation={modes[0]}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries
          data={props.data}
          color={color}
          onNearestX={(value, event) => {
            setCrosshairData({ x: value.x, y: value.y.toFixed(3) });
            console.log(value);
          }}
          onSeriesMouseOver={() => {
            setMouseOver(true);
          }}
          onSeriesMouseOut={() => {
            setMouseOver(false);
          }}
        />
        {mouseOver && (
          <Crosshair values={[crosshairData]}>
            <div
              style={{
                backgroundColor: "rgba(0,0,25,0.75)",
                padding: "5px",
                borderRadius: "3px",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <div>
                DataName:{crosshairData.y} Time:{crosshairData.x}
              </div>
            </div>
          </Crosshair>
        )}
      </XYPlot>
    </Col>
  );
}
