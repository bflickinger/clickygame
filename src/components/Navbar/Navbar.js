//Navbar Component
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <ul>
                    <li className="navLeft">Good Luck!</li>
                    <li className="navCenter"></li>
                    <li className="navRight">Score: {this.props.score}</li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;