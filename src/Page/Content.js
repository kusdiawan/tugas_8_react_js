import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PageCarousel from './../component/PageCarousel';

function Content(){
	return(
		<>
		<Container fluid>
		 <Row>
            <Col></Col>
                <Col xs={8}><PageCarousel /></Col>
            <Col></Col>
         </Row>
		</Container>
		</>
		)
}

export default Content;
