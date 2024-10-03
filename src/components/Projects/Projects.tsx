import { Eye, Github } from "lucide-react";
const TechStack = [
  ["ci ci-html", "ci ci-css", "ci ci-js", "ci ci-react", "ci ci-expressjs bg-white rounded-full", "ci ci-nodejs", "ci ci-mongodb", "ci ci-ts"],
  ["ci ci-html", "ci ci-css", "ci ci-js", "ci ci-react"],
  ["ci ci-html", "ci ci-css", "ci ci-js", "ci ci-ts", "ci ci-react"]
];

const Projects = () => {
  const projects = [
    {
      title: "CodeX",
      description: "A resource Management Website Where Users can Add/Remove resource/resumes",
      link: "https://codex-mern.vercel.app",
      code: "https://github.com/mdnihal5/codex",
      image: "https://i.postimg.cc/HnPx9VcY/codex.png",
    },
    {
      title: "codeforces-snapshot",
      description: "Take A snapshot of your codeforces profile ,made using Codeforces api and react JS",
      link: "https://codeforces-card.vercel.app/",
      code: "https://github.com/mdnihal5/Codeforces-Card",
      image: "https://i.postimg.cc/90Cvxhwr/codeforces-snapshot.png",
    },
    {
      title: "portfolio",
      description: "My Porfolio Website crafted  with aceternity ui and tailwind and framer motion and shadcn",
      link: "https://nihal-dev.vercel.app/",
      code: "https://github.com/mdnihal5/portfolio",
      image: "https://i.postimg.cc/x8d8mKdp/portfolio.png",
    },
  ];

  return (
    <section id="projects" className="py-8 grid gap-6 mx-auto px-4 sm:px-6 grid-cols-1 items-center justify-center sm:grid-cols-2">
      {projects.map((item, key) => (
        <div key={key} className="bg-gray-950 no-underline relative shadow-2xl h-96 w-60 shadow-zinc-900 mx-auto rounded-lg p-px text-xs font-semibold leading-6 text-white">
          <span className="absolute inset-0 overflow-hidden rounded-lg">
            <span className="absolute inset-0 rounded-lg bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 hover:opacity-100" />
          </span>

          <div className="grid gap-1 p-3">
            <button className="px-4 py-1 bg-slate-900 text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
              <h3 className="text-base uppercase rounded-full flex items-center justify-center font-bold text-white">{item.title}</h3>
            </button>
            <img className="w-full h-auto object-cover rounded" src={item.image} alt={item.title} />
            <p className="text-sm text-white py-2">{item.description}</p>
            <div className="w-full h-4 text-white overflow-x-auto whitespace-nowrap">
              TechStack Used: {TechStack[key].map((stack, i) => (
                <i key={i} className={`${stack} text-2xl text-white inline-block mr-1`}></i>
              ))}
            </div>
            <div className="flex gap-2 mt-2 z-10">
              <a
                href={item.link}
                className="flex-1 inline-flex h-8 items-center justify-center rounded-md border border-gray-200 bg-gray-900 px-3 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Eye className="mr-1 h-3 w-3" />
                Live Demo
              </a>
              <a
                href={item.code}
                className="flex-1 inline-flex h-8 items-center justify-center rounded-md border border-gray-200 bg-gray-900 px-3 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-1 h-3 w-3" />
                GitHub
              </a>
            </div>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />

        </div>
      ))}
    </section>
  );
};

export default Projects;
