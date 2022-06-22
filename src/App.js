import './App.css';
import {Header} from "./components/Header";
import {Container, Row, Col, Navbar} from "react-bootstrap";
import {Game} from "./components/Game"

function App() {
  return (
    <Container fluid>
        <Row>
       <Header/>
        </Row>
        <Row>
            <Game />
        </Row>
    </Container>
  );
}

export default App;
