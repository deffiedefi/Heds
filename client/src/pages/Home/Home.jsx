// MODULES
import React, { Fragment } from 'react';

// COMPONENTS
import { Container, Row, Col, Image } from 'react-bootstrap';
import Header from '../../components/Header';
import VertLine from '../../components/VertLine';
import VertLine2 from '../../components/VertLine2';
import HeadCanvas from '../../components/HeadCanvas';
// ASSETS
import header from '../../../assets/images/site_banner3.webp';

// # HOME - INTRODUCTION TO TERRABOTS
const Home = () => {
   return (
      <Fragment>
         <div className='home-container'>
            <Header />
            <VertLine />
            <Image className='banner mt-4 pt-4' src={header} />
            <Container className='mt-5 pt-5'>
               <Row className='mb-4'>
                  <Col md={8} className='text-white '>
                     <h5 className='font-helv'>HEDS HISTORY:</h5>
                     <h1 className='font-helv'>ORIGIN OF THE HEDS</h1>
                     <br />
                     HEDS are the first stage in what is to become a fully decentralized audio-visual collective. Each
                     HED grants access to a private discord in which content creators can submit their work, trade
                     project files, and collaborate freely. Every month, HEDS will release and auction a mixtape created
                     and curated by the community discord, as an NFT, including the full project files from the works
                     contained.
                     <br />
                     <br />
                     Earnings from the Mixtape NFTs will then be distributed between the creators of the last tape,
                     saved as funds for bids on the following tape, and the dev team. New applicants will appreciate
                     pressed works with talented greats, and already established web3 artists can support their own art
                     from auction sales. Eventually this will allow the team to write contracts which fund live show
                     tours, art exhibits across the globe, and IRL community education programs.
                  </Col>
                  <Col md={4}>
                     <VertLine2 />
                     <HeadCanvas />
                  </Col>
               </Row>
            </Container>
         </div>
      </Fragment>
   );
};

export default Home;
