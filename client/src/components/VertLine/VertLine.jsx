import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

const VertLine = () => {
   return (
      <Container className="mt-4 pt-4">
         <Row>
            <Col>
               <div className='vert-line' />
            </Col>
         </Row>
      </Container>
   );
};

export default VertLine;
