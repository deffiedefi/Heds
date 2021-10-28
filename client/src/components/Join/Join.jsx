import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';

import go from '../../../assets/images/play.webp';

const Join = () => {
   return (
      <Container className='join-container' fluid>
         <Row>
            <Col md={6} className='text-center font-helv h1 text-white join-r pr-5 mx-auto'>
               JOIN <br />
               THE <br />
               HEDS <br />
            </Col>
            <Col md={6} className='text-white my-auto'>
               <div className="mb-4 h6">
                  We are still at the beginning of <br />
                  a cultural revolution that will <br />
                  disrupt legacy media in ways that <br />
                  we never imagined.<br />
               </div>
               <span className="font-helv bold">
                  JOIN DISCORD 
               </span>
               <i className="ml-2 fas fa-play-circle"></i>
               {/* <img className='pl-2 pb-1' src={go} height="15"  alt='discord' /> */}
            </Col>
         </Row>
      </Container>
   );
};

export default Join