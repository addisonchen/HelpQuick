import React from 'react';
import { Container, Row, Col, Tab, Nav} from 'react-bootstrap';

export default function Graphs() {
    return (
        <div>
            <Container>
                <Row>
                    <h2 className="tabHeading">Graph Algorithms</h2>
                </Row>
                <Tab.Container defaultActiveKey="bfs">
                    <Row>
                        <Col md={3} lg={2}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link className="customPill" eventKey="bfs">BFS</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="customPill" eventKey="dfs">DFS</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="customPill" eventKey="dijkstra">Dijkstra</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="customPill" eventKey="kruskal">Kruskal</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col md={9} lg={10}>
                            <Tab.Content>
                                <Tab.Pane eventKey="bfs">
                                    hi
                                </Tab.Pane>
                                <Tab.Pane eventKey="dfs">
                                    hey
                                </Tab.Pane>
                                <Tab.Pane eventKey="dijkstra">
                                    hey
                                </Tab.Pane>
                                <Tab.Pane eventKey="kruskal">
                                    hey
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    )
}
