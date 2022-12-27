import React, { Component } from "react";

export default class Resume extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1>
                            <span>Education</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        {resumeData.education &&
                            resumeData.education.map((item) => {
                                return (
                                    <div className="row item">
                                        <div className="twelve columns">
                                            <h3>{item.UniversityName}</h3>
                                            <p className="info">
                                                {item.specialization}
                                                <span>&bull;</span>{" "}
                                                <em className="date">
                                                    {item.MonthOfPassing}{" "}
                                                    {item.YearOfPassing}
                                                </em>
                                            </p>
                                            <p>{item.Achievements}</p>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
                <div className="row work">
                    <div className="three columns header-col">
                        <h1>
                            <span>Work</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        {resumeData.work &&
                            resumeData.work.map((item) => {
                                return (
                                    <div className="row item">
                                        <div className="twelve columns">
                                            <div
                                                style={{
                                                    ...{ display: "flex" },
                                                    ...{ flexDirection: "row" },
                                                    ...{ gap: "1rem" },
                                                }}
                                            >
                                                <h3>{item.CompanyName}</h3>
                                                <p> &mdash; </p>
                                                <p>{item.Type}</p>
                                            </div>
                                            <p className="info">
                                                {item.specialization}
                                                <span>&bull;</span>{" "}
                                                <em className="date">
                                                    {item.MonthOfLeaving}{" "}
                                                    {item.YearOfLeaving}
                                                </em>
                                            </p>
                                            <ul style={{ listStyle: "circle" }}>
                                                {item.Achievements &&
                                                    item.Achievements.map(
                                                        (item) => {
                                                            return (
                                                                <li
                                                                    style={{
                                                                        margin: 5,
                                                                    }}
                                                                >
                                                                    {item}
                                                                </li>
                                                            );
                                                        }
                                                    )}
                                            </ul>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>

                <div className="row work">
                    <div className="three columns header-col">
                        <h1>
                            <span>Volunteer</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        {resumeData.volunteer &&
                            resumeData.volunteer.map((item) => {
                                return (
                                    <div className="row item">
                                        <div className="twelve columns">
                                            <div
                                                style={{
                                                    ...{ display: "flex" },
                                                    ...{ flexDirection: "row" },
                                                    ...{ gap: "1rem" },
                                                }}
                                            >
                                                <h3>{item.CommunityName}</h3>
                                            </div>
                                            <p className="info">
                                                {item.specialization}
                                            </p>
                                            <ul style={{ listStyle: "circle" }}>
                                                {item.Achievements &&
                                                    item.Achievements.map(
                                                        (item) => {
                                                            return (
                                                                <li
                                                                    style={{
                                                                        margin: 5,
                                                                    }}
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: item,
                                                                    }}
                                                                />
                                                            );
                                                        }
                                                    )}
                                            </ul>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>

                <div className="row work">
                    <div className="three columns header-col">
                        <h1>
                            <span>Honor Awards</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        {resumeData.Competitions &&
                            resumeData.Competitions.map((item) => {
                                return (
                                    <div className="row item">
                                        <div className="twelve columns">
                                            <div
                                                style={{
                                                    ...{ display: "flex" },
                                                    ...{ flexDirection: "row" },
                                                    ...{ gap: "1rem" },
                                                }}
                                            >
                                                <h3>{item.CompetitionName}</h3>
                                            </div>
                                            <ul style={{ listStyle: "circle" }}>
                                                {item.Ranks &&
                                                    item.Ranks.map((item) => {
                                                        return (
                                                            <li
                                                                style={{
                                                                    margin: 5,
                                                                }}
                                                                dangerouslySetInnerHTML={{
                                                                    __html: item,
                                                                }}
                                                            />
                                                        );
                                                    })}
                                            </ul>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>

                <div className="row skill">
                    <div className="header-col">
                        <h1>
                            <span>Skills</span>
                        </h1>
                    </div>
                    <div fluid="md">
                        {resumeData.skills &&
                            resumeData.skills.map((item, index) => {
                                return (
                                    <ul className="six column">
                                        <em
                                            style={{
                                                ...{ color: "black" },
                                                ...{ fontWeight: "bold" },
                                                ...{ fontSize: "15px" },
                                                ...{
                                                    textTransform: "uppercase",
                                                },
                                            }}
                                        >
                                            {item.skillsDescription}
                                        </em>
                                        {item.skillsSection &&
                                            item.skillsSection.map((skill) => {
                                                return (
                                                    <li>{skill.skillname}</li>
                                                );
                                            })}
                                    </ul>
                                );
                            })}
                    </div>
                </div>
                <div className="row">
                    <div className="twelve columns header-col">
                        <h1>
                            <span>Resume</span>
                        </h1>
                    </div>
                    <p
                        fluid="twelve columns header-col"
                        style={{
                            ...{ fontSize: "2rem" },
                            ...{ paddingLeft: "20px" },
                            ...{ paddingTop: "50px" },
                            ...{ fontStyle: "italic" },
                            ...{ fontWeight: "bold" }
                        }}
                    >
                        You can check my resume from{" "}
                        <a
                            href={resumeData.Resume}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Here
                        </a>
                    </p>
                </div>
            </section>
        );
    }
}
