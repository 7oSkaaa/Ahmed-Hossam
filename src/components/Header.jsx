import React from "react";
import Typed from "react-typed";

export default function Header({ resumeData }) {

    const [curr_tab, setCurrTab] = React.useState("home");

    function isBottom(el){
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    trackScrolling = () => {

        const homeWrapped = document.getElementById('home');
        const aboutWrapped = document.getElementById('about');
        const resumerapped = document.getElementById('resume');
        const portfolioWrapped = document.getElementById('portfolio');
        const contactWrapped = document.getElementById('contact');

        if (this.isBottom(homeWrapped)) {
            setCurrTab("home");
            document.removeEventListener('scroll', trackScrolling);
        }
        if (this.isBottom(aboutWrapped)) {
            setCurrTab("about");
            document.removeEventListener('scroll', trackScrolling);
        }
        if (this.isBottom(resumerapped)) {
            setCurrTab("resume");
            document.removeEventListener('scroll', trackScrolling);
        }
        if (this.isBottom(portfolioWrapped)) {
            setCurrTab("portfolio");
            document.removeEventListener('scroll', trackScrolling);
        }
        if (this.isBottom(contactWrapped)) {
            setCurrTab("contact");
            document.removeEventListener('scroll', trackScrolling);
        }
    };


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
                        <li className={curr_tab === "home" ? "current" : ""}>
                            <a className="smoothscroll" href="#home" onClick={() => setCurrTab("home")}>
                                Home
                            </a>
                        </li>
                        <li className={curr_tab === "about" ? "current" : ""}>
                            <a className="smoothscroll" href="#about" onClick={() => setCurrTab("about")}>
                                About
                            </a>
                        </li>
                        <li className={curr_tab === "resume" ? "current" : ""}>
                            <a className="smoothscroll" href="#resume" onClick={() => setCurrTab("resume")}>
                                Resume
                            </a>
                        </li>
                        <li className={curr_tab === "portfolio" ? "current" : ""}>
                            <a className="smoothscroll" href="#portfolio" onClick={() => setCurrTab("portfolio")}>
                                Works
                            </a>
                        </li>
                        <li className={curr_tab === "contact" ? "current" : ""}>
                            <a className="smoothscroll" href="#contact" onClick={() => setCurrTab("contact")}>
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
                            src="https://iili.io/Ha7sVI9.webp"
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
