import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";

window.onload = function () {
    const popup = document.getElementById("popup");
    const button = document.getElementById("popupbtn");

    button.addEventListener("click", openPop);
    window.addEventListener("click", closePop);
    window.addEventListener("scroll", closePop);

    function openPop() {
        popup.style.display = "block";
    }

    function closePop(e) {
        if (e.target === popup || e.type === "scroll") {
            popup.style.display = "none";
        }
    }
};

const Header = () => {
    return (
        <div className="gpt3--header section--padding" id="home">
            <div className="gpt3--header-content">
                <h1 className="gradient--text">
                    Let's Build Something amazing with GPT-3 OpenAI
                </h1>
                <p>
                    Yet bed any for travelling assistance indulgence unpleasing.
                    Not thoughts all exercise blessing. Indulgence way
                    everything joy alteration boisterous the attachment. Party
                    we years to order allow asked of.
                </p>

                <div className="gpt3--header-content--input">
                    <input type="email" placeholder="your e-mail address" />

                    <button id="popupbtn" className="button" type="button">
                        Click Me
                    </button>

                    <div className="popup" id="popup">
                        <div className="popcard">
                            <h1>Hello There!</h1>
                            <p>
                                This page is just a static website built using{" "}
                                <b>REACT JS</b> by{" "}
                                <b>
                                    <a
                                        style={{
                                            textDecoration: "underline",
                                        }}
                                        href="https://ma.linkedin.com/in/youssaf"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        YOUSSEF AGNAOU.
                                    </a>
                                </b>
                                <br></br>Full functionality is not available.
                                Thank you for visiting ????
                            </p>
                        </div>
                    </div>
                </div>

                <div className="gpt3--header-content--people">
                    <img src={people} alt="people" />
                    <p>
                        1,600 people requested access a visit in last 24 hours
                    </p>
                </div>
            </div>

            <div className="gpt3--header-image">
                <img src={ai} alt="ai" />
            </div>
        </div>
    );
};

export default Header;
