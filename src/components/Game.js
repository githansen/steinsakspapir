import {Container, Row, Col, Modal, ModalTitle} from "react-bootstrap";
import rock from "../images/ROCK.png"
import paper from "../images/PAPER.png"
import scissor from "../images/SCISSORS.png"
import "./game.css"
import {useState} from "react";
import {Header} from "./Header";
import {Scoreboard} from './Scoreboard'



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

let user = 0
let pcpick = 0
export const Game = ()=>{
    const [player, setPlayer] = useState(0)
    const [show, setShow] = useState(false)
    const[pc, setPc] = useState(0)
    const[vinner, setVinner] = useState("")
    const[pcchoice, setPcchoice] = useState(rock)
    const [playerchoice, setPlayerchoice] = useState(rock)
    let final = ""
    const handleClose = () =>setShow(false)
    const [finalwinner, setFinalwinner] = useState(false)
    function sjekkresultat(verdi){
        pcpick = Math.floor(Math.random() * 3)
        setPcchoice(pics[pcpick])
        setPlayerchoice(pics[verdi])
        user=verdi
        if(items[verdi].beats === items[pcpick].name){
            setPlayer(player => player+1)
            setVinner("player")
            if(player === 2)final="player"
        }
        else if(items[pcpick].beats === items[verdi].name){
            setPc(pc => pc+1)
            setVinner("pc")
            if(pc === 2)final="pc"
        }
        else {
            setVinner("draw")
        }
        setShow(true);
        if(final !== "") {
            setFinalwinner(true)

        }
    }

    const reset =()=>{
        setPlayer(0)
        setPc(0)
        setShow(false)
        final =""
        setFinalwinner(false)

    }
            return (
                <Container>
                    <Row style={{backgroundColor: "grey", height: "100px"}}>

                    </Row>
                    <Row style={{marginTop: "55px"}}>
                        <Col sm={0} md={0} lg={3}></Col>
                        <Col sm={12} md={12} lg={6}>
                            <img src={rock} alt={'pic of rock'} style={{border: "5px solid", margin: "5px"}} value={0}
                                 onClick={() => sjekkresultat(0)}/>
                            <img src={paper} alt={'pic of paper'} style={{border: "5px solid", margin: "5px"}} value={1}
                                 onClick={() => sjekkresultat(1)}/>
                            <img src={scissor} alt={'pic of scissor'} style={{border: "5px solid", margin: "5px"}}
                                 value={2} onClick={() => sjekkresultat(2)}/>
                        </Col>
                        <Col sm={0} md={0} lg={3}></Col>
                    </Row>

                    <Scoreboard myprop={{player, pc}}/>

                    {!finalwinner ? (


                    <Modal show={show} onHide={handleClose} backdrop={"static"}>
                        <Modal.Header closeButton style={{backgroundColor: "lightgrey"}}>
                        </Modal.Header>
                        <Row>
                            <Col sm={6} md={6} lg={6} className="d-none d-sm-block">
                                <h2 style={{textAlign: "center"}}>YOU:</h2>
                            </Col>
                            <Col sm={6} md={6} lg={6} className="d-none d-sm-block">
                                <h2 style={{textAlign: "center"}}>PC:</h2>
                            </Col>
                            <Col xs={6} className="d-xs-block d-sm-none d-md-none d-lg-none">You
                                chose {items[user].name}</Col>
                            <Col xs={6} className="d-xs-block d-sm-none d-md-none d-lg-none">PC
                                chose {items[pcpick].name}</Col>
                        </Row>
                        <Row>
                            <Col sm={6} md={6} lg={6} style={{}} className="d-none d-sm-block">
                                <img src={playerchoice} style={{height: "100%", width: "100%"}}/></Col>
                            <Col sm={6} md={6} lg={6} style={{}} className="d-none d-sm-block">
                                <img src={pcchoice} style={{height: "100%", width: "100%"}}/>
                            </Col>
                        </Row>

                        <h2>The winner is: {vinner} </h2>

                    </Modal>
                    ) : (
                        <Modal show={show} onHide={reset} backdrop={"static"}>
                            <Modal.Header closeButton style={{backgroundColor: "lightgrey", textAlign: "center"}}>
                                GAME OVER
                            </Modal.Header>
                            <Row>
                                <Col sm={6} md={6} lg={6} style={{textAlign: "center", fontSize: "25px"}}>
                                    You: <br/>
                                    {player}
                                </Col>
                                <Col sm={6} md={6} lg={6} style={{textAlign: "center", fontSize: "25px"}}>
                                    PC: <br/>
                                    {pc}
                                </Col>
                            </Row>
                            <Row>
                                {vinner === "player" ?(
                                    <h1>PLAYER WON</h1>
                                ) : (
                                    <h1>PC WON</h1>
                                )}


                            </Row>
                        </Modal>
                    )}
                </Container>
            )


}
