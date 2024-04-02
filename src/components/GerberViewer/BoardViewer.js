import React, { useState } from "react";
import PcbLayer from "./PcbLayer";
import defaultLayerStyles from "./DefaultLayerStyles";
import { Row, Col, Button } from "react-bootstrap";
import { MdVisibilityOff, MdVisibility } from 'react-icons/md';
import "bootstrap/dist/css/bootstrap.css";

const BoardViewer = ({svgList}) => {
    const [scale, setScale] = useState(1.8);
    const [dx, setDx] = useState(0);
    const [dy, setDy] = useState(0);
    const [layerStyles, setLayerStyles] = useState(defaultLayerStyles);
    const [dragging, setDragging] = useState(false);
    const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
    const [hoveredIndex, setHoveredIndex] = useState(null);


    const toggleVisibility = (index) => {
        const newLayerStyles = [...layerStyles];
        newLayerStyles[index].visible = !newLayerStyles[index].visible;
        setLayerStyles(newLayerStyles);
    };

    const changeOpacity = (index, opacity) => {
        const newLayerStyles = [...layerStyles];
        newLayerStyles[index].opacity = opacity;
        setLayerStyles(newLayerStyles);
    };

    const handleMouseDown = (e) => {
        setDragging(true);
        setLastPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = (e) => {
        if (dragging) {
            const dx = e.clientX - lastPos.x;
            const dy = e.clientY - lastPos.y;
            setDx((prevDx) => prevDx + dx);
            setDy((prevDy) => prevDy + dy);
            setLastPos({ x: e.clientX, y: e.clientY });
        }
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    const handleWheel = (e) => {
        e.preventDefault(); // Prevent default scrolling behavior
        const newScale = Math.max(0.1, scale + e.deltaY * -0.01); // Change the scale increment as you see fit
        setScale(newScale);
    };

    const handleTouchStart = (e) => {
        setDragging(true);
        setLastPos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    };

    const handleTouchMove = (e) => {
        if (dragging) {
            const dx = e.touches[0].clientX - lastPos.x;
            const dy = e.touches[0].clientY - lastPos.y;
            setDx((prevDx) => prevDx + dx);
            setDy((prevDy) => prevDy + dy);
            setLastPos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
        }
    };

    const handleTouchEnd = () => {
        setDragging(false);
    };

    const BoardLayers = () => {
        return layerStyles.map((layer, index) => {
            const path = svgList.find((filePath) => {
                return filePath.includes(layer.nameFragment)
            });
            console.log("found path :", path);
            return (
                <PcbLayer
                    key={index}
                    index={layer.index}
                    color={layer.color}
                    scale={scale}
                    opacity={0.5}
                    visible={layer.visible}
                    svgFilePath={path}
                    dx={dx}
                    dy={dy}
                />
            );
        });
    };

    return (
        <div
            style={{
                display: "flex",
                height: "100vh",
                width: "100wh"
            }}
            xs={12}
        >
            <Col xs={3} style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
                {layerStyles.map((layer, index) => (
                    <Row
                        style={{ padding: '0.25rem', width: '80%' }}
                        key={layer.nameFragment}
                    >
                        <Button
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            variant={layer.visible ? 'secondary' : 'outline-secondary'}
                            onClick={() => toggleVisibility(index)}
                            style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            {layer.visible ? (
                                <MdVisibility
                                    size={25}
                                    color={
                                        layer.visible || hoveredIndex === index
                                            ? 'white'
                                            : 'gray'
                                    }
                                />
                            ) : (
                                <MdVisibilityOff
                                    size={25}
                                    color={
                                        layer.visible || hoveredIndex === index
                                            ? 'white'
                                            : 'gray'
                                    }
                                />
                            )}
                            <p style={{paddingLeft:"1rem"}}>{layer.nameFragment}</p>
                        </Button>
                    </Row>
                ))}
            </Col>
            <Col
                xs={9}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onWheel={handleWheel}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    height: "100%",
                    width: "100%",
                    overflow: "hidden",
                }}
            >
                <BoardLayers />
            </Col>
        </div>
    );
};

export default BoardViewer;
