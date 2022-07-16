import React, { Component } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import guardGate from '../util/GuardGate.PNG'
import Image from 'react-bootstrap/Image'

class GuardGates extends Component {
    render() {
        return (
            <div>
                <Row>
                    <h1>NİZAMİYE KAPILARI</h1>
                    <br></br>
                    <br></br>
                    <Card>

                        <div style={{ textAlign: 'center' }}>
                            <Image src={guardGate} style={{ maxWidth: '600px', maxHeight: '300px', width: '100%', height: 'auto', objectFit: 'cover ', marginTop: '10px' }} alt="panelwall" />

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
                                    <li>UL 10 seviyesinde balistik koruma sağlar</li>
                                    <li>Kolay montaj</li>
                                    <li>Anahtar teslim paket çözüm sunulabilir</li>
                                    <li>Yüksek süratli fırtınalar ve büyük patlayıcılar ile yapılacak ciddi saldırılara karşı koruma sağlayacak şekilde tasarlanabilir.</li>
                                </ul>

                                <ul>
                                    <li>Balistik ve patlamaya dayanımlı kapılar tehdit seviyelerine göre üretilebilir.</li>
                                    <li>Kapılar tek / çift kanat balistik ve blast beton dolgu kullanılarak daha düşük ağırlıklarda hafif olarak
                                        tasarlanmıştır.</li>
                                    <li>Kolay taşınabilir, demonte montaj yapıdadır.</li>
                                    <li>Ayarlanabilir taşıyıcı askı ve alt teker yürüyüş sistemine sahiptir.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </div>

        )
    }
}

export default GuardGates