import React, { Component } from 'react';
import { Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="justify-content-center" style={{ flex: 1 }}>
                            <Nav.Link href="/">Anasayfa</Nav.Link>
                            <Nav.Link href="/sorun">Sorun</Nav.Link>
                            <Nav.Link href="/cozum">Çözüm</Nav.Link>
                            <Nav.Link href="/uygulamalar">Uygulamalar</Nav.Link>
                            <NavDropdown title="Ürünler" id="basic-nav-dropdown">
                                <Dropdown.Item href="/panelduvar">Panel Duvarlar</Dropdown.Item>
                                <Dropdown.Item href="/nizamiyeKapilari">Nizamiye Kapıları</Dropdown.Item>
                                <Dropdown.Item href="/cephaneDepoKapilari">Cephane Depo Kapıları</Dropdown.Item>
                                <Dropdown.Item href="/betonKulubeler">Balistik/Blast Beton Kulübeler</Dropdown.Item>
                                <Dropdown.Item href="/twall">T-Wall</Dropdown.Item>
                                <Dropdown.Item href="/yanginDuvarlari">Yangın Duvarları</Dropdown.Item>

                            </NavDropdown>
                            <Nav.Link href="/3Bkatalog">3B Katalog</Nav.Link>
                            <Nav.Link href="/3BYukselkatalog">3B-Yüksel Katalog</Nav.Link>
                            <Nav.Link href="/cozumortaklari">Çözüm Ortakları</Nav.Link>
                            <Nav.Link href="/iletisim">İletişim</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Navigation