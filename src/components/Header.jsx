import React from "react";
import Typed from "react-typed";

export default function Header({ resumeData }) {
    
    const [show, setShow] = React.useState(window.innerWidth >= 768);
    
    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setShow(true);
            } else {
                setShow(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [show]);

    return (
        <React.Fragment>
            <header id="home">
                <nav id="nav-wrap">
                    <a
                        className="mobile-btn"
                        href="#nav-wrap"
                        title="Show navigation"
                        onClick={() => setShow(show)}
                    >
                        Show navigation
                    </a>
                    <a
                        className="mobile-btn"
                        href="#nav-wrap"
                        title="Hide navigation"
                        onClick={() => setShow(!show)}
                    >
                        Hide navigation
                    </a>
                    <ul id="nav" className={show? "nav" : "hidden_nav"}>
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
                            <a className="smoothscroll" href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>

                <div
                    className="banner"
                    style={{ display: "inline-flex", flexDirection: "row" }}
                >
                    <div>
                        <img
                            src="https://iili.io/HuYX494.png"
                            alt="me"
                            sizes="50px"
                            className="hidden_img"
                        />
                    </div>
                    <div className="banner-text">
                        <h1>
                            Hi , I'm Ahmed Hossam{" "}
                            <img
                                src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
                                width="60rem"
                                alt="wave"
                                className="wave_img"
                            />
                        </h1>
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