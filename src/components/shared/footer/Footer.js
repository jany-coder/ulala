import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa'
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'
import logo from '../../../assets/ulala.png'

const Footer = () => {
    return (
        <footer className="footer__component my-5">
            <Container>
                <Row className="align-items-center flex-column flex-lg-row justify-content-center gap-3">
                    <Col lg={2} className="d-none d-lg-block">
                        <Link to="/" className="navbar-brand">
                            <img src={logo} alt="" height="40" className="d-inline-block align-text-top" />
                        </Link>
                    </Col>
                    <Col>
                        <div className="footer-nav text-center">
                            <Link to="/" className="p-3 text-muted">Terms & Condition</Link>|
                            <Link to="/" className="p-3 text-muted">About Ads</Link>|
                            <Link to="/" className="p-3 text-muted">Privacy Policy</Link>
                        </div>
                        <small className="text-muted text-center d-block mt-3">&copy; {new Date().getFullYear()} Ulala LLC</small>
                    </Col>
                    <Col lg={2} className="d-none d-lg-block">
                        <div className="social-nav text-center">
                            <p className="text-muted mb-0">Connect with us</p>
                            <Link to="" className="p-2"><FaFacebook /></Link>
                            <Link to="" className="p-2"><AiFillTwitterCircle /></Link>
                            <Link to="" className="p-2"><AiFillInstagram /></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;