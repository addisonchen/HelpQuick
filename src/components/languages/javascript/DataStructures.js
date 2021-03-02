import React from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { stackoverflowLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

SyntaxHighlighter.registerLanguage('js', js);

export default function DataStructures() {

    let listSample = `// creating an empty array
let emptyArray = [];

// Array with things!
let filledArray = [1, 2, 3];

// get item from the list
filledArray[0] -> first item`;

    let listMethods = `// add to list
filledArray.append(new item)

# remove from list
filledArray.pop(optional idx, default -1)

# insert at index
filledArray.insert(index, item)

# reverse the list
filledArray.reverse()

# clear the list
filledArray.clear()

// concat
let combined = filledArray.concat(emptyArray)`;

    let listSlicing = `# slicing!
filledArray[:] -> copy
filledArray[idx:] -> [idx ... rest of list]
filledArray[:idx] -> [1 ... up to idx-1]
filledArray[start:stop] -> [start ... stop-1]`;
    
    let listIterate = `# iterate over items
for item in filledArray:
    print(str(item))

# iterate with index and item
for i, item in enumerate(filledArray):
    print("i: " + str(i) + " item: " + str(item))

# iterate with only indexes
for i in range(len(filledArray)):
    print(str(i))

# sorted and uniques only
for filteredVal in sorted(set(filledArray)):
    print(str(filteredVal))
`;
    let listmfr = `myArray = [1, 2, 3, 4, 5]

# map
doubled = list(map(lambda x: x * 2, items))

# filter
odds = list(filter(lambda x: x % 2 != 0, myArray))

# reduce
sum = reduce((lamda x, y: x + y), myArray)
`;

    let dictSample = `# empty dictionary
emptyDict = {}

# dictionary with some stuff!
filledDict = {'joe': 12, 'abby': 3, 'derek': 5}

# get values
filledDict['joe'] -> 12

# add key-value pairs
filledDict['julia'] = 7

# remove key-value pairs
del filledDict['julia']

# check if key exists?
'joe' in filledDict -> True
'mary' in filledDict -> False`;

    let dictIter = `# loop over keys and vals
for key, val in filledDict.items():
    print(key, val)`;

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
                                    <Nav.Link className="customPill" eventKey="dicts">Objects</Nav.Link>
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
                                                <SyntaxHighlighter language="js" style={stackoverflowLight} className="codeSample">
                                                    {listSample}
                                                </SyntaxHighlighter>
                                            </Row>
                                            <Row>
                                                <p className="sampleHeader">Methods:</p>
                                                <SyntaxHighlighter language="js" style={stackoverflowLight} className="codeSample">
                                                    {listMethods}
                                                </SyntaxHighlighter>
                                            </Row>
                                            <Row>
                                                <p className="sampleHeader">Slicing:</p>
                                                <SyntaxHighlighter language="js" style={stackoverflowLight} className="codeSample">
                                                    {listSlicing}
                                                </SyntaxHighlighter>
                                            </Row>
                                        </Col>
                                        <Col lg={6}>
                                            <Row>
                                                <p className="sampleHeader">Iterating:</p>
                                                <SyntaxHighlighter language="js" style={stackoverflowLight} className="codeSample">
                                                    {listIterate}
                                                </SyntaxHighlighter>
                                            </Row>
                                            <Row>
                                                <p className="sampleHeader">Map/Filter/Reduce:</p>
                                                <SyntaxHighlighter language="js" style={stackoverflowLight} className="codeSample">
                                                    {listmfr}
                                                </SyntaxHighlighter>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="dicts">
                                    <h3 className="pageHeading">Objects:</h3>
                                    <Row>
                                        <Col lg={6}>
                                            <Row>
                                                <p className="sampleHeader">Basics:</p>
                                                <SyntaxHighlighter language="js" style={stackoverflowLight} className="codeSample">
                                                    {dictSample}
                                                </SyntaxHighlighter>
                                            </Row>
                                        </Col>
                                        <Col lg={6}>
                                            <Row>
                                                <p className="sampleHeader">Iterating:</p>
                                                <SyntaxHighlighter language="js" style={stackoverflowLight} className="codeSample">
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
