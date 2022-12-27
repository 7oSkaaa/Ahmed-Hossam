import React from "react";
import Button from "react-bootstrap/Button";
import "./Projects.css";

export default function Projects({ resumeData }) {
    return (
        <section id="portfolio">
            <div className="row">
                <div className="sixten columns collapsed">
                    <h1
                        style={{
                            ...{ fontWeight: "bold" },
                            ...{ fontSize: "2.5rem" },
                        }}
                    >
                        Check Out Some of My Works
                    </h1>
                    <div
                        id="portfolio-wrapper"
                        className="bgrid-quarters container"
                    >
                        {resumeData.portfolio &&
                            resumeData.portfolio.map((item, idx) => {
                                return item.url === "skip" ? (
                                    <div className="columns" key={idx}></div>
                                ) : (
                                    <div className="card" key={idx}>
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <div className="circle">
                                                <h5
                                                    style={{
                                                        ...{
                                                            paddingTop: "5rem",
                                                        },
                                                        ...{ color: "white" },
                                                    }}
                                                >
                                                    {item.name}
                                                </h5>
                                            </div>
                                            <div className="content" style={{...{padding: "1rem"}, ...{fontWeight: "bold"}, ...{width: "100%"}}}>
                                                <div
                                                    style={{
                                                        ...{ margin: "2rem 0rem 0rem 0rem" },
                                                        ...{
                                                            display:
                                                                "-webkit-box",
                                                        },
                                                        ...{
                                                            WebkitLineClamp:
                                                                "4",
                                                        },
                                                        ...{
                                                            WebkitBoxOrient:
                                                                "vertical",
                                                        },
                                                        ...{
                                                            overflow: "hidden",
                                                        },
                                                        ...{
                                                            textOverflow:
                                                                "ellipsis",
                                                        },
                                                        ...{
                                                            padding: "0rem",
                                                        }
                                                    }}
                                                >
                                                    {item.description}
                                                </div>
                                                <a
                                                    style={{
                                                        ...{ margin: "1rem" },
                                                        ...{
                                                            background: "none",
                                                        },
                                                    }}
                                                    href={item.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <Button
                                                        style={{
                                                            ...{
                                                                marginBottom:
                                                                    "0rem",
                                                            },
                                                            ...{
                                                                borderRadius:
                                                                    "10%",
                                                            },
                                                        }}
                                                    >
                                                        {" "}
                                                        Explore{" "}
                                                    </Button>
                                                </a>
                                            </div>
                                        </a>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </section>
    );
}
