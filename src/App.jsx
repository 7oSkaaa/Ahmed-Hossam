import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import AnonymousMessage from "./components/AnonymousMessage";
import MoonLoader from 'react-spinners/MoonLoader'

function Page({resumeData}){
    return (
        <>
            <Header resumeData={resumeData} />
            <About resumeData={resumeData} />
            <Resume resumeData={resumeData} />
            <Projects resumeData={resumeData} />
            <AnonymousMessage />
            <ContactUs resumeData={resumeData} />
            <Testimonials resumeData={resumeData} />
            <Footer resumeData={resumeData} />
        </>
    )
}

function App() {

    const [fetched, setFetched] = React.useState(false);
    let [resumeData, setResumeData] = React.useState({});

    React.useEffect(() => {
        fetch(process.env.REACT_APP_BIN_URL)
            .then((res) => res.json())
            .then((res) => {
                setResumeData(res.record);
                setFetched(true);
                console.log(process.env.REACT_APP_BIN_URL);
                console.log(res.record);
                console.log(resumeData);
                console.log(fetched);
            });
    }, [resumeData, fetched]);

    return (
        <div className="App">
            {fetched ? <Page resumeData={resumeData} /> : <div className='Loader_Container'><MoonLoader className='Loader' color={'#00CCCC'} loading={!fetched} size={120}/></div>}
        </div>
        
    );
}

export default App;
