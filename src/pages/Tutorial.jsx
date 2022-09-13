import React from "react";
import { Link } from "react-router-dom";
import "../styles/tutorial.scss";
import logo from "../assets/PoseidonLogoDark.svg";
import TutorialHeader from "../components/TutorialHeader";

function Tutorial() {
    return (
        <div className="tutorial">
            <TutorialHeader />
            <h1>TUTORIAL</h1>
            <Link to="/">Start</Link>
        </div>
    );
}

export default Tutorial;
