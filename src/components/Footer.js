import React from "react"
import { FaTwitterSquare } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
export default function Main() {
    return (
        <div className="footer">
            <div className="footer-icon-container">
                <div className="footer-icons"><FaTwitterSquare size={25} /></div>
                <div className="footer-icons"><FaFacebook size={25} /></div>
                <div className="footer-icons"><FaInstagramSquare size={25} /></div>
                <div className="footer-icons"><FaGithub size={25} /></div>
            </div>
        </div>
    )
}