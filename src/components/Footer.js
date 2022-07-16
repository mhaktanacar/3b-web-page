import React, { Component } from 'react';
import logo from '../util/3B-Protection.webp';
import logoyuksel from '../util/logoyuksel.png';
import doganlogo from '../util/doganlogo.png';
import tekallogo from '../util/tekallogo.png';
import novaslogo from '../util/novaslogo.jpeg';
class Footer extends Component {
  render() {
    return (
      <footer class="bg-white">
        <div class="container py-5">
          <div class="row py-4">
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <p class="font-italic text-muted">3B Protection</p>
              <ul class="list-inline mt-4">
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
                <li class="list-inline-item"><a href="https://3bprotection.com" target="_blank" title="twitter">3B English Web Site<i class="fa fa-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" target="_blank" title="facebook"><i class="fa fa-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#" target="_blank" title="instagram"><i class="fa fa-instagram"></i></a></li>
                <li class="list-inline-item"><a href="#" target="_blank" title="pinterest"><i class="fa fa-pinterest"></i></a></li>
                <li class="list-inline-item"><a href="#" target="_blank" title="vimeo"><i class="fa fa-vimeo"></i></a></li>
              </ul>
            </div>



            <div class="col-lg-4 col-md-6 mb-lg-0">
              <h6 class="text-uppercase font-weight-bold mb-4">3B Protection TÜRKİYE İLETİŞİM</h6>
              <div class="p-1 rounded border">
                <p class="text-muted mb-4">Erol Acar TEL: 0533 527 85 69<br>
                </br>
                  TEL: +90 312 220 0000
                  <br></br>
                  BALGAT MAHALLESİ ZİYABEY CADDESİ 1416 SOKAK NO: 13
                  <br></br>
                  06520 - ÇANKAYA - ANKARA
                  <br></br>
                </p>

                <p class="text-muted mb-4">eacar@yukselguvenlik.com</p>

              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-lg-0">
              <h6 class="text-uppercase font-weight-bold mb-4"></h6>
              <div class="p-1 rounded border">
                <h1>
                  <img
                    alt=""
                    src={logo}
                    width="215"
                    height="79"
                    className="d-inline-block align-top"
                  /></h1>
                <h1>
                  <img
                    alt=""
                    src={logoyuksel}
                    width="215"
                    height="79"
                    className="d-inline-block align-top"
                  /></h1>

              </div>
            </div>



          </div>
        </div>
        <div class="bg-light py-4">
          <div class="container text-center">
            <p class="text-muted mb-0 py-2">© 3B Protection.</p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer