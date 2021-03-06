import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Overview() {

    let helloWorld = `# This is an inline comment
print('Hello World!')`;

    let ifSample = ` # boolean operators: and, or, not, ==, !=, >, <
if(x):
   this line is tabbed over
elif(y):
    python defines blocks with tabs
else:
    blocks start with a ":"`;

    let whileSample = `while x:
    do this until x is False`;

    let forSample = `for idx, num in enumerate([1, 2, 3]):
    print('idx is: ' + str(idx) + " num is: " + str(num))`;

    return (
        <div>
            <Container>
                <Row>
                    <h2 className="tabHeading">Overview of Python</h2>
                </Row>
                <Row>
                    <Col md={6}>
                        <h3 className="pageHeading">
                            Background:
                        </h3>
                        <p>
                            Python is characterized by it's simple syntax. It is easy to learn and can make application development quick. It is popular as a support language for build control, management, and testing as well as for data modelling and analytics
                        </p>
                        <h3 className="pageHeading">
                            Basic Syntax:
                        </h3>
                        <Row>
                            <pre className="codeSample">
                                <code>{helloWorld}</code>
                            </pre>
                        </Row>
                        <Row>
                            <pre className="codeSample">
                                <code>{ifSample}</code>
                            </pre>
                        </Row>
                        <Row>
                            <pre className="codeSample">
                                <code>{whileSample}</code>
                            </pre>
                        </Row>
                        <Row>
                            <pre className="codeSample">
                                <code>{forSample}</code>
                            </pre>
                        </Row>
                    </Col>

                    <Col md={6}>
                        <h3 className="pageHeading">Attributes:</h3>
                        <ul>
                            <li>
                                Dynamically typed
                            </li>
                            <li>
                                Strongly typed
                            </li>
                            <li>
                                Interpreted
                            </li>
                            <li>
                                Object-Oriented
                            </li>
                        </ul>
                        <h3 className="pageHeading">Data Types:</h3>
                        <ul>
                            <li>
                                String: str
                            </li>
                            <li>
                                Number: int, float, complex
                            </li>
                            <li>
                                Sequence: list, tuple, range
                            </li>
                            <li>
                                Mapping: dict
                            </li>
                            <li>
                                Boolean: bool
                            </li>
                            <li>
                                Binary: bytes, bytearray, memoryview
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
