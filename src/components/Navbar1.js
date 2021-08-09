
import React, { Component } from 'react';
import { NavDropdown, Container, Nav, NavLink, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import './css/Navbar.css'



class Navbar1 extends Component {
    state = {}
    render() {

        const t = this.props.t
        return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink active><Link to={'/buy'} className="nav-link">{t("buy")}</Link></NavLink>&emsp;
                            <NavLink><Link to={'/sell'} className="nav-link">{t("sell")}</Link></NavLink>&emsp;
                            <NavLink><Link to={'/service'} className="nav-link">{t("service")}</Link></NavLink>&emsp;
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default withTranslation()(Navbar1);