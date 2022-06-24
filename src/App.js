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

        <Row style={{backgroundColor: "#F8F8F8",
            borderTop: "1px solid #E7E7E7",
            textAlign: "center",
            position: "fixed",
            bottom: "0",
            height: "60px",
            width: "100%"}}>
            <Footer/>
        </Row>

    </Container>
  );
}

export default App;
