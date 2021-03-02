import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { stackoverflowLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

SyntaxHighlighter.registerLanguage('js', js);

export default function Overview() {

    let classes = `// creating a class:
class MyClass1 {

    constructor(value) {
        this.val = value;
    }
}

let myObj1 = new MyClass1('hello!');
    
// a class with a function:
class MyClass2 {
    constructor(value) {
        this.val = value;
    }

    whatType() {
        return typeof this.val
    }
}

// extention!
class MyClass3 extends myClass2 {

    constructor(value, count) {
        super(value);
        this.count = count;
    }

    printCountTimes() {
        var i;
        for (i = 0; i < this.count; ++i) {
            console.log(this.whatType());
        }
    }
}`;

    return (
        <div>
            <Container>
                <Row>
                    <h2 className="tabHeading" style={{paddingLeft: "8vw", paddingRight: "8vw"}}>Classes in JavaScript</h2>
                </Row>
                <Row>
                    <Col style={{paddingLeft: "8vw", paddingRight: "8vw"}}>
                        <p>
                            Classes in JavaScript are basic, they are built on functions 
                        </p>
                        <Row>
                            <SyntaxHighlighter language="js" style={stackoverflowLight} className="codeSample">
                                {classes}
                            </SyntaxHighlighter>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div style={{height: '100px'}}></div>
        </div>
    )
}
