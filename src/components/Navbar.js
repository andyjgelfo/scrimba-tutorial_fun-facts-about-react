import React from "react";
import ReactDOM from "react-dom";
import reactLogo from "../images/react_logo_small.png"

export default function Navbar() {
    return (
        <nav className="headerNav">
            <span id="leftNav">
                <img src={reactLogo} alt="small react logo" id="smallReactLogo"></img>

                <h3 id="title">ReactFacts</h3>
            </span>

            <span id="rightNav">
                <p id="description">React Course - Project 1</p>
            </span>
        
        </nav>
    )
}