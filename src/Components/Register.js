import React, { useRef } from "react";
import './register.css'

const Register = () => {
    const formRef = useRef(null);
    function alerts() {
        setTimeout(() => {
          alert('Congratulation, Successfully Register');
        });
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        formRef.current.reset();
      };
    return(
        <div className="regbody">
            <center>
            <form  onSubmit={handleSubmit} ref={formRef}>
            <table border={1} className="table1">
                    <tr>
                        <th>Name:-</th>
                        <th><input required type="text" placeholder="Enter Your Name"/></th>
                    </tr>
                    <tr>
                        <th>Gender:-</th>
                        <th>
                            <input type="radio" name="gender"/> Male 
                            <input type="radio" name="gender"/> Female 
                            <input type="radio" name="gender"/> Other 
                        </th>
                    </tr>
                    <tr>
                        <th>Address:-</th>
                        <th><input required type="text" placeholder="Enter Your Address"/></th>
                    </tr>
                    <tr>
                        <th>Email:-</th>
                        <th><input required type="email" placeholder="Enter Your Email"/></th>
                    </tr>
                    <tr>
                        <th>Password:-</th>
                        <th><input required type="password" placeholder="Enter Your Password"/></th>
                    </tr>
                </table>
                <tr><td><button value="Sumit" onClick={alerts}>Sumit</button></td></tr>

            </form>
                {/* <table>
                <tr><td><button value="Sumit" onClick={showAlertWithDelay}>Sumit</button></td></tr>
                </table> */}
            </center>
        </div>
    )
}

export default Register;