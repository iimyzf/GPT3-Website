import React from "react";
import "./possibility.css";
import possibility from "../../assets/possibility.png";

const Possibility = () => {
    return (
        <div className="gpt3--possibility section--padding" id="possibility">
            <div className="gpt3--possibility-image">
                <img src={possibility} alt="possibility" />
            </div>
            <div className="gpt3--possibility-content">
                <h1 className="gradient--text">
                    The possibilities are beyond your imagination
                </h1>
                <p>
                    Yet bed any for travelling assistance indulgence unpleasing.
                    Not thoughts all exercise blessing. Indulgence way
                    everything joy alteration boisterous the attachment. Party
                    we years to order allow asked of.
                </p>
                <h4>Request Early Access To Get Started</h4>
            </div>
        </div>
    );
};

export default Possibility;
