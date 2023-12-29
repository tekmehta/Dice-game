import React, {useState} from "react";
import { Button } from "@chakra-ui/button";
import './dicescore.css';
import { ListItem } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/layout";
import { List } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Box, Flex, Heading, Stack } from "@chakra-ui/layout";
const DiceScore = () => {
    const [gameStarted, setGameStarted] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [dice, setDice] = useState(1);
  const [error, setError] = useState(null);
  const [score, setScore] = useState(0);
  const numbers = [1, 2, 3, 4, 5, 6];
  const startGameHandler = () => {
    setGameStarted(true);
  };
  const onNumberClicked = (value) => {
    setSelectedNumber(value);
    setError(null);
  };
  const genRandomNo = () => {
    if (selectedNumber) {
      const genratedNo = Math.ceil(Math.random() * 6);
      setDice(genratedNo);

      if (selectedNumber === genratedNo) {
        setScore((prev) => prev + genratedNo);
      } else {
        setScore((prev) => prev - 1);
      }
    } else {
      setError("Please Select Number");
    }
  };
  return(
    <div className="dicebody">
        <>
      {gameStarted ? (
        <>
          <Stack justify="center" align="center">
            <Heading
              as="h2"
              color={error ? "red" : "black"}
              fontSize="6xl"
              mb="8"
            >
              {error ? error : "Select Number"}
            </Heading>
            <Flex className="DiceNumber">
              {numbers.map((value) => (
                <Flex className="DiceNumbers" onClick={() => onNumberClicked(value)}><span>{value}</span></Flex>
              ))}
            </Flex>
            <span className="selectednumbertext">You Have Selected</span>
            <span className="selectednumdisp"><b>{selectedNumber}</b></span>
            <Box h="150px" width="150px" onClick={genRandomNo}>
              <img className="di2" src={require(`./assets/${dice}.png`)}/>

            </Box>

            <Text as="p" fontSize="20px">
              Click on dice to roll
            </Text>

            <Text
              color={score > 0 ? "green" : "red"}
              fontSize="40px"
              fontWeight="bold"
            >
              {score}
            </Text>
            <Text fontSize="20px" fontWeight="bold">
              Your Score
            </Text>
            <Button onClick={() => setScore(0)}>Reset Score</Button>
          </Stack>
        </>
      ) : (
        <Flex justify="center" align="center">
          <img className="di1" src={require(`./assets/dice.png`)}/>
          <Stack>
            <Heading fontSize="7xl" as="h1">
              {" "}
              The Dice Game
            </Heading>
            <Button
              alignSelf="flex-end"
              bg="black"
              color="white"
              _hover={{ bg: "grey" }}
              onClick={startGameHandler}
            >
                Click To Start Game  
            </Button>
          </Stack>
        </Flex>
      )}
    </>
    </div>
  )
      }


export default DiceScore