import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faDiscord } from "@fortawesome/free-brands-svg-icons";

const icons = [
	{ icon: <FontAwesomeIcon icon={faGithub} size="lg" />, delay: 0, link: "https://github.com/mdnihal5", name: "github" },
	{ icon: <FontAwesomeIcon icon={faLinkedin} size="lg" />, delay: 0.5, link: "https://linkedin.com/in/mdnihal05", name: "linkedin" },
	{ icon: <FontAwesomeIcon icon={faDiscord} size="lg" />, delay: 1.5, link: "https://discord.com/users/997531619105714297", name: "discord" },
];

const Socials: React.FC = () => {
	return (
		<div className="z-40 flex w-30 items-center justify-center mt-14 gap-4 ">
			{icons.map((icon, index) => (
				<motion.div
					key={index}
					initial={{ y: 0 }}
					animate={{
						y: [-13, 0, -13],
						transition: {
							duration: 3,
							repeat: Infinity,
							delay: icon.delay,
							ease: "easeInOut",
						},
					}}
					whileHover={{
						scale: 1.2,
						transition: {
							duration: 0.2,
						},
					}}
				>
					<TooltipProvider delayDuration={90}>
						<Tooltip>
							<TooltipTrigger>
								<a href={icon.link} target="_blank" rel="noopener noreferrer">
									{icon.icon}
								</a>
							</TooltipTrigger>
							<TooltipContent className="bg-purple-300">
								<p className="text-sm">{icon.name}</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</motion.div>
			))}
		</div>
	);
};

export default Socials;
