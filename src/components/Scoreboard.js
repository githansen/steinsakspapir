import {Container, Row, Col} from 'react-bootstrap'






export const Scoreboard = (props) =>{
    return (
        <Row>
            <Col sm={0} md={0} lg={3}></Col>
            <Col xs={12} sm={12} md={6} lg={3} style={{border: "5px solid", backgroundColor: "lightgrey", textAlign: "center", height: "50px", marginTop: "0"}}>
                <h2> Player: {props.myprop.player}</h2>
            </Col>
            <Col xs={12} sm={12} md={6} lg={3} style={{border: "5px solid", backgroundColor: "lightgrey", textAlign: "center", height: "50px", marginTop: "0"}}>
                <h2>PC: {props.myprop.pc} </h2>
            </Col>
            <Col sm={0} md={0} lg={3}></Col>
        </Row>

    )
}