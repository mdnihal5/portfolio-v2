import { useTypewriter } from "react-simple-typewriter";
import { Button } from "../ui/moving-border";
import { Clipboard, FileText } from "lucide-react";
import HandleCopy from "./HandleCopy";
import Socials from "../Socials/Socials";

export const About = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "Competitive Programmer"],
    loop: false,
  });

  return (
    <section id="about" className="flex flex-col items-center">
      <div className="flex flex-col">
        <div className="min-w-[200px] mx-20 mb-4 flex flex-col items-center relative">
          <a
            href="mailto:mdnihal.private1@gmail.com"
            className="absolute -top-1 -right-1 z-10 bg-white w-20 h-7 px-3 py-1 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-shadow"
          >
            Hire Me
          </a>

          <Button className="rounded-full relative">
            <img
              src="https://i.ibb.co/ZKKX0W0/nihal-pic.jpg"
              width="400"
              height="400"
              alt="Nihal"
              className="p-3 rounded-full w-48 h-48 object-cover shadow-lg hover:shadow-xl transition-shadow"
            />
          </Button>

          <Socials />

          <div className="flex flex-col sm:flex-row items-center gap-2 justify-between mt-4">
            <div className="w-32 h-8 flex items-center bg-gray-900 rounded-lg text-white font-bold text-sm justify-between pr-6">
              <span className="flex items-center text-black justify-center bg-blue-300 rounded-l-lg h-full w-8 font-bold">
                <button onClick={HandleCopy}>
                  <Clipboard size={18} />
                </button>
              </span>
              <h2>npx nihal</h2>
            </div>
            <div>
              <a
                className="bg-white h-8 w-20 flex items-center justify-center rounded-lg font-bold text-xs hover:bg-gray-100 transition-colors duration-300"
                href="https://drive.google.com/file/d/1z9xyzkQ-RUJJIYoIfEQNM2otGSEZX5c5/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume <FileText size={15} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full text-center">
        <h1 className="text-xl font-bold text-orange-300">Hi, I'm Nihal.</h1>
        <h1 className="text-xl font-bold text-white py-2">
          A{" "}
          <span className="text-xl py-2 font-bold inline-block">
            <span className="text-[#FF0000]">{text}</span>
          </span>
        </h1>
      </div>
    </section>
  );
};
