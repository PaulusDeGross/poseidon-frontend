import React from "react";
import { Link } from "react-router-dom";
import "../styles/tutorialHeader.scss";
import logo from "../assets/PoseidonLogoLight.svg";
import { checkNow, checkVisited, deleteCookie } from "../helper";

function TutorialHeader() {
    return (
        <div className="tutorial-header">
            <div className="tutorial-header__popup" id="tutorial-header__popup">
                <div className="tutorial-header__popup__content">
                    <h1>Do you really want to quit the tutorial?</h1>
                    <button onClick={closePopup}>No</button>
                    <button
                        className="tutorial-header__popup__content__yes-button"
                        onClick={redirect}
                    >
                        Yes
                    </button>
                </div>
            </div>

            <div className="tutorial-header-header">
                <img className="logo" src={logo} alt="logo" />
                <button
                    className="tutorial-header-header__button"
                    onClick={tutorialPopup}
                >
                    X
                </button>
            </div>
        </div>
    );
}

function tutorialPopup() {
    if (!checkNow()) {
        checkVisited();
    }
    showPopup();
}

function showPopup() {
    const popup = document.getElementById("tutorial-header__popup");
    popup.style.display = "flex";
}

function closePopup() {
    const popup = document.getElementById("tutorial-header__popup");
    popup.style.display = "none";
}

function redirect() {
    window.location.href = "/app";
    deleteCookie("now");
}

export default TutorialHeader;
