import React from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { stackoverflowLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

SyntaxHighlighter.registerLanguage('js', js);

export default function DataStructures() {

    let arraySample = `// creating an empty array
let emptyArray = [];

// Array with things!
let filledArray = [1, 2, 3];

// get item from the array
filledArray[0]; -> first item`;

    let arrayMethods = `// add to end ofarray
filledArray.push(item1, ... , item n);

// add to front of arra
filledArray.unshift(item1, ... , item n);

// remove from end of array
filledArray.pop();

// remove from front of array
filledArray.shift();

// remove from array at index
filledArray.splice(idx, how many);

// reverse the array
filledArray.reverse();

// array length
filledArray.length;

// concat
let combined = filledArray.concat(emptyArray);

// sort
filledArray.sort();`;

    let arrayIterate = `// iterate over items with forEach()
filledArray.forEach((item, idx) =>{
    console.log('item: \${item} idx: \${idx}');
});

// iterate over indexes with for loop
var i;
for (i = 0; i < filledArray.length; ++i) {
    console.log('item: \${filledArray[idx]} idx: \${idx});
}`;
    let arraymfr = `myArray = [1, 2, 3, 4, 5]

// map
let doubled = myArray.map(num => num * 2);

// filter
let odds = myArray.filter((val) => {
    return val % 2 != 0;
})

// reduce
let sum = myArray.reduce((acc, num) => {
    return acc + num;
}, 0)

// every - true if func is true for all items
let greaterThan3? = myArray.every((num) => {
    return num > 3;
})
`;

    let dictSample = `// empty object
emptyObj = {}

// Object with some stuff!
filledObj = {'joe': 12, 'abby': 3, 'derek': 5};

// get values
filledObj['joe']; -> 12

// add key-value pairs
filledObj['julia'] = 7;

// remove key-value pairs
delete filledObj['julia'];

// check if key exists?
'joe' in filledObj; -> True
'mary' in filledObj; -> False`;

    let dictIter = `// loop over keys
Object.keys(filledObj).forEach((key) => {
    console.log('key: \${key} val: \${filledObj[key]});
})

for (const[key, val] of Object.entries(filledObject)) {
    console.log(key, val);
}`;

    return (
        <div>
            <Container>
                <Row>
                    <h2 className="tabHeading">Data Structures</h2>
                </Row>
                <Tab.Container defaultActiveKey="arrays">
                    <Row>
                        <Col md={3} lg={2}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link className="customPill" eventKey="arrays">Arrays</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="customPill" eventKey="dicts">Objects</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col md={9} lg={10}>
                            <Tab.Content>
                                <Tab.Pane eventKey="arrays">
                                    <h3 className="pageHeading">
                                        Arrays:
                                    </h3>
                                    <Row>
                                        <Col lg={6}>
                                            <Row>
                                                <p className="sampleHeader">Basics:</p>
                                                <SyntaxHighlighter language="js" style={stackoverflowLight} className="codeSample">
                                                    {arraySample}
                                                </SyntaxHighlighter>
                                            </Row>
                                            <Row>
                                                <p className="sampleHeader">Methods:</p>
                                                <SyntaxHighlighter language="js" style={stackoverflowLight} className="codeSample">
                                                    {arrayMethods}
                                                </SyntaxHighlighter>
                                            </Row>
                                        </Col>
                                        <Col lg={6}>
                                            <Row>
                                                <p className="sampleHeader">Iterating:</p>
                                                <SyntaxHighlighter language="js" style={stackoverflowLight} className="codeSample">
                                                    {arrayIterate}
                                                </SyntaxHighlighter>
                                            </Row>
                                            <Row>
                                                <p className="sampleHeader">Map/Filter/Reduce:</p>
                                                <SyntaxHighlighter language="js" style={stackoverflowLight} className="codeSample">
                                                    {arraymfr}
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
