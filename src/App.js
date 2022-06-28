import './App.css';
import {Header} from "./components/Header";
import {Container, Row, Col, Navbar} from "react-bootstrap";
import {Game} from "./components/Game"
import {Footer} from './components/Footer'
function App() {

  return (
    <Container fluid>
        <Row>
       <Header/>
        </Row>


        <Row>
            <Game />
        </Row>

            <Row style={{bottom: "0", position: "absolute", width: "100%"}}>
            <Footer />
            </Row>

    </Container>
  );
}

export default App;
