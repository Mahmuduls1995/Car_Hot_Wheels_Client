import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MenuBar from '../shared/MenuBar/MenuBar';

const NotFound = () => {
    return (
        <div className="error-page py-5">
            <MenuBar/>
            <Container style={{margin:"50px 0"}}>
                <Row style={{alignItems:"center"}}>
                    <Col md={6} sm={12}>
                        <img src="https://billi4you.com/wp-content/themes/eduma/images/image-404.jpg" alt="" style={{float: "right"}} />
                    </Col>
                    <Col md={6} sm={12}>
                        <h1 style={{fontWeight:"700", fontSize:"48px"}}>404 <span style={{color: "#ff7d05"}}>EROR</span></h1>
                        <p>Sorry, we can't find the page you are looking for. Please go to <a href="/home">Home.</a></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;