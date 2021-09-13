import React from "react";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner">
            <h1 className="title">BIENVENIDO</h1>
            <div className="images">
                <img className="salad" src="../assets/img/salad.jpg" alt="salad" />
                <img className="donus" src="../assets/img/donas.jpg" alt="donas" />
            </div>
            <div className="container-pharse">
                <h6 className="phrase">
                    Queremos ayudarte en tu fecha especial y que sea de tu agrado tu
                    experiencia con nosotros
                </h6>
            </div>
            <div className="filters">
                <a href="#ellos">
                    <img className="bigote" src="./assets/img/bigote.jpg" alt="bigote" />
                </a>
                <a href="#ellas">
                    <img className="moño" src="./assets/img/moño.jpg" alt="moño" />
                </a>
                <a href="#engomate">
                    <img
                        className="candies"
                        src="./assets/img/candies.jpg"
                        alt="candies"
                    />
                </a>
                <a href="#ocasiones">
                    <img className="globos" src="./assets/img/globos.jpg" alt="globos" />
                </a>
            </div>
        </div>
    );
};

export default Banner;
