import { RiDiscordLine, RiGithubLine, RiLinkedinFill,RiTwitterLine } from "react-icons/ri";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { Link } from "react-router-dom";
const icons = [
  { icon: <RiGithubLine size={28} color="violet" />, delay: 0, link: "https://github.com/mdnihal5", name: "mdnihal5" },
  { icon: <RiLinkedinFill size={30} color="violet" />, delay: 0.5, link: "https://linkedin.com/in/mdnihal05", name: "mdnihal05" },
  { icon: <RiDiscordLine size={30} color="violet" />, delay: 1.5, link: "https://discord.com/users/997531619105714297", name: "md_nihal" },
  { icon: <RiTwitterLine size={30} color="violet" />, delay: 1.5, link: "https://x.com/mdnihal05", name: "mdnihal05" },

];
const Footer = () => {
  return (
    <>
      <div className="flex p-6 flex-col items-center justify-center">
        <div className="flex gap-4 items-center justify-center m-2">
          {icons.map((icon, key) => (
            <TooltipProvider delayDuration={90} key={key}>
              <Tooltip>
                <TooltipTrigger>
                  <Link to={icon.link} target="_blank">
                    {icon.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="bg-purple-400">
                  <p className="text-sm font-bold">{icon.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
        <h1 className="text-2xl text-blue-400 font-bold font-caveat"> Made With &lt;3</h1>
      </div>
    </>
  );
};
export default Footer;

