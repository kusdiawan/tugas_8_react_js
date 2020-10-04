import React  from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PageBreadcrumb  from './../component/PageBreadcrumb';
import PageDropdown from './../component/PageDropdown';
import PageContainer from './../component/PageContainer';

function Header(){
	return(
		<div>
		 <Container fluid>
                <Row className="bg-dark">
                    <Col align="left">
                        <PageDropdown />
                    </Col>
                    <Col>
                    	<PageContainer />
                    </Col> 
                </Row>

                <Row >
                    <Col>
                       <PageBreadcrumb />
                     </Col>
                </Row>
          </Container>      
  		</div>
	)
}

export default Header;