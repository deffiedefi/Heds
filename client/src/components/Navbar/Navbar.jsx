// MODULES
import React, { Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';

// COMPONENTS
import { Nav, Container, Row, Col } from 'react-bootstrap';

// # NAVBAR - NAVIGATION ALL PAGES
const Navbar = () => {
   return (
      <Fragment>
         <div className="pt-1 pb-4 "></div>
         <Container>
            <Row>
               <Col className='text-right text-white h5'>0xbb81 connected</Col>
            </Row>
         </Container>
         <div className="pt-5 pb-5"></div>
      </Fragment>
   );
};

export default Navbar;
