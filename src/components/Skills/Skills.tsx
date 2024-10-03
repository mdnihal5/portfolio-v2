import React from "react";
import { Link } from "react-router-dom";
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si";

const Skills = () => {
  const skillsData = {
    competitiveProgramming: [
      { name: "LeetCode", icon: <SiLeetcode />, link: "https://leetcode.com/u/mdnihal05/" },
      { name: "Codeforces", icon: <SiCodeforces />, link: "https://codeforces.com/profile/md_nihal" },
      { name: "CodeChef", icon: <SiCodechef />, link: "https://www.codechef.com/users/md_nihal" },
    ],
    technicalSkills: [
      { name: "JavaScript", iconClass: "ci ci-js" },
      { name: "TypeScript", iconClass: "ci ci-ts" },
      { name: "C++", iconClass: "ci ci-cpp" },
      { name: "HTML", iconClass: "ci ci-html" },
      { name: "CSS", iconClass: "ci ci-css" },
      { name: "React", iconClass: "ci ci-react" },
      { name: "Express", iconClass: "ci ci-expressjs" },
      { name: "Node.js", iconClass: "ci ci-nodejs" },
      { name: "MongoDB", iconClass: "ci ci-mongodb" },
      { name: "Redux", iconClass: "ci ci-redux" },
    ],
  };

  const renderSkills = (skills:any) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {skills.map((skill:any, index:any) => (
        <div key={index} className="bg-gray-700 p-3 rounded-lg shadow flex items-center justify-center">
          {skill.link ? (
            <Link to={skill.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
              {skill.icon}
              <span className="ml-2 text-sm">{skill.name}</span>
            </Link>
          ) : (
            <>
              <i className={`${skill.iconClass} text-xl mr-2`} />
              <span className="text-sm">{skill.name}</span>
            </>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="p-6 text-white rounded-lg border border-gray-700 my-3">
      <h2 className="text-2xl font-bold mb-6 text-white">Skills</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-white">Competitive Programming</h3>
        {renderSkills(skillsData.competitiveProgramming)}
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4 text-white">Technical Skills</h3>
        {renderSkills(skillsData.technicalSkills)}
      </div>
    </section>
  );
};

export default Skills;
