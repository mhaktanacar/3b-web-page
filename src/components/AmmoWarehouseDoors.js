import React, { Component } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import ammo from '../util/ammo.jpeg'
import ammoVideo from '../util/ammo.mp4'
import Image from 'react-bootstrap/Image'
import { Player } from 'video-react';

class AmmoWarehouseDoors extends Component {
    render() {
        return (
            <div>
                <Row>
                <h1>Cephane Depo Kapıları</h1>
<br></br>
<br></br>
                    <Card>

                        <div style={{ textAlign: 'center' }}>
                            <Image src={ammo} style={{ maxWidth: '600px', maxHeight: '300px', width: '100%', height: 'auto', objectFit: 'cover ', marginTop: '10px' }} alt="panelwall" />

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

                <br></br>
                <Row>
                    <h3>Örnek Video:</h3>
                    <Player
                        playsInline
                        responsive
                        src={ammoVideo}
                    />
                </Row>
            </div>

        )
    }
}

export default AmmoWarehouseDoors