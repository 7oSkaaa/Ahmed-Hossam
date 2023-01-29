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

function App() {
    
    const [fetched, setFetched] = React.useState(false);
    let [resumeData, setResumeData] = React.useState({});

    React.useEffect(() => {
        fetch(process.env.REACT_APP_BIN_URL)
            .then((res) => res.json())
            .then((res) => {
                setResumeData(res);
                setFetched(true);
            });
    }, [resumeData, fetched]);

    if(fetched){
        return (
            <div className="App">
                <Header resumeData={resumeData} />
                <About resumeData={resumeData} />
                <Resume resumeData={resumeData} />
                <Projects resumeData={resumeData} />
                <AnonymousMessage />
                <ContactUs resumeData={resumeData} />
                <Testimonials resumeData={resumeData} />
                <Footer resumeData={resumeData} />
            </div>
        );
    }else {
        return (
            <div className='Loader_Container'><MoonLoader className='Loader' color={'#00CCCC'} loading={!fetched} size={120}/></div>
        );
    }
}

export default App;
