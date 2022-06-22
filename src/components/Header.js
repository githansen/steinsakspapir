import {Navbar, Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Header = () => {
    return(
        <Container>
            <Row>
       <Navbar bg={'dark'}>
          <Col sm={12} md={12} lg={12}> <h1 style={{color: "yellowgreen"}}>Rock, Paper, Scissors</h1> </Col>
       </Navbar>
            </Row>
        </Container>
    )
}