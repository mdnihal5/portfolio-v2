import React from "react";
import { Link } from "react-router-dom";
interface Skill {
    name: string;
    iconClass?: string;
    icon?: any;
    link?: string;
}
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si";

const Skills: React.FC = () => {
    const skillsData = {
        webDevelopment: [
            { name: "HTML", iconClass: "ci ci-html" },
            { name: "CSS", iconClass: "ci ci-css" },
            { name: "JavaScript", iconClass: "ci ci-js" },
            { name: "React", iconClass: "ci ci-react" },
            { name: "Express", iconClass: "ci ci-expressjs" },
            { name: "Node.js", iconClass: "ci ci-nodejs" },
            { name: "MongoDB", iconClass: "ci ci-mongodb" },
            { name: "TypeScript", iconClass: "ci ci-ts" },
        ],
        competitiveProgramming: [
            { name: "LeetCode", icon: <SiLeetcode size={15} />, link: "https://leetcode.com/u/mdnihal05/" },
            { name: "Codeforces", icon: <SiCodeforces size={15} />, link: "https://codeforces.com/profile/md_nihal" },
            { name: "CodeChef", icon: <SiCodechef size={15} />, link: "https://www.codechef.com/users/rgukt_b192210" },
        ],
    };

    const renderSkills = (skills: Skill[]) => {
        return skills.map((skill, index) => (
            <>
                {skill.link ? (
                    <Link to={skill?.link} target="_blank">
                        <div key={index} className="flex justify-center gap-4 items-center p-2 bg-gray-900 rounded-lg shadow-md ring-2 ring-gray-700 ring-opacity-75">
                            {skill?.icon}
                            <span className="text-sm text-white">{skill.name}</span>
                        </div>
                    </Link>
                ) : (
                    <div key={index} className="flex justify-center gap-4 items-center p-2 bg-gray-900 rounded-lg shadow-md ring-2 ring-gray-700 ring-opacity-75">
                        <i className={`${skill.iconClass}  text-3xl text-white`}></i>
                        <span className="text-sm text-white">{skill.name}</span>
                    </div>
                )}
            </>
        ));
    };

    return (
        <div className="grid gap-8">
            <div>
                <h3 className="text-2xl font-bold mb-4 "> {"-->"} Web Development</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">{renderSkills(skillsData.webDevelopment)}</div>
            </div>
            <div>
                <h3 className="text-2xl font-bold mb-4"> {"-->"} DSA/Competitive Programming</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">{renderSkills(skillsData.competitiveProgramming)}</div>
            </div>
        </div>
    );
};

export default Skills;
