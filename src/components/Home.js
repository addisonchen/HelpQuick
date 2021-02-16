import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
    return (
        <div className="homeContainer">
            <Container fluid>
                <Row>
                    <Col>
                        <Row>
                            <h1 className="title">Help, Quick!</h1>
                        </Row>
                    </Col>
                    <Col>
                        <Row className="tenRow">
                            <h2 className="categoryHeader right">Languages</h2>
                        </Row>
                        <Row className="ninetyRow">
                            <Col style={{height: "100%", padding: "0px"}}>
                                <div className="linkContainer right">
                                    <a href="/Python" className="homeLink">
                                        <h3 className="linkText">Python</h3>
                                    </a>
                                </div>
                            </Col>
                            <Col style={{padding: "0px"}}>
                                <div className="linkContainer right">
                                    <a href="/Python" className="homeLink">
                                        <h3 className="linkText">JavaScript</h3>
                                    </a>
                                </div>
                                <div class="linkContainer right">
                                    <a href="/Python" className="homeLink">
                                        <h3 className="linkText">Swift</h3>
                                    </a>
                                </div>

                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1 className="subTitle">Coding Reference Guide</h1>
                    </Col>
                    <Col>
                        <Row class="tenRow">
                            <h2 className="categoryHeader right">Fundamentals</h2>
                        </Row>
                        <Row className="ninetyRow">
                            <Col style={{height: "100%", padding: "0px"}}>
                                <div className="linkContainer right">
                                    <a href="/Python" className="homeLink">
                                        <h3 className="linkText">Algorithms</h3>
                                    </a>
                                </div>

                            </Col>
                            <Col style={{padding: "0px"}}>
                                <div className="linkContainer right">
                                    <a href="/Python" className="homeLink">
                                        <h3 className="linkText">OOP</h3>
                                    </a>
                                </div>

                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
