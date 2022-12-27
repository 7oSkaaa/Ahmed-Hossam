import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import resumeData from "./resumeData";

function App() {
    return (
        <div className="App">
            <Header resumeData={resumeData} />
            <About resumeData={resumeData} />
            <Resume resumeData={resumeData} />
            <Projects resumeData={resumeData} />
            <Testimonials resumeData={resumeData} />
            <ContactUs resumeData={resumeData} />
            <Footer resumeData={resumeData} />
        </div>
    );
}

export default App;
