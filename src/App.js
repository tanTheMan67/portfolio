import Contact from "./Contact/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/skills/Skills";

const App = ()=>(
    <h1 className="base">
        <Hero/>
        <Projects/>
        <Skills/>
        <Contact/>
    </h1>
)
export default App;