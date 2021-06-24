import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import pcFixImage from "../../images/first_section_image.png"

const FirstSection = () => {
    return (
        <Row className="align-items-center" >
            <Col xs={12} sm={12} md={6} lg={6}>
                <h1>Professional Computer Repair Service</h1>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deserunt esse tempora omnis velit vel sapiente quaerat quis voluptatum repellendus.</p>
                <Button variant="success" className="mt-3">View All Services</Button>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
                <img style={{width: '100%'}} src={pcFixImage} alt="pc_fix_image"/>
            </Col>
        </Row>
    );
};

export default FirstSection;