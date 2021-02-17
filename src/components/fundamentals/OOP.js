import React from 'react';
import { Container, Row, Tabs, Tab } from 'react-bootstrap';

import Overview from './oop/Overview';
import Solid from './oop/Solid';
import Pillars from './oop/Pillars';

export default function OOP() {
    return (
        <div className="pageContainer">
            <div className="innerPageContainer">
                <Container fluid>
                    <Row>
                        <h3 className="pageSubtitle">Fundamentals</h3>

                    </Row>
                    <Row>
                        <h1 className="pageTitle">Object Oriented Programming</h1>
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
                            <Tab eventKey="pillars" title="4 Pillars">
                                <div className="tabContainer">
                                    <Pillars />
                                </div>   
                            </Tab>
                            <Tab eventKey="solid" title="S.O.L.I.D.">
                                <div className="tabContainer">
                                    <Solid />
                                </div>
                            </Tab>
                        </Tabs>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
