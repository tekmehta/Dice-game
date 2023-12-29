import React,{useState} from 'react';
import './diceroll.css';
function Diceroll() {
  const[nu, setnu]= useState(5);
  const[nu1, setnu1]= useState(2);
  const[nu2, setnu2]= useState(6);
  const[nu3, setnu3]= useState(3);
  const change=()=>{
    const ransm= Math.floor(Math.random()*6)+1;
    const ransm1= Math.floor(Math.random()*6)+1;
    const ransm2= Math.floor(Math.random()*6)+1;
    const ransm3= Math.floor(Math.random()*6)+1;
    setnu(ransm);
    setnu1(ransm1);
    setnu2(ransm2);
    setnu3(ransm3);
    
    const numArray = [ransm, ransm1, ransm2, ransm3];
    function checkWin() {
      const numberCounts = {};
      numArray.forEach((num) => {
        numberCounts[num] = (numberCounts[num] || 0) + 1;
      });
      const hasMatch = Object.values(numberCounts).some((count) => count >= 3);
      return hasMatch ? "Congratulation, You Win !!!  Please Check The Number" : "You Lose!!!  Sorry, Please Try Again";
    }
    const result = checkWin();
    // alert(result);
    setTimeout(() => {
      alert(result);
    }, 1000);
  }
  
  return (
    <center>
          <div className='dicebdy'>
          <h3>Click on "Play" button if u got three matching number the you win else lose</h3>
            <div>
              <img className='di' src={require(`./assets/${nu}.png`)} height={200}/>
              <img className='di' src={require(`./assets/${nu1}.png`)} height={200}/>
            </div>
            <button onClick={change} className='button'>Play</button>
            <div>
              <img className='di' src={require(`./assets/${nu2}.png`)} height={200}/>
              <img className='di' src={require(`./assets/${nu3}.png`)} height={200}/>
            </div>
          </div>
    </center>
  );
}

export default Diceroll;
