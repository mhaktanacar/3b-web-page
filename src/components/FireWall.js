import React, { Component } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import firewall from '../util/firewall.PNG'
import Image from 'react-bootstrap/Image'
import "../../node_modules/video-react/dist/video-react.css";

class FireWall extends Component {
    render() {
        return (
            <div>
                <Row>
                    <h1>YANGIN DUVARLARI</h1>
                    <br></br>
                    <br></br>
                    <Card>

                        <div style={{ textAlign: 'center' }}>
                            <Image src={firewall} style={{ maxWidth: '600px', maxHeight: '300px', width: '100%', height: 'auto', objectFit: 'cover ', marginTop: '10px' }} alt="panelwall" />

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
                                <p>3B değişik seviyelerde Yangına Karşı Mukavim çözümler üretmektedir. Söz konusu çözümler aynı zamanda Balistik ve
                                    Patlama Mukavemeti de içermektedir. Proje sahasındaki ihtiyaca uygun olarak briket veya panel kullanımını da
                                    kapsayan değişik inşaat metotları kullanılabilir. Yüksek hızlı rüzgarların ve sismik aktivitelerin olduğu yerler için de
                                    değişik çözüm önerileri üretilmiştir.</p>
                                <p>Paneller, dış kısmının tasarımı ve renkleri de dahil değişik ebatlarda üretilmektedir.
                                </p>
                                <br></br>
                                <ul>
                                    <li>6 Inch kalınlığında Panel / 4 Saat Ateşe Mukavemet / UL 8 Seviyesi Yangına Karşı Koruma + Parça Tesirine Karşı Mukavemet</li>
                                    <li>8 Inch kalınlığında Panel / 6 Saat Ateşe Mukavemet / UL 9 Seviyesi Yangına Karşı Koruma + Parça Tesirine Karşı Mukavemet</li>
                                    <li>10 Inch kalınlığında Panel / 8 Saat Ateşe Karşı Mukavemet / UL 10 Seviyesi Yangına karşı Mukavemet + Parça Tesirine Mukavemet</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>

            </div>

        )
    }
}

export default FireWall