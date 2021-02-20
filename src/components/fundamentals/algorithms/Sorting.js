import React from 'react';
import { Container, Row, Col, Tab, Nav} from 'react-bootstrap';

import bfs from './bfs.png';
import dfs from './dfs.png';

export default function Sorting() {
    return (
        <div>
            <Container>
                <Row>
                    <h2 className="tabHeading">Graph Algorithms</h2>
                </Row>
                <Tab.Container defaultActiveKey="heap">
                    <Row>
                        <Col md={3} lg={2}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link className="customPill" eventKey="heap">Heap Sort</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="customPill" eventKey="dfs">DFS</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col md={9} lg={10}>
                            <Tab.Content>
                                <Tab.Pane eventKey="heap">
                                    <Row>
                                        <Col lg={7}>
                                            <img src={bfs} alt="BFS on a tree" style={{width: "100%"}} />
                                        </Col>
                                        <Col lg={5}>
                                            <h3 className="pageHeading">Heap Sort</h3>
                                            <p>BFS goes through a graph layer by layer, checking nodes of equal distance from the root node before moving to the next layer</p>
                                            <h3 className="pageHeading">Algorithm:</h3>
                                            <ul>
                                                <li>Start a queue with the root node</li>
                                                <li>While the queue is not empty:</li>
                                                <ul>
                                                    <li>Pop the element off the queue</li>
                                                    <li>Add the child elements to the queue</li>
                                                </ul>
                                            </ul>
                                            <h3 className="pageHeading">Example:</h3>
                                            <p>In the graph shown, BFS will reach nodes in this order:</p>
                                            <ul>
                                                <li>5, 3, 7, 1, 4, 8</li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="dfs">
                                    <Row>
                                        <Col lg={7}>
                                            <img src={dfs} alt="DFS on a tree" style={{width: "100%"}} />
                                        </Col>
                                        <Col lg={5}>
                                            <h3 className="pageHeading">Depth First Search</h3>
                                            <p>DFS goes as deep as possible through the first child before moving on to the next child</p>
                                            <h3 className="pageHeading">Algorithm:</h3>
                                            <ul>
                                                <li>Start a stack with the root node</li>
                                                <li>While the stack is not empty:</li>
                                                <ul>
                                                    <li>Pop the element off the stack</li>
                                                    <li>Add the child elements to the stack</li>
                                                </ul>
                                            </ul>
                                            <h3 className="pageHeading">Example:</h3>
                                            <p>In the graph shown, DFS will reach nodes in this order:</p>
                                            <ul>
                                                <li>5, 3, 1, 4, 7, 8</li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    )
}
