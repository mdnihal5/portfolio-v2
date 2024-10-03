import { About } from "../About/About"
import { Blogs } from "../Blogs/Blogs"
import Projects from "../Projects/Projects"
import Skills from "../Skills/Skills"
const Hero = () => {

  return (
    <div className="m-6 p-6 sm:w-[600px] w-[400px] h-full">
      <About />
      <Skills/>
      <Projects/>
      <Blogs/>
    </div>
  )
}

export default Hero
