import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

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
                                {/*
                                <div className="linkContainer right">
                                    <a href="/Python" className="homeLink">
                                        <h3 className="linkText">Javascript</h3>
                                    </a>
                                </div>*/}
                            </Col>
                            <Col span={6} style={{padding: "0px"}}>
                                <div className="linkContainer right">
                                    <Link to='/python' className="homeLink">
                                        <h3 className="linkText">Python</h3>
                                    </Link>
                                </div>
                                {/*
                                <div className="linkContainer right">
                                    <a href="/Python" className="homeLink">
                                        <h3 className="linkText">Swift</h3>
                                    </a>
                                </div>*/}

                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <Row className="ninetyRow">
                            <Col span={6} style={{height: "100%", padding: "0px"}}>
                                {/*<div className="linkContainer left">
                                    <a href="/Web" className="homeLink">
                                        <h3 className="linkText">Web</h3>
                                    </a>
                                </div>*/}
                                <div className="linkContainer left empty">
                                </div>
                                <div className="linkContainer left">
                                    <Link to='/algorithms' className="homeLink">
                                        <h3 className="linkText">Algorithms</h3>
                                    </Link>
                                </div>
                            </Col>
                            <Col span={6} style={{padding: "0px"}}>
                                <div className="linkContainer left empty">
                                </div>
                                <div className="linkContainer left">
                                    <Link to='/OOP' className="homeLink">
                                        <h3 className="linkText">OOP</h3>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                        <Row className="tenRow bottom" style={{position: "absolute", bottom: "0px", overflow: "visible"}}>
                            <h2 className="categoryHeader left">Fundamentals</h2>
                        </Row>
                    </Col>
                    <Col span={6} style={{padding: "0px"}}>
                        <h1 className="subTitle">Coding Reference <span className="light">2021</span>Guide</h1>
                    </Col>
                </Row>
                <Row>
                    <div style={{height: "100px"}}></div>
                </Row>
                <hr></hr>
                <Row>
                    <div style={{height: "100px"}}></div>
                </Row>
                <Row>
                    <Col xs={4}>
                        <div className="smallTitleOuterContainer">
                            <div className="smallTitleContainer">
                                <h4 className="smallTitle">So you...</h4>
                            </div>
                        </div>
                    </Col>
                    <Col xs={8}>
                        <div className="aboutContainer">
                            <p className="aboutFont">😱 Are freaking out before a technical interview?</p>
                            <p className="aboutFont">🤷‍♂️ Forgot how to create a list in a language you used years ago?</p>
                            <p className="aboutFont">🤔 Want to implement a common algorithm in your project?</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div style={{height: "100px"}}></div>
                </Row>
                <Row>
                    <Col xs={8}>
                        <div className="aboutContainer left">
                            <p className="aboutFont left">Overviews of different cs fundamentals ✅</p>
                            <p className="aboutFont left">Syntax basics for common languages ✅</p>
                            <p className="aboutFont left">Common methods for different data types ✅</p>
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div className="smallTitleOuterContainer right">
                            <div className="smallTitleContainer">
                                <h4 className="smallTitle">We got you!</h4>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div style={{height: "100px"}}></div>
                </Row>
                <hr></hr>
                <Row>
                    <div style={{height: "100px"}}></div>
                </Row>
                <Row>
                    <div className="aboutUsOuterContainer">
                        <div className="aboutUsContainer">
                            <h2 className="tabHeading">Who We Are</h2>
                            <div style={{height: "50px"}}></div>
                            <h3 className="pageHeading">Our Goal</h3>
                            <p className="textCenter">We want to provide developers with a resource to answer quick, simple questions related to current technologies and design patterns. Sometimes turning to StackOverflow is overkill and finding brief overviews on important topics is hard!</p>
                            <div style={{height: "25px"}}></div>
                            <h3 className="pageHeading">Students for Students</h3>
                            <p className="textCenter">The quick coding reference guide was developed for students, by students.</p>
                            <div style={{height: "25px"}}></div>
                            <h3 className="pageHeading">Human Developers</h3>
                            <p className="textCenter">We have all hit road blocks in projects and interviews, we started this project because we need it too!</p>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div style={{height: "200px"}}></div>
                </Row>
            </Container>
        </div>
    )
}
