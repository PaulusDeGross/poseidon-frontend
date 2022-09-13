import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NotTutorialHeader } from "../components";
import { deleteCookie } from "../helper";
import "../styles/main.scss";
import logo from "../assets/PoseidonLogoDark.svg";

function Main() {
    const videoRef = useRef(null);
    const photoRef = useRef(null);

    const [hasPhoto, setHasPhoto] = useState(false);

    // TODO: Change width and height of the camera input to the needed size for NN
    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({
            video: { width: 1920, height: 1080 },
        });
    };

    return (
        <div className="main">
            <NotTutorialHeader />
            <h1>WELCOME</h1>
            <button onClick={removeCookieButton}>R-C</button>
            <div className="main__camera-container">
                <div className="main__camera-container__camera">
                    <video ref={videoRef}></video>
                    <button>SNAP</button>
                </div>
                <div
                    className={
                        "main__camera-container__result" +
                        (hasPhoto ? "hasPhoto" : "")
                    }
                >
                    <canvas ref={photoRef}></canvas>
                    <button>CLOSE</button>
                </div>
            </div>
        </div>
    );
}

function removeCookieButton() {
    deleteCookie("visited");
    window.location.href = "/";
}

function update(stream) {
    document.querySelector("video").src = stream.url;
}

export default Main;
