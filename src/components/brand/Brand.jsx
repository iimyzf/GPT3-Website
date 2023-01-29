import React from "react";
import "./brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./import";

const Brand = () => {
    return (
        <div className="gpt3--brand section--padding">
            <div>
                <a href="https://www.google.com" target="_blank">
                    <img src={google} alt="google" />
                </a>
            </div>
            <div>
                <a href="https://www.slack.com" target="_blank">
                    <img src={slack} alt="slack" />
                </a>
            </div>
            <div>
                <a href="https://www.atlassian.com" target="_blank">
                    <img src={atlassian} alt="atlassian" />
                </a>
            </div>
            <div>
                <a href="https://www.dropbox.com" target="_blank">
                    <img src={dropbox} alt="dropbox" />
                </a>
            </div>
            <div>
                <a href="https://www.shopify.com" target="_blank">
                    <img src={shopify} alt="shopify" />
                </a>
            </div>
        </div>
    );
};

export default Brand;
