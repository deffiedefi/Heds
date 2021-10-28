import React, { Fragment } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
   return (
      <Fragment>
         <Container>
            <Row>
               <Col md={8} className='text-white text-left'>
                  There comes a time when those with the opportunity to make positive change do just that. We're now
                  seeing the emergence of artists and platforms across web3 that are inverting legacy power structures
                  in the art economy. <br />
                  It's time to start using these platforms to take back what was already ours to begin with. Communities
                  are the new labels, listeners are investors, this is the new world./
               </Col>
            </Row>
         </Container>
      </Fragment>
   );
};

export default Header;
