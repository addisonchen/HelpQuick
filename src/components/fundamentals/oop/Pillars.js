import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Pillars() {
    return (
        <div>
            <Container>
                <Row>
                    <h2 className="tabHeading">4 Pillars of OOP</h2>
                </Row>
                <Row>
                    <Col md={6}>
                        <h3 className="pageHeading">Abstraction</h3>
                        <ul>
                            <li>Uses simple, high level classes to <span className="underline">hide complexity</span></li>
                            <li>Represent features without details or explanation</li>
                            <li>Generic function/object to serve multiple needs</li>
                        </ul>
                        <h3 className="pageHeading">Inheritance</h3>
                        <ul>
                            <li>Subclasses <span className="underline">copy and extend</span> properties of a parent class</li>
                            <li>Parent class is specific</li>
                            <li>Child class is specific</li>
                            <li>Allows code to be resusable</li>
                        </ul>
                    </Col>
                    <Col md={6}>
                        <h3 className="pageHeading">Polymorphism</h3>
                        <ul>
                            <li>Child class overrides or overloades parent method</li>
                            <li><span className="underline">Overriding</span>: Child has behavior different to parent</li>
                            <li><span className="underline">Overloading</span>: Different behavior based on number of parameters</li>
                        </ul>
                        <h3 className="pageHeading">Encapsulation</h3>
                        <ul>
                            <li>Classes only reveal specific information</li>
                            <li><span className="underline">Private</span> fields and methods are hidden from outside</li>
                            <li>Provides security</li>
                            <li>Hides complexity</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
