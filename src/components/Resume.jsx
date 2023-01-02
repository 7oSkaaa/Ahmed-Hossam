import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faCode, faEarthAfrica } from '@fortawesome/free-solid-svg-icons'

export default function Resume({ resumeData }) {
    return (
        <section id="resume">
            <FontAwesomeIcon icon={faCog} color={'#11ABB0'} className={'Gears fa-spin'} spin />
            <div className="row education">
                <div className="three columns header-col">
                    <h1>
                        <span>Education</span>
                    </h1>
                </div>

                <div className="nine columns main-col">
                    {resumeData.education &&
                        resumeData.education.map((item, idx) => {
                            return (
                                <div className="row item" key={idx}>
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
                        resumeData.work.map((item, idx) => {
                            return (
                                <div className="row item" key={idx}>
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
                                                    (item, idx) => {
                                                        return (
                                                            <li
                                                                key={idx}
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
                        resumeData.volunteer.map((item, idx) => {
                            return (
                                <div className="row item" key={idx}>
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
                                                    (item, idx) => {
                                                        return (
                                                            <li
                                                                key={idx}
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
                    <FontAwesomeIcon icon={faCode} color={'#11ABB0'} className={'Code fa-spin'} spin />
                    {resumeData.Competitions &&
                        resumeData.Competitions.map((item, idx) => {
                            return (
                                <div className="row item" key={idx}>
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
                                                item.Ranks.map((item, idx) => {
                                                    return (
                                                        <li
                                                            key={idx}
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

            <div className="row skills">
                <div className="header-col">
                    <h1>
                        <span>Skills</span>
                    </h1>
                </div>
                <div fluid="md">
                    {resumeData.skills &&
                        resumeData.skills.map((item, idx) => {
                            return (
                                <ul className="six column" key={idx}>
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
                                        item.skillsSection.map((skill, idx) => {
                                            return (
                                                <div
                                                    style={{ margin: "2rem" }}
                                                    key={idx}
                                                >
                                                    <li
                                                        style={{
                                                            ...{
                                                                margin:
                                                                    "0.5rem",
                                                            },
                                                            ...{},
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                ...{
                                                                    fontWeight:
                                                                        "bold",
                                                                },
                                                                ...{
                                                                    fontSize:
                                                                        "1.7rem",
                                                                },
                                                                ...{
                                                                    letterSpacing:
                                                                        "1px",
                                                                },
                                                            }}
                                                        >
                                                            {skill.skillname[0]}
                                                        </span>
                                                        <span
                                                            style={{
                                                                letterSpacing:
                                                                    "1px",
                                                            }}
                                                        >
                                                            {skill.skillname.slice(
                                                                1
                                                            )}
                                                        </span>
                                                    </li>
                                                    <ProgressBar
                                                        completed={skill.rate}
                                                        maxCompleted={100}
                                                        customLabel={`${skill.rate} %`}
                                                        className="wrapper"
                                                        bgColor={"#11ABB0"}
                                                        animateOnRender={true}
                                                        initCompletedOnAnimation={
                                                            0
                                                        }
                                                    />
                                                </div>
                                            );
                                        })}
                                </ul>
                            );
                        })}
                </div>
            </div>

            <div
                className="row languages"
                style={{ display: "flex", flexDirection: "column" }}
            >
                <div className="twelve columns header-col language_label">
                    <h1>
                        <span>Languages</span>
                    </h1>
                </div>
                <div
                    className="twelve columns language"
                    style={{ alignContent: "start" }}
                >
                    <FontAwesomeIcon icon={faEarthAfrica} color={'#11ABB0'} className={'global fa-spin'} speed={"200"} spin/>
                    {resumeData.languages &&
                        resumeData.languages.map((item, idx) => {
                            return (
                                <div key={idx} style={{ margin: "20px" }}>
                                    <li
                                        style={{
                                            ...{
                                                listStyle: "none",
                                            },
                                            ...{
                                                margin: "0.5rem",
                                            },
                                        }}
                                    >
                                        <span
                                            style={{
                                                ...{ fontWeight: "bold" },
                                                ...{ fontSize: "2rem" },
                                                ...{ letterSpacing: "1px" },
                                            }}
                                        >
                                            {item.name[0]}
                                        </span>
                                        <span style={{ letterSpacing: "1px" }}>
                                            {item.name.slice(1)}
                                        </span>
                                    </li>
                                    <ProgressBar
                                        completed={item.rate}
                                        maxCompleted={100}
                                        customLabel={`${item.rate} %`}
                                        className="wrapper"
                                        bgColor={"#11ABB0"}
                                        animateOnRender={true}
                                        initCompletedOnAnimation={0}
                                    />
                                </div>
                            );
                        })}
                </div>
            </div>

            <div className="row resume">
                <div className="twelve columns header-col">
                    <h1>
                        <span>Resume</span>
                    </h1>
                </div>
                <p
                    className="twelve columns header-col resume_label"
                    style={{
                        ...{ fontSize: "2rem" },
                        ...{ paddingLeft: "20px" },
                        ...{ paddingTop: "50px" },
                        ...{ fontStyle: "italic" },
                        ...{ fontWeight: "bold" },
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
