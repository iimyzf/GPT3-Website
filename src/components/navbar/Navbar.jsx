import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="gpt3--navbar">
            <div className="gpt3--navbar-links">
                <div className="gpt3--navbar-links-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="gpt3--navbar-links-container">
                    <p>
                        <a href="#home" rel="noreferrer">
                            Home
                        </a>
                    </p>
                    <p>
                        <a href="#wgpt3" rel="noreferrer">
                            What is GPT3?
                        </a>
                    </p>
                    <p>
                        <a href="#possibility" rel="noreferrer">
                            Open AI
                        </a>
                    </p>
                    <p>
                        <a href="#features" rel="noreferrer">
                            Case Studies
                        </a>
                    </p>
                    <p>
                        <a href="#blog" rel="noreferrer">
                            Library
                        </a>
                    </p>
                </div>
            </div>
            <div className="gpt3--navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className="gpt3--navbar-menu">
                {toggleMenu ? (
                    <RiCloseLine
                        color="#fff"
                        size={27}
                        onClick={() => setToggleMenu(false)}
                    />
                ) : (
                    <RiMenu3Line
                        color="#fff"
                        size={27}
                        onClick={() => setToggleMenu(true)}
                    />
                )}
                {toggleMenu && (
                    <div className="gpt3--navbar-menu-container scale-up-center">
                        <div className="gpt3--navbar-menu-container-links">
                            <p>
                                <a href="#home" rel="noreferrer">
                                    Home
                                </a>
                            </p>
                            <p>
                                <a href="#wgpt3" rel="noreferrer">
                                    What is GPT3?
                                </a>
                            </p>
                            <p>
                                <a href="#possibility" rel="noreferrer">
                                    Open AI
                                </a>
                            </p>
                            <p>
                                <a href="#features" rel="noreferrer">
                                    Case Studies
                                </a>
                            </p>
                            <p>
                                <a href="#blog" rel="noreferrer">
                                    Library
                                </a>
                            </p>
                        </div>
                        <div className="gpt3--navbar-menu-container-links-sign">
                            <p>Sign in</p>
                            <button type="button">Sign up</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
