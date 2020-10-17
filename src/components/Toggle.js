import React, {useState} from "react";
import {Alert} from "react-bootstrap";


export default function Toggle() {
    const [toggle, setToggle] =useState("closed")

    if (toggle) {
        return (
            <Alert variant="success" onClose={setToggle} dismissible>
                <Alert.Heading>Message Sent</Alert.Heading>
                <p>Thank you for sending me a message. I will get back to your ASAP.</p>
            </Alert>
        )
    }

    // function alert(){
    //     setToggle(toggle === "closed" ? "open" : "closed" )
    // }

    // return (
    //     <>
    //       <div className={`switch ${toggleState}`} onClick={toggle} />;  
    //     </>
    // )
    
}

