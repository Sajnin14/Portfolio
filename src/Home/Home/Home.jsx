import About from "../About";
import Banner from "../Banner";
import Contact from "../Contact";
import Education from "../Education";
import Project from "../Project";
import Skills from "../Skills";


const Home = () => {
    return (
        <div className="space-y-16">
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;