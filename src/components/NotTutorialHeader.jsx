import React from "react";
import { Link } from "react-router-dom";
import "../styles/notTutorialHeader.scss";
import logo from "../assets/PoseidonLogoLight.svg";

function NotTutorialHeader() {
    return (
        <div className="not-tutorial-header">
            <img className="logo" src={logo} alt="logo" />
            <button className="not-tutorial-header__button" onClick={redirect}>
                ?
            </button>
        </div>
    );
}

function redirect() {
    window.location.href = "/tutorial";
}

export default NotTutorialHeader;
