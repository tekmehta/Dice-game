import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Head from './Components/Head';
import Diceroll from './Components/Diceroll';
import NoGenerate from './Components/NoGenerate';
import Register from './Components/Register';
import Calculate from './Components/Calculate';
import DiceScore from './Components/DiceScore';


const App = ()=>{
  return(
  <>
  <BrowserRouter>
  <Head />
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='/about' element= {<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/diceroll' element={<Diceroll/>}/>
        {/* <Route path='/nogenerate' element={<NoGenerate/>}/> */}
        <Route path='/register' element={<Register/>}/>
        <Route path='/calculate' element={<Calculate/>}/>
        <Route path='/DiceScore' element={<DiceScore/>} />
    </Routes>
  </BrowserRouter>
  </>
)};

export default App;