import React from 'react';
import { Container, Row, Tabs, Tab } from 'react-bootstrap';

import Overview from './swift/Overview';
import DataStructures from './swift/DataStructures';
import Classes from './swift/Classes';

export default function Swift() {
    return (
        <div className="pageContainer">
            <div className="innerPageContainer">
                <Container fluid>
                    <Row>
                        <h3 className="pageSubtitle">Languages</h3>

                    </Row>
                    <Row>
                        <h1 className="pageTitle">Swift</h1>
                    </Row>
                    <Row>
                        <div className="rowPadder"></div>
                    </Row>
                    <Row>
                        <Tabs fill>
                            <Tab eventKey="overview" title="Overview">
                                <div className="tabContainer">
                                    <Overview />
                                </div>
                            </Tab>
                            <Tab eventKey="dataStructures" title="Data Structures">
                                <div className="tabContainer">
                                    <DataStructures />
                                </div>   
                            </Tab>
                            <Tab eventKey="classes" title="Classes">
                                <div className="tabContainer">
                                    <Classes />
                                </div>
                            </Tab>
                        </Tabs>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
