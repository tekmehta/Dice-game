import React from "react";
import ContButton from "./ContButton";

const Contact = () => {
    return(
        <div className="contact">
            <center>
                <h1><b><u>Useful Website</u></b></h1>
                <h2><b><u>Choose Any Of These To Contact</u></b></h2>
                <ContButton name="Github" link="https://github.com/tekmehta"/>
                <ContButton name="Linkedin" link="https://www.linkedin.com/in/tek-narayan-mehta-01671a170/"/>
                <ContButton name="Telegram" link="https://t.me/+9779824765952"/>
                <ContButton name="Facebook" link="https://www.facebook.com/tek.narayan.505/"/>
                <ContButton name="Gmail" link="https://mail.google.com/mail/u/0/#inbox"/>
            </center>
        </div>
    )
};
export default Contact;