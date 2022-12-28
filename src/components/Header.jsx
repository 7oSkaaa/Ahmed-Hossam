import React from "react";
import Typed from 'react-typed';

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
                        <h1 className="responsive-headline" style={{fontSize: '80px'}}>Hi , I'm Ahmed Hossam <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="60rem" alt="wave" className="wave_img"/></h1>
                        <Typed
                            strings={resumeData.roleDescription}
                            typeSpeed={40}
                            backSpeed={10}
                            loop={true}
                            className="typed_strings"
                        />
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
