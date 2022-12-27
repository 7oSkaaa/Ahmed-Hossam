import React from "react";
export default function Footer({ resumeData }) {
    return (
        <footer>
            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                        {resumeData.socialLinks &&
                            resumeData.socialLinks.map((item, idx) => {
                                return (
                                    <li key={idx}>
                                        <a href={item.url}>
                                            <i className={item.className} />
                                        </a>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
                <div id="go-top">
                    <a
                        className="smoothscroll"
                        title="Back to Top"
                        href="#home"
                    >
                        <i className="icon-up-open" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
