import React, { Component } from "react";

export default class Projects extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="portfolio">
                <div className="row">
                    <div className="sixten columns collapsed">
                        <h1 style={{...{fontWeight: "bold"}, ...{fontSize: "2.5rem"}}}>Check Out Some of My Works</h1>
                        <div
                            id="portfolio-wrapper"
                            className="bgrid-quarters"
                        >
                            {resumeData.portfolio &&
                                resumeData.portfolio.map((item) => {
                                    return item.url === "skip"? <div className="columns"></div> : (
                                        <div className="columns portfolio-item">
                                            <div className="card-wrap">
                                                <a
                                                    href={item.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <img
                                                        src={`${process.env.PUBLIC_URL}/images/portfolio/${item.imgurl}`}
                                                        className="item-img"
                                                        alt={"project_image"}
                                                    />
                                                    <div className="overlay">
                                                        <div className="portfolio-item-meta">
                                                            <h5>{item.name}</h5>
                                                            <p>
                                                                {
                                                                    item.description
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
