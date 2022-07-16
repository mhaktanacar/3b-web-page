import React, { Component } from 'react';
import { Col, Figure, Row } from 'react-bootstrap';
import logo from '../util/3B-Protection.webp';
import logoyuksel from '../util/logoyuksel.png';
import doganlogo from '../util/doganlogo.png';
import tekallogo from '../util/tekallogo.png';
import novaslogo from '../util/novaslogo.jpeg';


class SolutionPartners extends Component {
    render() {
        return (
            <div>
                <h1>Çözüm Ortakları</h1>
                <br></br>
                <Row>
                    <Col xs={12} md={8}>
                        3B Protection Inc.
                    </Col>
                    <Col xs={6} md={4}>
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={logo}
                            />

                        </Figure>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col xs={12} md={8}>
                        Yüksel Güvenlik
                    </Col>
                    <Col xs={6} md={4}>
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={logoyuksel}
                            />

                        </Figure>
                    </Col>
                </Row>
                <br></br>

                <Row>
                    <Col xs={12} md={8}>
                        Doğan Tel Örgü
                    </Col>
                    <Col xs={6} md={4}>
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={doganlogo}
                            />

                        </Figure>
                    </Col>
                </Row>
                <br></br>

                <Row>
                    <Col xs={12} md={8}>
                        Tekal Yapı
                    </Col>
                    <Col xs={6} md={4}>
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={tekallogo}
                            />

                        </Figure>
                    </Col>
                </Row>
                <br></br>

                <Row>
                    <Col xs={12} md={8}>
                        NOVAS Teknoloji
                    </Col>
                    <Col xs={6} md={4}>
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={novaslogo}
                            />

                        </Figure>
                    </Col>
                </Row>
                <br></br>
            </div>
        )
    }
}

export default SolutionPartners