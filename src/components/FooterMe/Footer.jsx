
import "./Footer.css"

import { AiFillLinkedin } from "react-icons/ai";

import { BsGithub } from "react-icons/bs"

export const Footer = ()  =>{

    return (
        <footer>
            <a href="#" className="footer__logo">EGATOR</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href=""><AiFillLinkedin /></a>
                <a href=""><BsGithub /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Rahul Rathor. All rights reserved.</small>
            </div>
        </footer>
    )
}