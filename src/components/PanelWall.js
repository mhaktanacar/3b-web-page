import React, { Component } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import panelwall from '../util/panelwall.jpg'
import Image from 'react-bootstrap/Image'
import { Player } from 'video-react';
import video3B from '../util/3BVideo.mp4'

class PanelWall extends Component {
    render() {
        return (
            <div>
                <Row>
                    <h1>PANEL DUVARLAR</h1>
                    <br></br>
                    <br></br>
                    <Card>

                        <div style={{ textAlign: 'center' }}>
                            <Image src={panelwall} style={{ maxWidth: '600px', maxHeight: '300px', width: '100%', height: 'auto', objectFit: 'cover ', marginTop: '10px' }} alt="panelwall" />

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
                                3B olarak bütün tehdit seviyelerini karşılayabilecek değişik duvar sistemleri önerebiliriz. Panellerin ebatları tehdit
                                seviyesini karşılayacak ve projenin ihtiyacına uygun şekilde tasarlanabilir. Paneller basit olarak gri renkli üretilebilirken
                                değişik renklerde ve desenlerde üretilebilir. Söz konusu paneller yeni bir yapı inşa etmek maksadıyla imal edilirken
                                mevcut olan yapıların tadil edilmesi maksadıyla da tasarlanıp üretilebilirler. 3B panelleri projeye uygun olarak pencere ve
                                kapıları da dahil üretim tesisinde üretilip inşaat sahasında montajın kolaylıkla yapılabileceği bir şekilde tasarlanmıştır.
                                Moduler paneller mevcut binaların dışından da takviye yapılacak şekilde imal edilmişlerdir ve zorlu hava şartlarına karşı
                                çok dayanıklıdır.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>

                <div>
                    <h3>Örnek Video:</h3>
                    <Player
                        playsInline
                        responsive
                        src={video3B}
                    />
                </div>
            </div>

        )
    }
}

export default PanelWall