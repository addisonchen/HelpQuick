import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { stackoverflowLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

SyntaxHighlighter.registerLanguage('js', js);

export default function Overview() {

    let helloWorld = `// This is an inline comment
/* this is a block comment */
console.log('Hello World!');

// function scoped variable
var myInt = 1;

// block scoped variable
let myString = 'hello!';

// constant
const myConst = 'this cant change';
`;

    let ifSample = `// boolean operators: &&, ||, !, ===, !==, >, <
/* note that in js, === compares value and type, == only compares values */
if (x < y) {    
    console.log('x is less than y');
} else if (x > y) {
    console.log('x is greater than y');
} else {
    console.log('x equals y');
}`;

    let whileSample = `let x = 0
while (x < 10) {
    console.log(x);
    x++;
}`;

    let forSample = `var i;
for (i = 0, i < 10, ++i) {
    console.log('i is \${i}');
}`;

    return (
        <div>
            <Container>
                <Row>
                    <h2 className="tabHeading">Overview of JavaScript</h2>
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
                            <SyntaxHighlighter language="js" style={stackoverflowLight} className="codeSample">
                                {helloWorld}
                            </SyntaxHighlighter>
                        </Row>
                        <Row>
                            <SyntaxHighlighter language="js" style={stackoverflowLight} className="codeSample">
                                {ifSample}
                            </SyntaxHighlighter>
                        </Row>
                        <Row>
                            <SyntaxHighlighter language="js" style={stackoverflowLight} className="codeSample">
                                {whileSample}
                            </SyntaxHighlighter>
                        </Row>
                        <Row>
                            <SyntaxHighlighter language="js" style={stackoverflowLight} className="codeSample">
                                {forSample}
                            </SyntaxHighlighter>
                        </Row>
                    </Col>

                    <Col md={6}>
                        <h3 className="pageHeading">Attributes:</h3>
                        <ul>
                            <li>
                                Dynamically typed
                            </li>
                            <li>
                                Weakly typed
                            </li>
                            <li>
                                Interpreted
                            </li>
                            <li>
                                Multi-paradigm
                            </li>
                        </ul>
                        <h3 className="pageHeading">Data Types:</h3>
                        <ul>
                            <li>
                                String: String
                            </li>
                            <li>
                                Number: Number
                            </li>
                            <li>
                                Sequence: Array, Set
                            </li>
                            <li>
                                Mapping: Object, Map
                            </li>
                            <li>
                                Boolean: Boolean (true, false)
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div style={{height: '100px'}}></div>
        </div>
    )
}
