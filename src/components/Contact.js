import React, { Component } from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import Map from './Map';

class Contact extends Component {
    render() {
        return (
            <div >
                <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} ><Card style={{ width: '24rem' }}>
                        <Card.Body>
                            <Card.Title>3B PROTECTION, INC.</Card.Title>
                            <Card.Text>
                                <p>
                                    2372 MORSE AVENUE, SUITE 354
                                    <br></br>
                                    IRVINE, CA 92614 – USA
                                    <br></br>
                                    TEL: +1 949 316 1273
                                    <br></br>
                                    FAX: +1 949 316 1274
                                    <br></br>
                                </p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>EROL ACAR</Card.Title>
                            <Card.Text>
                                <p>
                                    3B Protection Yetkili Koordinatör
                                    <br></br>
                                    TEL: 0533 527 8569
                                    <br></br>
                                    E POSTA: eacar@yukselguvenlik.com
                                    <br></br>
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card></Col>

                    <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Card style={{ width: '24rem' }}>
                        <Card.Body>
                            <Card.Title> YÜKSEL ÖZEL GÜVENLİK HİZMETLERİ A.Ş.</Card.Title>
                            <Card.Text>
                                <p>
                                    Distribütör
                                    <br></br>
                                    BALGAT MAHALLESİ ZİYABEY CADDESİ 1416 SOKAK NO: 13
                                    <br></br>
                                    06520 - ÇANKAYA - ANKARA
                                    <br></br>
                                    TEL: +90 312 220 0000
                                    <br></br>
                                    FAX: +90 312 286 6677
                                    <br></br>
                                </p>

                            </Card.Text>
                        </Card.Body>
                    </Card></Col>
                </Row>
                <br>
                </br>
                <Row>
                    <Col></Col>
                    <Col xs={8}>
                        <Map></Map>
                    </Col>
                    <Col></Col>
                </Row>
                <br></br>
                <br></br>
            </div>

        )
    }
}

export default Contact