import React, { Component } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import cabin from '../util/cabin.jpg'
import Image from 'react-bootstrap/Image'
import "../../node_modules/video-react/dist/video-react.css";

class Cabin extends Component {
    render() {
        return (
            <div>
                <Row>
                    <h1>Balistik/Blast Beton Kulübeler</h1>
                    <br></br>
                    <br></br>
                    <Card>

                        <div style={{ textAlign: 'center' }}>
                            <Image src={cabin} style={{ maxWidth: '600px', maxHeight: '300px', width: '100%', height: 'auto', objectFit: 'cover ', marginTop: '10px' }} alt="panelwall" />

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
                                    <li>Demonte betonarme yapıdadır. Sökülebilir, taşınabilir tekrar yeniden montajı yapılabilir.</li>
                                    <li>Betonarme kulübeler, balistik ve patlamaya dayanım tehdit seviyelerine göre üretilebilir.</li>
                                    <li>Kapı ve pencereler balistik ve blast açılabilir olarak güvenlik tehdit seviyelerine göre tasarlanmıştır</li>
                                    <li>Balistik ve patlamaya dayanımlı kapılar tehdit seviyelerine göre üretilebilir.</li>
                                    <li>Çevre güvenliğini gözetlemeye uygun tek veya çift katlı olarak üretimi yapılabilmektedir.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>

            </div>

        )
    }
}

export default Cabin