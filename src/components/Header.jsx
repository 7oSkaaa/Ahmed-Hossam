import React from "react";
export default function Header({ resumeData }) {
    return (
        <React.Fragment>
            <header id="home">
                <nav id="nav-wrap">
                    <a
                        className="mobile-btn"
                        href="#nav-wrap"
                        title="Show navigation"
                    >
                        Show navigation
                    </a>
                    <a
                        className="mobile-btn"
                        href="/Ahmed-Hossam/"
                        title="Hide navigation"
                    >
                        Hide navigation
                    </a>
                    <ul id="nav" className="nav">
                        <li className="current">
                            <a className="smoothscroll" href="#home">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#about">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#resume">
                                Resume
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#portfolio">
                                Works
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#testimonials">
                                Testimonials
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">
                            I am {resumeData.name}
                        </h1>
                        <h3
                            style={{ color: "#fff", fontFamily: "sans-serif " }}
                        >
                            I am a {resumeData.role}.
                            {resumeData.roleDescription}
                        </h3>
                        <hr />
                        <ul className="social">
                            {resumeData.socialLinks &&
                                resumeData.socialLinks.map((item, idx) => {
                                    return (
                                        <li key={idx}>
                                            <a
                                                href={item.url}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <img
                                                    src={item.icon}
                                                    alt={item.name}
                                                    width={50}
                                                    height={20}
                                                />
                                            </a>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about">
                        <i className="icon-down-circle"></i>
                    </a>
                </p>
            </header>
        </React.Fragment>
    );
}
