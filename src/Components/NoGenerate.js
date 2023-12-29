import React,{useState} from "react";
import './nogenerate.css'
function NoGenerate(){
  const[nu, setnumb] = useState(0);
  
  const incr=()=>{
    setnumb(nu+1)
  }

  const decr=()=>{
    setnumb(nu-1)
  }

  const reset=()=>{
    (setnumb(0))
  }

  const rand=()=>{
    setnumb(Math.floor(Math.random()*6))
  }

  return(
    <div className="body">
      <center>
        <h2>Wel-Come to Calculator. You Can perform Add By 1, Substract By 1, Random number And Reset</h2>
        <p>{nu}</p>
        <div>
        <button onClick={incr}>Increase</button>
        <button onClick={decr}>Decrease</button>      
        <button onClick={rand}>Random</button>
        <button onClick={reset}>Reset</button>
      </div>
      </center>
    </div>
  )
}

export default NoGenerate;