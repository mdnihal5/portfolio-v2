import { RiDiscordLine, RiGithubLine, RiLinkedinFill } from "react-icons/ri";

const icons = [
	{ icon: <RiGithubLine size={28} />, delay: 0, link: "https://github.com/mdnihal5", name: "github" },
	{ icon: <RiLinkedinFill size={30} />, delay: 0.5, link: "https://linkedin.com/in/mdnihal05", name: "linkedin" },
	{ icon: <RiDiscordLine size={30} />, delay: 1.5, link: "https://discord.com/users/997531619105714297", name: "discord" },
];

const Socials: React.FC = () => {
	return (
		<div className="flex w-30 items-center justify-center mt-14 gap-4 relative">
			{icons.map((icon, index) => (
				<a href={icon.link} target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
					{icon.icon}
				</a>
			))}
		</div>
	);
};

export default Socials;
