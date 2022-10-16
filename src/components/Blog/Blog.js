import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Blog.css'

const Blog = () => {
    return (

        <div>
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={3} className='blog'>
                        <div className=''>
                            <h3>what is the purpose of react router</h3>
                            <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
                        </div></Col>
                    <Col xs={12} md={6} lg={3} className='blog'>
                        <div>
                            <h3>how does context api work</h3>
                            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                        </div></Col>
                    <Col xs={12} md={6} lg={3} className='blog'>
                        <div>
                            <h3>what is useref in react</h3>
                            <p>Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with , React will set its .current property to the corresponding DOM node whenever that node changes.</p>
                        </div></Col>
                </Row>
            </Container>



        </div>
    );
};

export default Blog;