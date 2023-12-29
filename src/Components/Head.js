import React,{useState} from "react";
import { Box, Flex, Heading, Stack } from "@chakra-ui/layout";

import './Head.css';
import { Link } from "react-router-dom";
function Head(){
    const [Start, setStart] = useState(false);
    const GameHandler = () => {
        setStart(true);
      };

    return(
        <>
            {Start ? (
                <div className="frontbody">
                    <>
                    <div className="NarBar">
                        <img className="logo" src={require(`./me1.jpg`)} />
                        <Link to='register' className="link">Register</Link>
                    </div>
                    <ol>
                        <Link to='Home' className="link">Home</Link>
                        <Link to='DiceScore' className="link">Dice-Score</Link>
                        <Link to='Diceroll' className="link">Diceroll</Link>
                        <Link to='Calculate' className="link">SI-Calculate</Link>
                        {/* <Link to='NoGenerate' className="link">No-Genarate</Link> */}
                        <Link to='Contact' className="link">ContactMe</Link>
                    </ol>
                
                 </>
                </div>
            ):(
                <center>
                    <div className="ddddd">
                    <h1>Welcome My Dear Friends, To My Game World</h1>
                    <Flex justify="center" align="center" className="bodyfron">
                        <Stack className="box1">
                            {/* <h6> The Dice Game</h6> */}
                            <img src={require(`./assets/6.png`)} alt="Rotated Image" class="rotated-image"/>
                            <img src={require(`./assets/5.png`)} alt="Rotated Image" class="rotated-image"/>
                            <img src={require(`./assets/3.png`)} alt="Rotated Image" class="rotated-image"/>
                        </Stack>
                        <Stack  className="box2">
                        {/* <h6> The Dice Game</h6> */}
                            <img className="forntlogo" src={require(`./assets/20 (1).png`)}/>
                        </Stack>
                        <Stack  className="box3">
                            <h6 justify="center" align="center">To Play Game Click on 'Start Game'</h6>
                            <button className="indexbutton" onClick={GameHandler}>Start Game</button>
                        </Stack>
                        <Stack  className="box4">
                            <img src={require(`./assets/6.png`)} alt="Rotated Image" class="rotated-image"/>
                            <img src={require(`./assets/5.png`)} alt="Rotated Image" class="rotated-image"/>
                            <img src={require(`./assets/3.png`)} alt="Rotated Image" class="rotated-image"/>
                        </Stack>
                    </Flex>
                    </div>
                </center>
            )}
        </>
    )

}
export default Head;