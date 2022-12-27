import React, { Component } from "react";
export default class About extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img
                            className="profile-pic"
                            src="images/Ahmed Hossam.png"
                            alt=""
                        />
                    </div>

                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p>
                            {resumeData.aboutme.map((item) => {
                                return <li style={{margin:0}}>{item}</li>;
                            })}
                        </p>

                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>{resumeData.name}</span>
                                    <br></br>
                                    <span>{resumeData.address}</span>
                                    <br></br>
                                    <span>{resumeData.number}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
