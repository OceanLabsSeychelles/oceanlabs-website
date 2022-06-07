import React, {useContext} from 'react';
import {Row, Col, Button} from "react-bootstrap";
import ReactJson from 'react-json-view'
import {RestDbContext} from "../context/RestDbProvider";
import Styles from "../components/Styles"

export default function DataViewer() {
    const dbData = useContext(RestDbContext);
    return (
        <Col>
            <Col style={{height: '80vh', overflowY: 'scroll'}}>
                <ReactJson
                    style={{margin: '1rem'}}
                    src={dbData.data}
                    displayDataTypes={false}
                />
            </Col>
            <Row style={Styles.BootstrapCenter}>
                <Col style={{...Styles.BootstrapCenter, margin: "1rem"}}>
                    <Button
                        style={{margin: "0.5em", width: "75%"}}
                        onClick={dbData.update}
                    >
                        Reload
                    </Button></Col>
            </Row>
        </Col>
    )
}