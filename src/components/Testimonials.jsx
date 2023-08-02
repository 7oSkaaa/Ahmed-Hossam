import React from "react";
export default function Testimonials({ resumeData }) {
    return (
        <section id="testimonials">
            <div className="text-container">
                <div className="row">
                    <div className="two columns header-col">
                        <h1>
                            <span>Quotes</span>
                        </h1>
                    </div>
                    <div className="ten columns flex-container">
                        <div className="flexslider">
                            <ul className="slides">
                                {resumeData.testimonials &&
                                    resumeData.testimonials.map((item, idx) => {
                                        return (
                                            <li key={idx}>
                                                <blockquote>
                                                    <p>{item.description}</p>
                                                    <cite>{item.name}</cite>
                                                </blockquote>
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>{" "}
                        {/* div.flexslider ends */}
                    </div>{" "}
                    {/* div.flex-container ends */}
                </div>{" "}
                {/* row ends */}
            </div>{" "}
            {/* text-container ends */}
        </section>
    );
}
