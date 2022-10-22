import React from "react"
// import { MdEmail } from 'react-bootstrap-icons';
// import { MdEmail } from 'react-icons';
// import { AiFillLinkedin } from 'react-bootstrap-icons';
import { MdEmail } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';

export default function Main() {
    return (
        <div className="buttons">
            <button id="email">Email</button>
            <div id="email-icon"> <MdEmail size={13}/> </div>
            <button id="linkedin">LinkedIn</button>
            <div id="linkedin-icon"> <AiFillLinkedin size={13}/> </div>
        </div>
    )
}