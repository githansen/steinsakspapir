import {Container, Row, Col, Modal, ModalTitle} from "react-bootstrap";
import rock from "../images/ROCK.png"
import paper from "../images/PAPER.png"
import scissor from "../images/SCISSORS.png"
import "./game.css"
import {useState} from "react";
import {Header} from "./Header";



    const Rock = {
        name: "rock",
        beats: "scissor"
    }
   const Paper ={
        name: "paper",
        beats: "rock"
    }
    const Scissor= {
        name: "scissor",
        beats: "paper"
    }
let items = [Rock, Paper, Scissor]
let pics = [rock, paper, scissor]
export const Game = ()=>{
const [player, setPlayer] = useState(0)
    const [show, setShow] = useState(false)
    const[pc, setPc] = useState(0)
    const[vinner, setVinner] = useState("")
    const[pcchoice, setPcchoice] = useState(rock)
    const [playerchoice, setPlayerchoice] = useState(rock)


    const handleClose = () =>setShow(false);
    function sjekkresultat(verdi){
        let winner = ""
        let pc = Math.floor(Math.random() * 3)
        setPcchoice(pics[pc])
        setPlayerchoice(pics[verdi])
        if(items[verdi].beats === items[pc].name){
            setPlayer(player => player+1)
            setVinner("player")
        }
        else if(items[pc].beats === items[verdi].name){
            setPc(pc => pc+1)
            winner = "pc"
            setVinner("pc")
        }
        else {
            winner="draw"
            setVinner("draw")
        }
        setShow(true);
    }

    return(
        <Container>
            <Row style={{backgroundColor: "grey", height: "100px"}}>

            </Row>
            <Row style={{marginTop: "55px"}}>
                <Col sm={0} md={0} lg={3}></Col>
                <Col sm={12} md={12} lg={6}>
                    <img src={rock} alt={'pic of rock'} style={{border: "5px solid", margin: "5px"}} value={0} onClick={() => sjekkresultat(0)}/>
                    <img src={paper} alt={'pic of paper'} style={{border: "5px solid", margin: "5px"}} value={1} onClick={() => sjekkresultat(1)}/>
                    <img src={scissor} alt={'pic of scissor'} style={{border: "5px solid", margin: "5px"}} value={2} onClick={() => sjekkresultat(2)}/>
                </Col>
                <Col sm={0} md={0} lg={3}></Col>
            </Row>
            <Row style={{height: "50px"}}>
                <Col sm={0} md={0} lg={3}></Col>
                <Col sm={6} md={6} lg={3} style={{border: "5px solid", backgroundColor: "lightgrey", textAlign: "center"}}>
                    <h2> Player: {player}</h2>
                </Col>
                <Col sm={6} md={6} lg={3} style={{border: "5px solid", backgroundColor: "lightgrey", textAlign: "center"}}>
                    <h2>PC: {pc} </h2>
                </Col>
                <Col sm={0} md={0} lg={3}></Col>
            </Row>

            <Modal show={show} onHide={handleClose} backdrop={"static"}>
                <Modal.Header closeButton style={{backgroundColor: "lightgrey"}}>

                </Modal.Header>
                <Row>
                    <Col sm={6} md={6} lg={6}>
                        <h2 style={{textAlign: "center"}}>YOU:</h2>
                    </Col>
                    <Col sm={6} md={6} lg={6}>
                        <h2 style={{textAlign: "center"}}>PC:</h2>
                    </Col>
                </Row>
                <Row>
                <Col sm={6} md={6} lg={6} style={{}}>
                 <img src={playerchoice} style={{height: "100%", width: "100%"}}/></Col>
                <Col sm={6} md={6} lg={6} style={{}}>
                  <img src={pcchoice} style={{height: "100%", width: "100%"}}/>
                </Col>
                </Row>
                    <br/>
                <h2>The winner is: {vinner} </h2>
            </Modal>
        </Container>
    )
}

