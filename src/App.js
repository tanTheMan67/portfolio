import Contact from "./Contact/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/skills/Skills";

const App = ()=>(
    <h1 className="base">
        <Hero/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Footer/>
    </h1>
)
export default App;