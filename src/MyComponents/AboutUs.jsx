import React from 'react'
import { Link } from "react-router-dom";
import aboutusimg1 from './Images/aboutus-img1.png'
import ratings from './Images/rating-star.svg'
import ratingsimg1 from './Images/ratings-img1.png'
import ratingsimg2 from './Images/ratings-img2.png'
import ratingsimg3 from './Images/ratings-img3.png'
import ratingsimg4 from './Images/ratings-img4.png'

import brand1 from './Images/brand1.svg';
import brand2 from './Images/brand-2.svg';
import brand3 from './Images/brand-3.svg';
import brand4 from './Images/brand-4.svg';
import brand5 from './Images/brand-5.svg';
import brand6 from './Images/brand-6.svg';

// import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import c1img from './Images/about-us-c1image.png';
import pillowimg from './Images/pillow.png';

import Subscribe_Now from './Subscribe_Now';
import Footer from './Footer';
import { Carousel, CarouselItem } from 'react-bootstrap';
import c2i2 from './Images/aboutusc2i2.png'
import c2i1 from './Images/aboutusc2i1.png'
import c2i3 from './Images/aboutusc2i3.png'
import invertedcommas from './Images/aboutusc2invertedcommas.svg'

export default function AboutUs() {
    return (
        <div>
            <div className="section-6-wrapper">
                {/* Section 1 */}
                <div className="about-us-section-1">
                    <div class="container">
                        <div class="row">

                            <div class="col-sm-3 col-md-4 col-lg-6">
                                <h1>Provide the best quality ingredients for home products</h1>
                                <p> Lorem ipsum dolor sit amet consectetur adipiscing elit dictumst posuere, lectus dis vehicula augue elementum quam risus. Placerat dictum lobortis lacinia volutpat morbi cum justo commodo est aliquam, facilisi consequat ligula vivamus faucibus</p>
                                <Link to="/team">
                                    <button type="button" class="btn btn-outline-dark">Meet our Team</button>
                                </Link>

                                <div className="ratings">
                                    <h2>Ratings  <img src={ratings} alt="" />5.0</h2>
                                    <p>Trusted by many people from all over the world</p>

                                    <div className="ratings-image">
                                        <img src={ratingsimg1} alt="" />
                                        <img src={ratingsimg2} alt="" />
                                        <img src={ratingsimg3} alt="" />
                                        <img src={ratingsimg4} alt="" />
                                        <h4>3k+</h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-3 col-md-4 col-lg-6">
                                <img className="aboutusimg1" src={aboutusimg1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2 */}
            <div className="brands">
                <div className="wrapper">
                    <h5 className='brand-heading'>Various brands have used our products</h5>

                    <div className="brand-logo">
                        <img src={brand1} alt="brand1" />
                        <img src={brand2} alt="brand2" />
                        <img src={brand3} alt="brand3" />
                        <img src={brand4} alt="brand4" />
                        <img src={brand5} alt="brand5" />
                        <img src={brand6} alt="brand6" />
                    </div>
                </div>
            </div>

            {/* Section 3 */}
            <div className="section-6-wrapper">
                <div className="about-us-team">
                    <h2>Meet Our Team</h2>
                    <p>We write various things related to furniture, from tips and what things I need to pay attention to when choosing furniture</p>

                    <div className="carousel">
                        <Carousel>
                            <Carousel.Item>
                                <Container>
                                    <Row>
                                        {/* Carousel: */}

                                        {/* Slide-1 */}
                                        <Col lg={4}>
                                            <Card>
                                                <Card.Body>
                                                    <img src={c1img} alt="" />
                                                    <h1>Mia Lobey</h1>
                                                    <p>Accountant</p>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        {/* Slide-2 */}
                                        <Col lg={4}>
                                            <Card>
                                                <Card.Body>
                                                    <img src={c1img} alt="" />
                                                    <h1>Mia Lobey</h1>
                                                    <p>Accountant</p>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        {/* Slide-3 */}
                                        <Col lg={4}>
                                            <Card>
                                                <Card.Body>
                                                    <img src={c1img} alt="" />
                                                    <h1>Mia Lobey</h1>
                                                    <p>Accountant</p>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>
                            </Carousel.Item>

                            <Carousel.Item>
                                <Container>
                                    <Row>
                                        <Col lg={4}>
                                            <Card>
                                                <Card.Body>
                                                    <img src={c1img} alt="" />
                                                    <h1>Mia Lobey</h1>
                                                    <p>Accountant</p>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col lg={4}>
                                            <Card>
                                                <Card.Body>
                                                    <img src={c1img} alt="" />
                                                    <h1>Mia Lobey</h1>
                                                    <p>Accountant</p>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col lg={4}>
                                            <Card>
                                                <Card.Body>
                                                    <img src={c1img} alt="" />
                                                    <h1>Mia Lobey</h1>
                                                    <p>Accountant</p>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>

            <div className="about-us-pillow">
                <div className="about-us-pillow-left-right">
                    <div className="about-us-pillow-left">
                        <p>Interior Modern</p>
                        <h2>Arrange your home in such a way <br />with our modern <br />interiors</h2>
                        <button type="button" class="btn btn-outline-dark">Shop Now</button>
                    </div>
                    <div className="about-us-pillow-right">
                        <img src={pillowimg} alt="" />
                    </div>
                </div>
            </div>

            {/* Carousel 2 */}
            <div className="about-us-carousel-2">
                <div className="section-6-wrapper">
                    <h2 >How happy are they with our service</h2>
                    <Carousel>
                        {/* Slide1 */}
                        <CarouselItem>
                            <Container>
                                <Row>
                                    {/* card1 */}
                                    <Col lg={4}>
                                        <Card>
                                            <Card.Body>
                                                <div className="inverted-commas">
                                                    <img src={invertedcommas} alt="" />
                                                </div>

                                                <div className="about-us-c2-heading">
                                                    <h5>For the material and the chair as we expected it's good </h5>
                                                </div>

                                                <p className='about-us-c2-para'>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                </p>


                                                <div className="about-us-c-bottom">
                                                    <div className='about-us-cimg'>
                                                        <img src={c2i1} alt="" />
                                                    </div>

                                                    <div className="about-us-c-text">
                                                        <h6>Dagruel Manulo</h6>
                                                        <p>Sydney,Australia</p>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    {/* card2 */}
                                    <Col lg={4}>
                                        <Card>
                                            <Card.Body>
                                                <div className="inverted-commas">
                                                    <img src={invertedcommas} alt="" />
                                                </div>
                                                <div className="about-us-c2-heading">
                                                    <h5>For the material and the chair as we expected it's good </h5>
                                                </div>
                                                <p className='about-us-c2-para'>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                </p>


                                                <div className="about-us-c-bottom">
                                                    <div className='about-us-cimg'>
                                                        <img src={c2i2} alt="" />
                                                    </div>

                                                    <div className="about-us-c-text">
                                                        <h6>Zambi Owel </h6>
                                                        <p>Sydney,Australia</p>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    {/* card3 */}
                                    <Col lg={4}>
                                        <Card>
                                            <Card.Body>
                                                <div className="inverted-commas">
                                                    <img src={invertedcommas} alt="" />
                                                </div>
                                                <div className="about-us-c2-heading">
                                                    <h5>For the material and the chair as we expected it's good </h5>
                                                </div>
                                                <p className='about-us-c2-para'>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                </p>


                                                <div className="about-us-c-bottom">
                                                    <div className='about-us-cimg'>
                                                        <img src={c2i3} alt="" />
                                                    </div>

                                                    <div className="about-us-c-text">
                                                        <h6>Mario</h6>
                                                        <p>Sydney,Australia</p>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </CarouselItem>

                        {/* Slide 2 */}
                        {/* Slide1 */}
                        <CarouselItem>
                            <Container>
                                <Row>
                                    {/* card1 */}
                                    <Col lg={4}>
                                        <Card>
                                            <Card.Body>
                                                <div className="inverted-commas">
                                                    <img src={invertedcommas} alt="" />
                                                </div>
                                                <div className="about-us-c2-heading">
                                                    <h5>For the material and the chair as we expected it's good </h5>
                                                </div>
                                                <p className='about-us-c2-para'>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                </p>


                                                <div className="about-us-c-bottom">
                                                    <div className='about-us-cimg'>
                                                        <img src={c2i1} alt="" />
                                                    </div>

                                                    <div className="about-us-c-text">
                                                        <h6>Dagruel Manulo</h6>
                                                        <p>Sydney,Australia</p>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    {/* card2 */}
                                    <Col lg={4}>
                                        <Card>
                                            <Card.Body>
                                                <div className="inverted-commas">
                                                    <img src={invertedcommas} alt="" />
                                                </div>
                                                <div className="about-us-c2-heading">
                                                    <h5>For the material and the chair as we expected it's good </h5>
                                                </div>
                                                <p className='about-us-c2-para'>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                </p>


                                                <div className="about-us-c-bottom">
                                                    <div className='about-us-cimg'>
                                                        <img src={c2i2} alt="" />
                                                    </div>

                                                    <div className="about-us-c-text">
                                                        <h6>Zambi Owel </h6>
                                                        <p>Sydney,Australia</p>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    {/* card3 */}
                                    <Col lg={4}>
                                        <Card>
                                            <Card.Body>
                                                <div className="inverted-commas">
                                                    <img src={invertedcommas} alt="" />
                                                </div>
                                                <div className="about-us-c2-heading">
                                                    <h5>For the material and the chair as we expected it's good </h5>
                                                </div>
                                                <p className='about-us-c2-para'>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                </p>


                                                <div className="about-us-c-bottom">
                                                    <div className='about-us-cimg'>
                                                        <img src={c2i3} alt="" />
                                                    </div>

                                                    <div className="about-us-c-text">
                                                        <h6>Mario</h6>
                                                        <p>Sydney,Australia</p>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </CarouselItem>

                        {/* Slid3 */}
                        {/* Slide1 */}
                        <CarouselItem>
                            <Container>
                                <Row>
                                    {/* card1 */}
                                    <Col lg={4}>
                                        <Card>
                                            <Card.Body>
                                                <div className="inverted-commas">
                                                    <img src={invertedcommas} alt="" />
                                                </div>
                                                <div className="about-us-c2-heading">
                                                    <h5>For the material and the chair as we expected it's good </h5>
                                                </div>
                                                <p className='about-us-c2-para'>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                </p>


                                                <div className="about-us-c-bottom">
                                                    <div className='about-us-cimg'>
                                                        <img src={c2i1} alt="" />
                                                    </div>

                                                    <div className="about-us-c-text">
                                                        <h6>Dagruel Manulo</h6>
                                                        <p>Sydney,Australia</p>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    {/* card2 */}
                                    <Col lg={4}>
                                        <Card>
                                            <Card.Body>
                                                <div className="inverted-commas">
                                                    <img src={invertedcommas} alt="" />
                                                </div>
                                                <div className="about-us-c2-heading">
                                                    <h5>For the material and the chair as we expected it's good </h5>
                                                </div>
                                                <p className='about-us-c2-para'>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                </p>


                                                <div className="about-us-c-bottom">
                                                    <div className='about-us-cimg'>
                                                        <img src={c2i2} alt="" />
                                                    </div>

                                                    <div className="about-us-c-text">
                                                        <h6>Zambi Owel </h6>
                                                        <p>Sydney,Australia</p>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    {/* card3 */}
                                    <Col lg={4}>
                                        <Card>
                                            <Card.Body>
                                                <div className="inverted-commas">
                                                    <img src={invertedcommas} alt="" />
                                                </div>
                                                <div className="about-us-c2-heading">
                                                    <h5>For the material and the chair as we expected it's good </h5>
                                                </div>
                                                <p className='about-us-c2-para'>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                </p>


                                                <div className="about-us-c-bottom">
                                                    <div className='about-us-cimg'>
                                                        <img src={c2i3} alt="" />
                                                    </div>

                                                    <div className="about-us-c-text">
                                                        <h6>Mario</h6>
                                                        <p>Sydney,Australia</p>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </CarouselItem>
                    </Carousel>
                </div>

            </div >

            <Subscribe_Now />
            <Footer />

        </div >

    )
}

