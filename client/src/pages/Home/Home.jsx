// MODULES
import React, { Fragment } from 'react';

// COMPONENTS
import { Container, Row, Col, Image } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import Header from '../../components/Header';
import VertLine from '../../components/VertLine';
import VertLine2 from '../../components/VertLine2';
import Join from "../../components/Join"

// ASSETS
import header from '../../../assets/images/site_banner3.webp';
import head from '../../../assets/images/head_3.webp';
import circle from '../../../assets/images/circle.png';
import stairs from '../../../assets/images/stairs.webp';
import line from '../../../assets/images/line.png';
import vinyl from '../../../assets/images/vinyl.webp';
import date from '../../../assets/images/2022.png';
import book from '../../../assets/images/notebook.webp';
import shirt from '../../../assets/images/shirt.webp';

// # HOME - INTRODUCTION TO TERRABOTS
const Home = () => {
   return (
      <Fragment>
         <div className='home-container'>
            <Header />
            {!isMobile && <VertLine />}
            <Image className='banner mt-4 pt-4' src={header} />
            <Container className='mt-5 pt-5'>
               <Row className='mb-4'>
                  <Col lg={8} md={12} className='text-white '>
                     <h5 className='font-helv'>HEDS HISTORY:</h5>
                     <h1 className='font-helv'>ORIGIN OF THE HEDS</h1>
                     <br />
                     <div className='h4'>
                        HEDS are the first stage in what is to become hedsDAO, a fully decentralized audio-visual collective.
                        Each HED grants access to a private discord in which content creators can submit their work,
                        trade project files, and collaborate freely. On the third Friday of every month, HEDS will release and auction a
                        mixtape created and curated by the community, as an NFT, including the full project
                        files from the works contained.
                     </div>
                     <br />
                     <div className='h4'>
                        Earnings from the mixtape NFTs will then be distributed as such: 50% between the
                        creators of the last tape, 25% saved as funds for a bid on the following tape, and
                        25% to hedsDAO development. New applicants will appreciate pressed works with talented greats,
                        and already established web3 artists can support their own art from auction sales.
                        Eventually, through organic growth, this will allow the team to write contracts
                        which fund live show tours, art exhibits across the globe,
                        and IRL community education programs.
                     </div>
                  </Col>
                  {!isMobile && (
                     <Col lg={4} md={12} className='text-right'>
                        <VertLine2 />
                        <Image src={head} className='head mb-n5' />
                        {/* <HeadCanvas /> */}
                     </Col>
                  )}
               </Row>
            </Container>

            <Container>
               <Row className=''>
                  <Col md={12} sm={12} xs={12} className='text-center mx-auto text-white road-map mb-5 pt-5 mt-3'>
                     <h3 className='text-center'>roadmap:</h3>
                  </Col>
                  <Col md={12} sm={12} xs={12}></Col>
                  <Col md={12} sm={12} xs={12} className='mx-auto text-center my-auto '>
                     <Image src={circle}></Image>
                  </Col>
               </Row>
               <div>
                  <img src={line} alt='line' className='line' />
               </div>
               <Row className='pt-3 pb-3 h5'>
                  <Col md={6} sm={4} xs={6} className='text-right pr-5 text-gray h4'>
                     WHITELISTING PERIOD
                  </Col>
               </Row>
               <Row className=''>
                  <Col md={6} sm={6} xs={6} className='text-right my-auto pr-5 text-white h5'>
                     1/1 NFTs <br /> Serve as a pass to <br /> establish genesis <br /> community
                  </Col>
                  <Col md={6} sm={6} xs={6} className='text-left my-auto pl-5'>
                     <Image src={stairs} className='stairs'></Image>
                  </Col>
               </Row>
               <Row className='pt-3 pb-1 h5'>
                  <Col md={6} sm={6} xs={6} className='pr-5  mt-5 text-gray h5'>
                     <div className="text-right pr-5">
                     HEDS TREASURY ESTABLISHED <br /> BY FOUNDERS
                     </div>
                  </Col>
               </Row>
               <Row className=''>
                  <Col md={6} sm={6} xs={6} className='text-right my-auto pr-5 text-white h5'>
                     <Image src={vinyl} className='vinyl pr-3'></Image>
                  </Col>
                  <Col md={6} sm={6} xs={6} className='text-left my-auto pr-5 text-white h5 pl-5'>
                     <div className='text-gray mb-3 h5'>PRIVATE <br />DISCORD LAUNCH</div>
                     the first curated monthly <br /> tapes are <br /> released on catalog.works
                  </Col>
                  <Col md={12} className='text-center mx-auto mt-5 pt-5'>
                     <div>
                        <img src={date} alt='date_2020' className='date' />
                     </div>
                  </Col>
               </Row>
               <Row className=''>
                  <Col md={6} sm={6} xs={6} className='text-right my-auto pr-5 text-white h5'>
                     selected <br /> works created + chosen <br /> solely by HEDS community <br /> through governance
                  </Col>
                  <Col md={6} sm={6} xs={6} className='text-left my-auto pl-5'>
                     <Image src={book} className='book'></Image>
                  </Col>
               </Row>
               <Row className=''>
                  <Col md={6} sm={6} xs={6} className='text-right my-auto pr-5'>
                     <Image src={shirt} className='shirt'></Image>
                  </Col>
                  <Col md={6} sm={6} xs={6} className='text-left my-auto pl-5 text-white h5'>
                     merch drops <br />
                     live events <br />
                     art exhibitions <br />
                     artist retreats <br />
                     studio rentals
                  </Col>
               </Row>
            </Container>
            <br />
            <br />
            <br />
            <br />
            <Join />
            <div className="pt-5 pb-5"/>
            <Container>
               <Row>
                  <Col md={8} className="mt-4 pb-4 mb-4 text-white copyright">
                     2021 All Rights Reserved
                  </Col>
                  <Col md={2} className="mt-4 text-white pb-4 mb-4">
                     HOME <br /> <br />
                     ABOUT <br /> <br />
                     ROADMAP <br /> <br />
                  </Col>
                  <Col md={2} className="mt-4 text-white pb-4 mb-4">
                     DISCORD <br /> <br />
                     TWITTER <br /> <br />
                     IG <br /> <br />
                  </Col>
               </Row>
            </Container>
         </div>
      </Fragment>
   );
};

export default Home;
