import './App.css';
import {Container, Nav, Navbar, Row, Col} from 'react-bootstrap';

import logo from './img/logo.png';
import goods4 from './img/cont3_cake4.png';

function App() {
  return (
    <div className="App">
      {/* header 영역 */}
          <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" height="30" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">카페파스쿠찌</Nav.Link>
            <Nav.Link href="#menu">메뉴</Nav.Link>
            <Nav.Link href="#store">매장안내</Nav.Link>
            <Nav.Link href="#notice">공지사항</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* 비주얼 배너 영역 */}
      <div className='main-bg'></div>

      {/* 리스트 영역 */}
      <Container>
        <Row>
          <Col><img src="https://raw.githubusercontent.com/olj23666-sys/react/refs/heads/main/img/cont3_cake7.png" alt="cake7" />
          <h4>상품 1-url</h4>
          <p>상품 1 설명</p></Col>

          <Col><img src="https://raw.githubusercontent.com/olj23666-sys/react/refs/heads/main/img/cont3_cake6.png" alt="cake6" />
          <h4>상품 2-url</h4>
          <p>상품 2 설명</p></Col>

          <Col><img src="https://raw.githubusercontent.com/olj23666-sys/react/refs/heads/main/img/cont3_cake5.png" alt="cake5" />
          <h4>상품 3-url</h4>
          <p>상품 3 설명</p></Col>

          {/* src>img 폴더 이미지 가져오기 */}
          <Col><img src={goods4} alt="cake4" />
          <h4>상품 4-url</h4>
          <p>상품 4 설명</p></Col>
          {/* public>img 폴더 이미지 가져오기 */}
          <Col>
          <img src="/img/cont3_cake2.png" alt="cake2" width="180" />
          <h4>상품 4-url</h4>
          <p>상품 4 설명</p></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
