import { Col, Row } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import './App.css';
import Applications from './components/Applications';
import BSolution from './components/BSolution';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Catalog from './components/Catalog';
import CatalogYuksel from './components/CatalogYuksel';
import Navigation from './components/Navigation';
import PanelWall from './components/PanelWall';
import Cabin from './components/Cabin';
import FireWall from './components/FireWall';
import GuardGates from './components/GuardGates';
import AmmoWarehouseDoors from './components/AmmoWarehouseDoors';
import TWall from './components/TWall';
import Problem from './components/Problem';
import Solution from './components/Solution';
import SolutionPartners from './components/SolutionPartners';
import line from './util/red-green-bar.webp';

function App() {
  return (
    <div>
      <div>
        <br></br>
        <Row>
          <Col></Col>
          <Col xs={8}>
            <Header />
          </Col>
          <Col></Col>
        </Row>
      </div>
      <div>
        <br></br>
        <Row>
          <Col></Col>
          <Col xs={8}>
            <Navigation />
          </Col>
          <Col></Col>
        </Row>
      </div>
      <br></br>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <img
            alt=""
            src={line}
            className="d-inline-block align-top"
          />          </Col>
        <Col></Col>
      </Row>
      <br></br>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <Route exact path='/' render={() => (
            <Solution
            />
          )} />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <Route exact path='/sorun' render={() => (
            <Problem
            />
          )} />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <Route exact path='/cozum' render={() => (
            <BSolution />
          )} />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <Route exact path='/uygulamalar' render={() => (
            <Applications />
          )} />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <Route exact path='/cozumortaklari' render={() => (
            <SolutionPartners />
          )} />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <Route exact path='/iletisim' render={() => (
            <Contact />
          )} />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={8}>
        <Route exact path='/3Bkatalog' render={() => (
          <Catalog
          />
        )} />
        </Col>
        <Col></Col>
      </Row>

      <Row>
        <Col></Col>
        <Col xs={8}>
        <Route exact path='/3BYukselkatalog' render={() => (
          <CatalogYuksel
          />
        )} />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <Route exact path='/panelduvar' render={() => (
            <PanelWall
            />
          )} />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <Route exact path='/nizamiyeKapilari' render={() => (
            <GuardGates
            />
          )} />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <Route exact path='/cephaneDepoKapilari' render={() => (
            <AmmoWarehouseDoors
            />
          )} />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <Route exact path='/betonKulubeler' render={() => (
            <Cabin
            />
          )} />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <Route exact path='/twall' render={() => (
            <TWall
            />
          )} />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <Route exact path='/yanginDuvarlari' render={() => (
            <FireWall
            />
          )} />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <img
            alt=""
            src={line}
            className="d-inline-block align-top"
          />
        </Col>
        <Col></Col>
      </Row>
      <div>
        <Row>
          <Col></Col>
          <Col xs={8}>
            <Footer />
          </Col>
          <Col></Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
