import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import basicUML from './basicUML.png';

export default function Overview() {
    return (
        <div>
            <Container>
                <Row>
                    <h2 className="tabHeading">Overview of OOP</h2>
                </Row>
                <Row>
                    <Col md={6}>
                        <h3 className="pageHeading">
                            What is OOP?
                        </h3>
                        <p>
                            Object Oriented Programming uses <span className="underline">structs and classes to organize code</span> in a way that is easy to simple, reusable, easy to manage, and easy to test.
                        </p>
                        <p>
                            Structs and classes provide an <span className="underline">outline for objects</span>. Objects define the specifc details and values.
                        </p>
                        <p>
                            Classes can define <span className="underline">methods</span> that provide functionality related to the data the class represents. 
                        </p>
                        <p>
                            Objects instantiated from classes remember specified values (fields), and can utilize the methods defined in the class.
                        </p>
                        <div style={{height: "50px"}}></div>
                        <h3 className="pageHeading">
                            Basic UML
                        </h3>
                        <img src={basicUML} alt="a basic UML diagram" style={{width: "100%"}} />
                    </Col>

                    <Col md={6}>
                        <h3 className="pageHeading">Pros:</h3>
                        <ul>
                            <li>
                                Simple structure, easy to understand large projects
                            </li>
                            <li>
                                Classes allow code to be reused (even across projects)
                            </li>
                            <li>
                                Easier to debug as classes contain code related to them
                            </li>
                            <li>
                                Secure! Classes protect private information
                            </li>
                        </ul>
                        <h3 className="pageHeading">Cons:</h3>
                        <ul>
                            <li>
                                Requires proper knowledge
                            </li>
                            <li>
                                Requires additional planning
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
