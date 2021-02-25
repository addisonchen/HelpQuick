import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Overview() {

    let classes = `# creating a class with a field:
class MyClass:
    num = 3
    
# a class with a constructor:
class MyClass:
    
    __init__(self, arg1 ... argn):
        self.arg1 = arg1
        ...
        self.argn = argn

# a class with functions!
class MyClass:

    num = 3

    def increment(self):
        self.num = self.num + 1
    
    def setNum(self, newNum):
        self.num = newNum`;

    return (
        <div>
            <Container>
                <Row>
                    <h2 className="tabHeading" style={{paddingLeft: "8vw", paddingRight: "8vw"}}>Classes in Python</h2>
                </Row>
                <Row>
                    <Col style={{paddingLeft: "8vw", paddingRight: "8vw"}}>
                        <p>
                            Classes/Objects store data and methods
                        </p>
                        <Row>
                            <pre className="codeSample">
                                <code>{classes}</code>
                            </pre>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
