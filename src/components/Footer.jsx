import React from "react";
export default function Footer({ resumeData }) {
    return (
        <footer>
            <div className="row">
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
