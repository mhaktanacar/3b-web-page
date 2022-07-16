import React, { Component } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import government from '../util/government.png'
import industrial from '../util/industrial.png'
import airport from '../util/airport.png'


class Applications extends Component {
    render() {
        return (
            <Row>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img style={{height: '100%'}}variant="top" src={government} />
                    <Card.Body>
                        <Card.Title>DEVLETE AİT TESİSLER ASKERİ TESİSLER VE GÜVENLİK İLE İLGİLİ TESİSLER</Card.Title>
                        <Card.Text>
                            <ul>
                                <li>Devlet Binaları  ve Elçilikler</li>
                                <li>Muhafız Odaları ve Gözetleme Kuleleri</li>
                                <li>Kışlalar ve Askeri Konutlar</li>
                                <li>Acil Sığınakla</li>
                                <li>Perosnel Koruması İçin Acil Olarak Oluşturulması Gereken Mekanlar</li>
                                <li>Mühimmat Depoları ve Fünyelikler</li>
                                <li>Kontrol Noktaları</li>
                                <li>RF Güvenlik Odaları</li>
                                <li>Malzeme, Teçhizat, Araçların Korunması ve Emniyete Alınması İçin Oluşturulacak Tesisler</li>
                                <li>Hava Araçları İçin Hangarlar/Shelter</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card></Col>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img  style={{height: '100%'}} objectFit='cover' variant="top" src={industrial} />
                    <Card.Body>
                        <Card.Title>SANAYİ TESİSLERİ</Card.Title>
                        <Card.Text>
                            <ul>
                                <li>Enerji Santralleri</li>
                                <li>Trafo Merkezleri</li>
                                <li>Trafo Kalkanları</li>
                                <li>Basınç Test Tesisleri</li>
                                <li>Veri merkezleri</li>
                                <li>Boru Hattı Koruması </li>
                                <li>Çevre Duvarları</li>
                                <li>Güvenli Odalar</li>
                                <li>Güvenlik Personeli Nöbet Yerleri</li>
                                <li>Modüler Prefabrik Güvenlik Odaları</li>
                                <li>Varlıkların Korunması İçin Bölme Duvarları</li>
                                <li>Tesislerin Çevre Güvenlik Duvarları</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card></Col>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img  style={{height: '100%'}} objectFit='cover' variant="top" src={airport} />
                    <Card.Body>
                        <Card.Title>Sivil Amaçlı Kullanım </Card.Title>
                        <Card.Text>
                            <ul>
                                <li>Havalanları</li>
                                <li>Bankalar</li>
                                <li>Okullar, Üniversiteler</li>
                                <li>Ceza Evleri</li>
                                <li>Alışveriş Merkezleri</li>
                                <li>Adliyeler</li>
                                <li>Güvenli Odalar</li>
                                <li>Fırtınalardan Koruyucu Mekanlar</li>
                                <li>Yangınlardan Koruyucu Mekanlar</li>
                                <li>Kapılar</li>
                                <li>Paneller</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card></Col>
            </Row>
        )
    }
}

export default Applications