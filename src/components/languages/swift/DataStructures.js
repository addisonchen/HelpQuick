import React from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import swift from 'react-syntax-highlighter/dist/esm/languages/hljs/swift';
import { stackoverflowLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

SyntaxHighlighter.registerLanguage('swift', swift);

export default function DataStructures() {

    let listSample = `// creating an empty list (specify type)
var emptyArray = [Int]()

// Array with things!
var filledArray = [1, 2, 3]

// get item from the list
filledArray[0] -> first item

// get list length
let length = filledArray.count`;

    let listMethods = `// add to list
filledArray.append(new item)

// remove last item
let lastItem = filledArray.removeLast()

// remove from index
let removedItem = filledArray.remove(at: index)

// insert at index
filledArray.insert(item, at: index)

// reverse the list
filledArray.reversed()

// concat lists
let combinedArray = emptyArray + filledArray

// sort!
filledArray.sort()`;

    let listSlicing = `// slicing!
let firstHalf = filledArray[...<midpoint]
let secondHalf = filledArray[midpoint...]`;
    
    let listIterate = `// iterate over items
for item in filledArray {
    print(item)
}

// iterate with index and item
for (idx, item) in filledArray.enumerated():
    print("i: \\(idx) item: \\(item)" )

// iterate with only indexes
for idx in 0...<filledArray.count {
    print("at idx: \\(idx)")
}`;
    let listmfr = `var myArray = [1, 2, 3, 4, 5]

// map
let doubled = myArray.map(num in num * 2)

// filter
let odds = myArray.filter($0 % 2 != 0)

// reduce
sum = myArray.reduce(0, +)
`;

    let dictSample = `// empty dictionary
var emptyDict = [String: String]()

// dictionary with some stuff!
var filledDict:[String: Int] = ["joe": 12, "abby": 3, "derek": 5]

// get values (note that getting values always returns an optional)
if let val = filledDict["joe"] {
    print("joe's val is \\(val)")
}

// add key-value pairs
filledDict["julia"] = 7

// remove key-value pairs
filledDict['julia'] = nil

// check if key exists?
if let val = filledDict["joe"] {
    print("the key exists because val is not nil")
}`;

    let dictIter = `// loop over keys and vals
for (key, val) in filledDict {
    print("\\(key) -> \\(val)")
}

// loop over just keys
for key in filledDict.keys {
    print(key)
}`;

    return (
        <div>
            <Container>
                <Row>
                    <h2 className="tabHeading">Data Structures</h2>
                </Row>
                <Tab.Container defaultActiveKey="lists">
                    <Row>
                        <Col md={3} lg={2}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link className="customPill" eventKey="lists">Arrays</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="customPill" eventKey="dicts">Dictionaries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col md={9} lg={10}>
                            <Tab.Content>
                                <Tab.Pane eventKey="lists">
                                    <h3 className="pageHeading">
                                        Arrays:
                                    </h3>
                                    <Row>
                                        <Col lg={6}>
                                            <Row>
                                                <p className="sampleHeader">Basics:</p>
                                                <SyntaxHighlighter language="swift" style={stackoverflowLight} className="codeSample">
                                                    {listSample}
                                                </SyntaxHighlighter>
                                            </Row>
                                            <Row>
                                                <p className="sampleHeader">Methods:</p>
                                                <SyntaxHighlighter language="swift" style={stackoverflowLight} className="codeSample">
                                                    {listMethods}
                                                </SyntaxHighlighter>
                                            </Row>
                                        </Col>
                                        <Col lg={6}>
                                            <Row>
                                                <p className="sampleHeader">Slicing:</p>
                                                <SyntaxHighlighter language="swift" style={stackoverflowLight} className="codeSample">
                                                    {listSlicing}
                                                </SyntaxHighlighter>
                                            </Row>
                                            <Row>
                                                <p className="sampleHeader">Iterating:</p>
                                                <SyntaxHighlighter language="swift" style={stackoverflowLight} className="codeSample">
                                                    {listIterate}
                                                </SyntaxHighlighter>
                                            </Row>
                                            <Row>
                                                <p className="sampleHeader">Map/Filter/Reduce:</p>
                                                <SyntaxHighlighter language="swift" style={stackoverflowLight} className="codeSample">
                                                    {listmfr}
                                                </SyntaxHighlighter>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="dicts">
                                    <h3 className="pageHeading">Dictionaries:</h3>
                                    <Row>
                                        <Col lg={6}>
                                            <Row>
                                                <p className="sampleHeader">Basics:</p>
                                                <SyntaxHighlighter language="swift" style={stackoverflowLight} className="codeSample">
                                                    {dictSample}
                                                </SyntaxHighlighter>
                                            </Row>
                                        </Col>
                                        <Col lg={6}>
                                            <Row>
                                                <p className="sampleHeader">Iterating:</p>
                                                <SyntaxHighlighter language="swift" style={stackoverflowLight} className="codeSample">
                                                    {dictIter}
                                                </SyntaxHighlighter>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
            <div style={{height: '100px'}}></div>
        </div>
    )
}
