import React, { Component } from 'react'
import { Carousel, Col, Row } from 'react-bootstrap'
import home1 from '../util/home1.webp'
import home2 from '../util/home2.webp'
import home3 from '../util/home3.webp'

class Solution extends Component {
    render() {
        return (
            <div>
                <h1>3B PROTECTION TÜRKİYE</h1>
                <br></br>
                <Row>
                    <Col></Col>
                    <Col xs={9}>
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={home1}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={home2}

                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={home3}

                                />


                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col></Col>
                </Row>
                <br></br>
                <br />
                <h2>Balistik / Patlamalar / Zorla Giriş</h2>
                <br />
                <p>
                    <br />
                    3B Protection, Inc., Kaliforniya'da ofisleri bulunan ABD merkezli bir şirkettir. Ayrıca, ABD genelindeki kilit konumlardaki üretim tesislerine erişimimiz var. 3B ayrıca denizaşırı projeler için ürün sağlama kabiliyetine de sahiptir.
                    <br /><br />
                    3B ürün serileri, kapsamlı araştırma ve geliştirmelerden sonra geliştirilmiştir. Ürün yelpazemiz, elçilikler, elektrik şebekeleri, alt istasyonlar, mobil kuleler ve çevre duvarları için kritik altyapı güvenliği sağlar.
                    <br /><br />
                    Sertifikalı ABD laboratuvarları, balistik ve patlama artı kuvvet girişine ve yangın direncine karşı ek parçalanma testleri için UL 1-10 standartları için 3B'yi derecelendirmiştir. 3B, diğer rakip ürünlerle karşılaştırıldığında hafif, kurulumu kolay ve oldukça ekonomiktir.
                    <br /><br />
                    3B ürünleri “Green Credentials” taşır ve blok, panel veya sahada dökülen hibrit karışım olarak üretilebilir. Minimum kalınlık ve ağırlıkla balistik ve yüksek patlama direnci sağlamak, ülke genelinde güvenlik yapı mühendislerini etkiledi. Örneğin; Hibrit çözümümüz, yalnızca 1,63" kalınlığında UL seviye 8 (7,62 x 51) direnç sağlar.
                    <br /><br />
                </p>
            </div>
        )
    }
}

export default Solution