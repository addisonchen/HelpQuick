import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
    return (
        <div className="homeContainer">
            <Container fluid>
                <Row>
                    <Col span={6}>
                        <Row>
                            <h1 className="title">Help, Quick!</h1>
                        </Row>
                    </Col>
                    <Col span={6}>
                        <Row className="tenRow">
                            <h2 className="categoryHeader right">Languages</h2>
                        </Row>
                        <Row className="ninetyRow">
                            <Col span={6} style={{height: "100%", padding: "0px"}}>
                                <div className="linkContainer right">
                                    <a href="/Python" className="homeLink">
                                        <h3 className="linkText">Python</h3>
                                    </a>
                                </div>
                            </Col>
                            <Col span={6} style={{padding: "0px"}}>
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
                    <Col span={6}>
                        <Row className="ninetyRow">
                            <Col span={6} style={{height: "100%", padding: "0px"}}>
                                <div className="linkContainer left">
                                    <a href="/OOP" className="homeLink">
                                        <h3 className="linkText">Database</h3>
                                    </a>
                                </div>
                                <div className="linkContainer left">
                                    <a href="/algorithms" className="homeLink">
                                        <h3 className="linkText">Algorithms</h3>
                                    </a>
                                </div>
                            </Col>
                            <Col span={6} style={{padding: "0px"}}>
                                <div className="linkContainer left empty">
                                </div>
                                <div className="linkContainer left">
                                    <a href="/OOP" className="homeLink">
                                        <h3 className="linkText">OOP</h3>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                        <Row class="tenRow bottom" style={{position: "absolute", bottom: "0px", overflow: "visible"}}>
                            <h2 className="categoryHeader left">Fundamentals</h2>
                        </Row>
                    </Col>
                    <Col span={6} style={{padding: "0px"}}>
                        <h1 className="subTitle">Coding Reference Guide</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
