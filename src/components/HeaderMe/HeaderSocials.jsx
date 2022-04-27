
import "./Header.css"

// npm install react-icons --save

import { AiFillLinkedin } from "react-icons/ai";

import { BsGithub } from "react-icons/bs"

export const HeaderSocial = () =>{

    return (
        <div className="header__socials">
            <a href="#linkedin" target={"_blank"}><AiFillLinkedin /></a>
            <a href="#linkedin" target={"_blank"}><BsGithub /></a>
        </div>
    )
}