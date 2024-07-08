import { useTypewriter } from "react-simple-typewriter";
import About from "./About";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ContactMeSection from "./ContactMeSection";
import Resume from "../Resume/Resume";
import Footer from "./Footer";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Mern Stack Developer", "Competitive Programmer"],
    loop: false,
  });

  return (
    <div className="flex flex-col my-5 gap-y-20 w-full h-full text-white items-center">
      <div id="about" className="w-full max-w-screen-lg px-4">
        <section className="w-full">
          <div>
            <h1 className="text-4xl font-bold text-orange-300">Hi, I'm Nihal.</h1>
            <h1 className="sm:text-4xl text-2xl font-bold text-white py-6">
              I am a{" "}
              <span className="sm:text-3xl text-xl py-6 font-bold">
                <span className="text-[#FF0000]">{text}</span>
              </span>
            </h1>
          </div>
          <About />
        </section>
        <div className="flex sm:flex-row flex-col mt-12 my-8 items-center gap-3 justify-center">
          <Resume />
        </div>
      </div>
      <div id="skills" className="w-full max-w-screen-lg px-4 " data-aos="fade-up" data-aos-duration="800">
        <section className="w-full">
          <SkillsSection />
        </section>
      </div>
      <div id="work" className="w-full max-w-screen-lg px-4">
        <section className="w-full">
          <ProjectsSection />
        </section>
      </div>
      <div id="contact" className="w-full max-w-screen-lg px-4">
        <section className="w-full">
          <ContactMeSection />
        </section>
      </div>
      <div className="w-full max-w-screen-lg px-4">
        <section className="w-full">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Hero;
