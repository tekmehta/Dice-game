import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import './calculate.css'
const Calculate = () => {
    const [p,setp] = useState(0)
    const [t,sett] = useState(0)
    const [r,setr] = useState(0)
    const [si,setsi] = useState(0)
    // const [a,seta] = useState(0)
    const calculatesi =()=>{
        setsi(p*t*r/100)
    }
    return(
        <center>
            <div className="sibody">
                <h1>Calculate Your Interest</h1><br/><br/>
                <TextField onChange={(event)=>setp(event.target.value)} id="outlined-basic" label="Enter P" variant="outlined" /><br/><br/>
                <TextField onChange={(event)=>sett(event.target.value)} id="outlined-basic" label="Enter T" variant="outlined" /><br/><br/>
                <TextField onChange={(event)=>setr(event.target.value)} id="outlined-basic" label="Enter R" variant="outlined" /><br/><br/>
                <button onClick = {() => calculatesi()} variant="contained">Calculate</button>
                <Typography variant="h5" gutterBottom>
                    Simple Interst is :- {si} <br/>
                </Typography>
            </div>
        </center>

    )
};
export default Calculate;