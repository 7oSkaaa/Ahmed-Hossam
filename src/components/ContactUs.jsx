import React, { Component } from "react";
export default class ContactUs extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="contact">
                <div className="row section-head">
                    <div className="ten columns">
                        <p className="lead">
                            Feel free to contact me for any work or suggestions
                            below
                        </p>
                    </div>
                </div>
                <div className="row">
                    <aside
                        className="eigth columns footer-widgets"
                        style={{ width: "100%" }}
                    >
                        <ul
                            className="widget"
                            style={{
                                ...{ display: "flex" },
                                ...{ justifyContent: "space-evenly" },
                                ...{ width: "100%" },
                                ...{ flexWrap: "wrap" },
                                ...{ gap: "5%" },
                                ...{ alignItems: "baseline" }
                              
                            }}
                        >
                            {resumeData.inTouch &&
                                resumeData.inTouch.map((item) => {
                                    return (
                                        <li
                                            key={item.name}
                                            style={{ listStyleType: "none" }}
                                        >
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
                    </aside>
                </div>
            </section>
        );
    }
}
