import { Button } from "../ui/moving-border";
import { Clipboard } from "lucide-react";
import handleCopy from "./HandleCopy";

import { RiDiscordLine, RiGithubLine, RiLinkedinFill } from "react-icons/ri";

// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

const icons = [
    { icon: <RiGithubLine size={28} />, delay: 0, link: "https://github.com/mdnihal5", name: "github" },
    { icon: <RiLinkedinFill size={30} />, delay: 0.5, link: "https://linkedin.com/in/mdnihal05", name: "linkedin" },
    { icon: <RiDiscordLine size={30} />, delay: 1.5, link: "https://discord.com/users/997531619105714297", name: "discord" },
];

const About = () => {
    const date = new Date();

    return (
        <div className="grid sm:grid-cols-1 items-center justify-center md:grid-cols-2 gap-8">
            <div className="text-white flex md:flex-row flex-col items-center justify-center gap-8 sm:min-w-[450px] md:min-w-[900px] text-xl">
                <div className="min-w-[200px] mx-20 items-center justify-center flex flex-col">
                    <div className="w-full m-2">
                        <Button className="rounded-full">
                            <img
                                src="https://i.postimg.cc/8sQzFhQv/IMG-1259.jpg"
                                width="400"
                                height="400"
                                alt="Tony"
                                className="p-3 rounded-full w-48 h-48 object-cover shadow-lg hover:shadow-xl transition-shadow"
                            />
                        </Button>
                    </div>
                    <h1 className="text-blue-300">
                        @mdnihal {(date.getHours() + 24) % 12}:{date.getMinutes()}:{date.getSeconds()}
                    </h1>
                    <div className="w-52 h-12 mt-5 rounded-lg bg-slate-900 flex items-center justify-between pr-6">
                        <span className="bg-blue-300 rounded-l-lg h-full w-8 font-bold" />
                        npx nihal
                        <button onClick={handleCopy}>
                            <Clipboard />
                        </button>
                    </div>
                    <div className="flex gap-3 mt-6 items-center justify-center">
                        {icons.map((icon, index) => (
                            <a href={icon.link} target="_blank" key={index}>
                                {icon.icon}
                            </a>
                        ))}
                    </div>
                </div>
                <h2 className="font-condesed">
                    A passionate web developer and competitive programmer. I have a strong background in Mern-stack development, with expertise in modern web technologies and problem-solving. I'm
                    constantly learning and exploring new technologies to improve my skills and deliver high-quality solutions. In my free time, I enjoy participating in coding challenges and
                    competitions to sharpen my problem-solving abilities. Feel free to explore my portfolio and get in touch if you'd like to collaborate on a project or discuss my qualifications
                    further.
                </h2>
            </div>
        </div>
    );
};

export default About;
