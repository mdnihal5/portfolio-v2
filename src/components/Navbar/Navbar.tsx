const navLinks = [
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "blogs", label: "Blogs" },
];

const Navbar = () => {
  return (
    <nav className="flex h-10 shadow-[0_10px_30px_rgba(122,_48,_184,_0.7)] justify-between items-center  bg-white rounded-lg shadow-md mt-3 z-50 md:p-4 md:w-[400px]">
      <a href="#about" className="text-lg font-bold font-caveat mr-5">
        Nihal
      </a>
      <ul className="flex justify-center">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`} className="text-gray-700 font-bold rounded-lg hover:bg-purple-200 mx-2 text-sm">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
