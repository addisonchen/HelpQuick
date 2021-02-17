import React from 'react';
import { Container, Row, Tabs, Tab } from 'react-bootstrap';

import Graphs from './algorithms/Graphs'

export default function Algorithms() {
    return (
        <div className="pageContainer">
            <div className="innerPageContainer">
                <Container fluid>
                    <Row>
                        <h3 className="pageSubtitle">Fundamentals</h3>
                        
                    </Row>
                    <Row>
                        <h1 className="pageTitle">Algorithms</h1>
                    </Row>
                    <Row>
                        <div className="rowPadder"></div>
                    </Row>
                    <Row>
                        <Tabs fill>
                            <Tab eventKey="graphs" title="Graphs">
                                <div className="tabContainer">
                                    <Graphs />
                                </div>
                            </Tab>
                            <Tab eventKey="linkedlists" title="Linked Lists">
                                <div className="tabContainer">
                                </div>   
                            </Tab>
                            <Tab eventKey="dynamicprogramming" title="Dynamic Programming">
                                <div className="tabContainer">
                                </div>
                            </Tab>
                            <Tab eventKey="sorting" title="Sorting">
                                <div className="tabContainer">
                                </div>
                            </Tab>
                            <Tab eventKey="searching" title="Searching">
                                <div className="tabContainer">
                                </div>
                            </Tab>
                            <Tab eventKey="trees" title="Trees">
                                <div className="tabContainer">
                                </div>
                            </Tab>
                        </Tabs>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
