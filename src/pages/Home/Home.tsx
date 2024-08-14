import Skills from "./sections/Skills/Skills"
import About from "./sections/About/About"
import Hero from "./sections/Hero/Hero"
import Projects from "./sections/Projects/Projects"
import Resume from "./sections/Resume/Resume"

function Home() {

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Projects />
    </>
  )
}

export default Home
