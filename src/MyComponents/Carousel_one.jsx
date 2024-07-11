import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Badge } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import r1_c1 from './Images/r1_c1.png';
import r1_c2 from './Images/r1_c2.png';
import r1_c3 from './Images/r1_c3.png';
import r1_c4 from './Images/r1_c4.png';
import r2_c1 from './Images/r2_c1.png';
import r2_c2 from './Images/r2_c2.png';
import r2_c3 from './Images/r2_c3.png';
import r2_c4 from './Images/r2_c4.png';

export default function Carousel_one() {
    return (
        <>

            <Carousel>

                <Carousel.Item>
                    <Container>
                        <Row>

                            <Col md={3}>
                                <Card  >
                                    <Card.Body>
                                        <Badge className="bg-danger position-absolute top-20 start-0">
                                            New
                                        </Badge>
                                        <img src={r1_c1} class="d-block w-100" alt="..." />
                                        <div className="row">
                                            <div className="col-9">
                                                <h3>TeakWood Chair</h3>
                                            </div>
                                            <div className="col-3">
                                                <h5>$24</h5>
                                            </div>
                                        </div>
                                        <Badge className="position-absolute bottom-20 start-0 bg-dark large-badge">
                                            Living Room
                                        </Badge>
                                        <i class="fa-brands fa-gratipay"></i>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <Badge className="bg-danger position-absolute top-20 start-0">
                                            New
                                        </Badge>
                                        <img src={r1_c2} class="d-block w-100" alt="..." />

                                        <div className="row">
                                            <div className="col-9">
                                                <h3>Black Chair </h3>
                                            </div>
                                            <div className="col-3">
                                                <h5>$24</h5>
                                            </div>
                                        </div>
                                        <Badge className="position-absolute bottom-20 start-0 bg-dark large-badge">
                                            Living Room
                                        </Badge>
                                        <i class="fa-brands fa-gratipay"></i>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <Badge className="bg-danger position-absolute top-20 start-0">
                                            New
                                        </Badge>
                                        <Badge className="bg-danger position-absolute top-20 start-0">
                                            New
                                        </Badge>
                                        <img src={r1_c3} class="d-block w-100" alt="..." />

                                        <div className="row">
                                            <div className="col-9">
                                                <h3>Stool Table </h3>
                                            </div>
                                            <div className="col-3">
                                                <h5>$24</h5>
                                            </div>
                                        </div>
                                        <Badge className="position-absolute bottom-20 start-0 bg-dark">
                                            Living Room
                                        </Badge>
                                        <i class="fa-brands fa-gratipay"></i>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <Badge className="bg-danger position-absolute top-20 start-0">
                                            New
                                        </Badge>
                                        <img src={r1_c4} class="d-block w-100" alt="..." />

                                        <div className="row">
                                            <div className="col-9">
                                                <h3>Cafe Chair </h3>
                                            </div>
                                            <div className="col-3">
                                                <h5>$24</h5>
                                            </div>
                                        </div>
                                        <Badge className="position-absolute bottom-20 start-0 bg-dark large-badge">
                                            Living Room
                                        </Badge>
                                        {/* Like */}
                                        <i class="fa-brands fa-gratipay"></i>
                                        {/* Cart */}
                                        <i class="fa-solid fa-cart-shopping"></i>

                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>

                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <Badge className="bg-danger position-absolute top-20 start-0">
                                            New
                                        </Badge>
                                        <img src={r2_c1} class="d-block w-100" alt="..." />

                                        <div className="row">
                                            <div className="col-9">
                                                <h3>White Chair </h3>
                                            </div>
                                            <div className="col-3">
                                                <h5>$24</h5>
                                            </div>
                                        </div>
                                        <Badge className="position-absolute bottom-20 start-0 bg-dark large-badge">
                                            Living Room
                                        </Badge>
                                        <i class="fa-brands fa-gratipay"></i>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <Badge className="bg-danger position-absolute top-20 start-0">
                                            New
                                        </Badge>
                                        <img src={r2_c2} class="d-block w-100" alt="..." />
                                        <div className="row">
                                            <div className="col-9">
                                                <h3>Black Chair </h3>
                                            </div>
                                            <div className="col-3">
                                                <h5>$24</h5>
                                            </div>
                                        </div>
                                        <Badge className="position-absolute bottom-20 start-0 bg-dark large-badge">
                                            Living Room
                                        </Badge>
                                        <i class="fa-brands fa-gratipay"></i>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        {/* New Badge */}
                                        <Badge className="bg-danger position-absolute top-20 start-0">
                                            New
                                        </Badge>
                                        <img src={r2_c3} class="d-block w-100" alt="..." />
                                        <div className="row">
                                            <div className="col-9">
                                                <h3>Pink Chair</h3>
                                            </div>
                                            <div className="col-3">
                                                <h5>$24</h5>
                                            </div>
                                        </div>


                                        {/* Living Room Badge */}
                                        <Badge className="position-absolute bottom-20 start-0 bg-dark large-badge">
                                            Living Room
                                        </Badge>
                                        <i class="fa-brands fa-gratipay"></i>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <Badge className="bg-danger position-absolute top-20 start-0">
                                            New
                                        </Badge>
                                        <img src={r2_c4} class="d-block w-100" alt="..." />

                                        <div className="row">
                                            <div className="col-9">
                                                <h3>Green Chair </h3>
                                            </div>
                                            <div className="col-3">
                                                <h5>$24</h5>
                                            </div>
                                        </div>
                                        <Badge className="position-absolute bottom-20 start-0 bg-dark large-badge">
                                            Living Room
                                        </Badge>
                                        <i class="fa-brands fa-gratipay"></i>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>

                <Carousel.Item>
                    <Container>
                        <Row>
                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <Badge className="bg-danger position-absolute top-20 start-0">
                                            New
                                        </Badge>
                                        <img src={r1_c1} class=" pos_relative pos_relative d-block w-100" alt="..." />

                                        <div className="row">
                                            <div className="col-9">
                                                <h3>Teakwood Chair </h3>
                                            </div>
                                            <div className="col-3">
                                                <h5>$24</h5>
                                            </div>
                                        </div>
                                        <Badge className="position-absolute bottom-20 start-0 bg-dark large-badge">
                                            Living Room
                                        </Badge>
                                        <i class="fa-brands fa-gratipay"></i>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <Badge className="bg-danger position-absolute top-20 start-0">
                                            New
                                        </Badge>
                                        <img src={r1_c2} class="d-block w-100" alt="..." />

                                        <div className="row">
                                            <div className="col-9">
                                                <h3>Black Chair </h3>
                                            </div>
                                            <div className="col-3">
                                                <h5>$24</h5>
                                            </div>
                                        </div>
                                        <Badge className="position-absolute bottom-20 start-0 bg-dark large-badge">
                                            Living Room
                                        </Badge>
                                        <i class="fa-brands fa-gratipay"></i>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <Badge className="bg-danger position-absolute top-20 start-0">
                                            New
                                        </Badge>
                                        <img src={r1_c3} class="d-block w-100" alt="..." />

                                        <div className="row">
                                            <div className="col-9">
                                                <h3>Stool/Table </h3>
                                            </div>
                                            <div className="col-3">
                                                <h5>$24</h5>
                                            </div>
                                        </div>
                                        <Badge className="position-absolute bottom-20 start-0 bg-dark large-badge">
                                            Living Room
                                        </Badge>
                                        <i class="fa-brands fa-gratipay"></i>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <Badge className="bg-danger position-absolute top-20 start-0">
                                            New
                                        </Badge>
                                        <img src={r1_c4} class="d-block w-100" alt="..." />

                                        <div className="row">
                                            <div className="col-9">
                                                <h3>Cafe Chair </h3>
                                            </div>
                                            <div className="col-3">
                                                <h5>$24</h5>
                                            </div>
                                        </div>
                                        <Badge className="position-absolute bottom-20 start-0 bg-dark large-badge">
                                            Living Room
                                        </Badge>
                                        <i class="fa-brands fa-gratipay"></i>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <Badge className="bg-danger position-absolute top-20 start-0">
                                            New
                                        </Badge>
                                        <img src={r2_c1} class="d-block w-100" alt="..." />

                                        <div className="row">
                                            <div className="col-9">
                                                <h3>White Chair </h3>
                                            </div>
                                            <div className="col-3">
                                                <h5>$24</h5>
                                            </div>
                                        </div>
                                        <Badge className="position-absolute bottom-20 start-0 bg-dark large-badge">
                                            Living Room
                                        </Badge>
                                        <i class="fa-brands fa-gratipay"></i>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <Badge className="bg-danger position-absolute top-20 start-0">
                                            New
                                        </Badge>
                                        <img src={r2_c2} class="d-block w-100" alt="..." />
                                        <div className="row">
                                            <div className="col-9">
                                                <h3>Black Chair </h3>
                                            </div>
                                            <div className="col-3">
                                                <h5>$24</h5>
                                            </div>
                                        </div>
                                        <Badge className="position-absolute bottom-20 start-0 bg-dark large-badge">
                                            Living Room
                                        </Badge>
                                        <i class="fa-brands fa-gratipay"></i>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <Badge className="bg-danger position-absolute top-20 start-0">
                                            New
                                        </Badge>

                                        <img src={r2_c3} class="d-block w-100" alt="..." />
                                        <div className="row">
                                            <div className="col-9">
                                                <h3>Pink Chair </h3>
                                            </div>
                                            <div className="col-3">
                                                <h5>$24</h5>
                                            </div>
                                        </div>
                                        <Badge className="position-absolute bottom-20 start-0 bg-dark large-badge">
                                            Living Room
                                        </Badge>
                                        <i class="fa-brands fa-gratipay"></i>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <Badge className="bg-danger position-absolute top-20 start-0">
                                            New
                                        </Badge>
                                        <img src={r2_c4} class="d-block w-100" alt="..." />

                                        <div className="row">
                                            <div className="col-9">
                                                <h3>Green Chair </h3>
                                            </div>
                                            <div className="col-3">
                                                <h5>$24</h5>
                                            </div>
                                        </div>
                                        <Badge className="position-absolute bottom-20 start-0 bg-dark large-badge">
                                            Living Room
                                        </Badge>
                                        {/* Like Button */}
                                        <i class="fa-brands fa-gratipay"></i>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
            </Carousel>

        </>
    )
}
