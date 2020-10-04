import React from 'react';
import { Container, Figure } from 'react-bootstrap';

function PageContainer(){
	return(
		  <div>
      <Container>
      <Figure className="float-right mr-5">
                          <Figure.Image src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" width={40} height={40}/>
                          <Figure.Caption>
                          <h6 className="text-light"> Alan Saputra </h6>
                          </Figure.Caption>
                      </Figure>

      </Container>
      </div>

		)
}

export default PageContainer;