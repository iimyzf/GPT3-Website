import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
    return (
        <div className="gpt3--footer section--padding" id="footer">
            <div className="gpt3--footer-heading">
                <h1 className="gradient--text">
                    Do you want to step in to the future before others
                </h1>
            </div>
            <div className="gpt3--footer-btn">
                <p className="gpt3--footer-button">Request Early Access</p>
            </div>
            <div className="gpt3--footer-links">
                <div className="gpt3--footer-links-logo">
                    <img src={logo} alt="logo" />
                    <p>
                        Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
                    </p>
                </div>
                <div className="gpt3--footer-links-div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3--footer-links-div">
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3--footer-links-div">
                    <h4>Get In Touch</h4>
                    <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p>085-132567</p>
                    <p>info@payme.net</p>
                </div>
            </div>
            <div className="gpt3--footer-copyright">
                <p>© 2023 GPT-3. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
