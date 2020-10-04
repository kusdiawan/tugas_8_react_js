import React from 'react';
import { Breadcrumb, Container, Row, Col } from 'react-bootstrap';

function PageBreadcrumb(){
	return(
		<>
         <Container>
          <Row>
               <Col md={{ span:3, offset:9 }}>
                      <Breadcrumb>
                          <Breadcrumb.Item href="#"> Home </Breadcrumb.Item>
                          <Breadcrumb.Item href="#"> Berita </Breadcrumb.Item>
                          <Breadcrumb.Item href="#" active> Bola   </Breadcrumb.Item>
                      </Breadcrumb>
                  </Col>
              </Row>
           </Container>
          </>
		)
}

export default PageBreadcrumb;