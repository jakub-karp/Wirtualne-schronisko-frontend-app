import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import homeImage from '../assets/home.jpg'
function Home() {
  return (
    <div>


      {/* Sekcja 1 */}
      <section className="py-5">
        <Container>
          <Row>
            <Col md={6}>
              <img src={homeImage} alt="placeholder" className="img-fluid mb-3" />
            </Col>
            <Col md={6}>
              <h2 className="mb-4">Pomóż zwierzakom znaleźć nowy dom!</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit tellus euismod,
                posuere eros eget, fringilla justo. Aenean luctus urna quis justo tempor, eu
                pharetra est fringilla. Proin commodo ligula eu nibh commodo, non rhoncus dolor
                suscipit. Maecenas vel nunc eget urna luctus bibendum. Fusce feugiat viverra lacus
                vitae bibendum. In hac habitasse platea dictumst.
              </p>
              <Button variant="secondary">Dowiedz się więcej</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sekcja 2 */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="mb-4">Wybierz w jaki sposób chcesz pomagać zwierzętom!</h2>
          <p>Chcemy, aby każdy pupil czuł się dobrze. Rozumiemy, że nie każdy może podjąć się fizycznej adopcji,
            dlatego chcemy umożliwić wirtualną adopcję, w której możesz wpłacać pieniądze na wybranego pupila
            lub umówić się z nim na długi spacer!</p>
          <Row>
            <Col md={4}>
              <img src={homeImage} alt="placeholder" className="img-fluid mb-3" />
              <h4>Adoptuj</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit tellus euismod,
                posuere eros eget, fringilla justo.
              </p>
              <Button variant="secondary">Dowiedz się więcej</Button>
            </Col>
            <Col md={4}>
              <img src={homeImage} alt="placeholder" className="img-fluid mb-3" />
              <h4>Wpłacaj</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit tellus euismod,
                posuere eros eget, fringilla justo.
              </p>
              <Button variant="secondary">Dowiedz się więcej</Button>
            </Col>
            <Col md={4}>
              <img src={homeImage} alt="placeholder" className="img-fluid mb-3" />
              <h4>Spaceruj</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit tellus euismod,
                posuere eros eget, fringilla justo.
              </p>
              <Button variant="secondary">Dowiedz się więcej</Button>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Sekcja 3 */}
      <section className="py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h2 className="mb-4">Wspieraj zwierzęta, zawsze i wszędzie!</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit tellus euismod,
                posuere eros eget, fringilla justo. Aenean luctus urna quis justo tempor, eu
                pharetra est fringilla. Proin commodo ligula eu nibh commodo, non rhoncus dolor
                suscipit. Maecenas vel nunc eget urna luctus bibendum. Fusce feugiat viverra lacus
                vitae bibendum. In hac habitasse platea dictumst.
              </p>
              <Button variant="secondary">Wesprzyj!</Button>
            </Col>
            <Col md={6}>
              <img src={homeImage} alt="placeholder" className="img-fluid mb-3" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;