import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";

const Blog = () => (
    <div className="gpt3--blog section--padding" id="blog">
        <div className="gpt3--blog-heading">
            <h1 className="gradient--text">
                A lot is happening, <br /> We are blogging about it.
            </h1>
        </div>
        <div className="gpt3--blog-container">
            <div className="gpt3--blog-container-groupA">
                <Article
                    imageUrl={blog01}
                    date="Sep 26, 2021"
                    text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                />
            </div>
            <div className="gpt3--blog-container-groupB">
                <Article
                    imageUrl={blog02}
                    date="Sep 26, 2021"
                    text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                />
                <Article
                    imageUrl={blog03}
                    date="Sep 26, 2021"
                    text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                />
                <Article
                    imageUrl={blog04}
                    date="Sep 26, 2021"
                    text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                />
                <Article
                    imageUrl={blog05}
                    date="Sep 26, 2021"
                    text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                />
            </div>
        </div>
    </div>
);

export default Blog;
