import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Solid() {
    return (
        <div>
            <Container>
                <Row>
                    <h2 className="tabHeading">The S.O.L.I.D. Principles</h2>
                </Row>
                <Row>
                    <Col md={6}>
                        <h3 className="pageHeading">Single Responsibility</h3>
                        <ul>
                            <li>A class should <span className="underline">do one thing</span></li>
                            <li>They should only have one reason to change</li>
                            <li>Keeps modules compatible even after changes</li>
                        </ul>
                        <h3 className="pageHeading">Open - Closed</h3>
                        <ul>
                            <li>Open for extension</li>
                            <li><span className="underline">Closed to modification</span></li>
                            <li>Add new functionality without changing existing code</li>
                        </ul>
                        <h3 className="pageHeading">Liskov Substitution</h3>
                        <ul>
                            <li>Subclasses should be <span className="underline">substitutable for their parent class</span></li>
                        </ul>
                    </Col>
                    <Col md={6}>
                        <h3 className="pageHeading">Interface Segregation</h3>
                        <ul>
                            <li><span className="underline">More interfaces with specific use cases are better</span> than one generic interface</li>
                        </ul>
                        <h3 className="pageHeading">Dependency Inversion</h3>
                        <ul>
                            <li><span className="underline">Depend on interfaces</span> or abstract classes not defined/concrete classes</li> 
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div style={{height: '100px'}}></div>
        </div>
    )
}
