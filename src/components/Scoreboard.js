import {Row, Col} from 'react-bootstrap'






export const Scoreboard = (props) =>{
    return (
        <Row style={{height: "50px"}}>
            <Col sm={0} md={0} lg={3}></Col>
            <Col sm={6} md={6} lg={3} style={{border: "5px solid", backgroundColor: "lightgrey", textAlign: "center"}}>
                <h2> Player: {props.myprop.player}</h2>
            </Col>
            <Col sm={6} md={6} lg={3} style={{border: "5px solid", backgroundColor: "lightgrey", textAlign: "center"}}>
                <h2>PC: {props.myprop.pc} </h2>
            </Col>
            <Col sm={0} md={0} lg={3}></Col>
        </Row>
    )
}