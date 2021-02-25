import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Overview() {

    let helloWorld = `// This is an inline comment
print('Hello World!')`;

    let ifSample = `// boolean operators: &&, ||, !, ==, !=, >, <
if x < y {
    print("x is less than y")
} else if y > x {
    print("Wrap blocks in {}, but lines dont end with ;")
}
else {
    print("y == x")
}`;

    let whileSample = `while l < r {
    print("do this until l >= r")
}`;

    let forSample = `var nums = [1, 2, 3]
for (idx, num) in nums.enumerated() {
    print("idx is: \\(idx) num is: \\(num)")
}`;
    return (
        <div>
            <Container>
                <Row>
                    <h2 className="tabHeading">Overview of Swift</h2>
                </Row>
                <Row>
                    <Col md={6}>
                        <h3 className="pageHeading">
                            Background:
                        </h3>
                        <p>
                            Developed by Apple in 2014 (and now open-source), Swift was intended to replace Objective-C as the language used for iOS development. It was designed to promote safety and speed, while also being easier to use than C languages.
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
                                Statically typed
                            </li>
                            <li>
                                Strongly typed
                            </li>
                            <li>
                                Compiled
                            </li>
                            <li>
                                Mulit-paradigm
                            </li>
                        </ul>
                        <h3 className="pageHeading">Data Types:</h3>
                        <ul>
                            <li>
                                String: String
                            </li>
                            <li>
                                Number: Int, Float, Double
                            </li>
                            <li>
                                Sequence: Array, Tuple, Set
                            </li>
                            <li>
                                Mapping: Dictionary
                            </li>
                            <li>
                                Boolean: Bool
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
