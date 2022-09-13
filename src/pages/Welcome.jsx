import React from "react";
import "../styles/welcome.scss";
import logo from "../assets/PoseidonLogoDark.svg";
import { checkVisited, firstTimeStarted } from "../helper";

function Welcome() {
    return (
        <div className="welcome">
            {checkVisited()}
            <div className="welcome-header">
                <img className="welcome-header__logo" src={logo} alt="logo" />
                <h1 className="welcome-header__heading">WELCOME</h1>
                <button
                    className="welcome-header__button"
                    onClick={firstTimeStarted}
                >
                    START
                </button>
            </div>
        </div>
    );
}

export default Welcome;
