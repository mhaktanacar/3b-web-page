import React, { Component } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import twall from '../util/twall.PNG'
import Image from 'react-bootstrap/Image'
import "../../node_modules/video-react/dist/video-react.css";

class TWall extends Component {
    render() {
        return (
            <div>
                <Row>
                    <h1>T-Wall</h1>
<br></br>
<br></br>
                    <Card>

                        <div style={{ textAlign: 'center' }}>
                            <Image src={twall} style={{ maxWidth: '600px', maxHeight: '300px', width: '100%', height: 'auto', objectFit: 'cover ', marginTop: '10px' }} alt="panelwall" />

                        </div>
                        <div>
                            <Card.Body>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </div>


                    </Card>
                </Row>
                <Row>

                    <Card >
                        <Card.Body>
                            <Card.Text>
                                <ul>
                                    <li>Çoklu Riskler karşı kullanılan duvarlar</li>
                                    <li>12 feet genişlikte bir alanda 3000 üzerinde mermiye karşı koruma sağlar</li>
                                    <li>UL 10 Seviyesine kadar Koruma sağlar</li>
                                    <li>Çabuk ve Kolay Kurulum,</li>
                                    <li>Duvar üzerine uygulanabilecek renk ve desen seçenekleri</li>
                                    <li>Yüksel Seviyedeki Tehdide karşı koruma sağlayacak şekilde tasarlanabilir</li>
                                    <li>Talep halinde Kapılar da dahil Anahtar Teslim çözümler,</li>
                                    <li>Uygun Fiyat.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>

            </div>

        )
    }
}

export default TWall