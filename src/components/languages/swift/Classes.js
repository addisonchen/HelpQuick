import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import swift from 'react-syntax-highlighter/dist/esm/languages/hljs/swift';
import { stackoverflowLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

SyntaxHighlighter.registerLanguage('swift', swift);

export default function Overview() {

    let classes1 = `// creating a class with fields:
class MyClass1 {
    var myNum = 3
    var myList = ["dog", "cat", "bear"]
}`;

    let classes2 = `// a class with a constructor:
class MyClass2 {
    let myNum: Int
    var myString: String

    // the initializer can set a value for the constant myNum
    init(myNum: Int, myString: String) {
        self.myNum = myNum
        self.myString = myString
    }
}`;

    let classes3 = `// a class with functions!
class MyClass3 {
    var myNum = 3

    func increment() {
        self.num = self.num + 1
    }
    
    func setNum(newNum: Int) {
        self.num = newNum
    }
    
    func getNum() -> Int {
        return self.num
    }
}`;

    let protocol = `// a protocol (interface) and a subclass
protocol myProtocol {
    // specifies name and gettable and/or settable
    var myString: String { get set }

    func myAdd(num1: Int, num2: Int) -> Int
}

class myClass: myProtocol {
    var myString = "hello!"

    func myAdd(num1: Int, num2: Int) -> Int {
        return num1 + num2
    }
    
}`;

    return (
        <div>
            <Container>
                <Row>
                    <h2 className="tabHeading" style={{paddingLeft: "8vw", paddingRight: "8vw"}}>Classes in Swift</h2>
                </Row>
                <Row>
                    <Col style={{paddingLeft: "8vw", paddingRight: "8vw"}}>
                        <Row>
                            <Col xl={6}>
                                <p>
                                    Classes/Objects store data and methods. They are reference types (note that Structs are Value types).
                                </p>
                                <Row>
                                    <SyntaxHighlighter language="swift" style={stackoverflowLight} className="codeSample">
                                        {classes1}
                                    </SyntaxHighlighter>
                                </Row>
                                <Row>
                                    <SyntaxHighlighter language="swift" style={stackoverflowLight} className="codeSample">
                                        {classes3}
                                    </SyntaxHighlighter>
                                </Row>
                            </Col>
                            <Col xl={6}>
                                <Row>
                                    <SyntaxHighlighter language="swift" style={stackoverflowLight} className="codeSample">
                                        {classes2}
                                    </SyntaxHighlighter>
                                </Row>
                                <Row>
                                    <SyntaxHighlighter language="swift" style={stackoverflowLight} className="codeSample">
                                        {protocol}
                                    </SyntaxHighlighter>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div style={{height: '100px'}}></div>
        </div>
    )
}
