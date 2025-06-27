import { useState } from "react";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("About");
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    "About",
    "Our Solutions",
    "In Action",
    "Technology",
    "Benefits",
    "Case Use",
  ];

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <div className="bg-gray-600 text-white shadow-sm px-4 py-2 relative">
      <div className="flex justify-between items-center">
        {/* Logo Left */}
        <div className="flex items-center gap-2">
          <img src="/infinity.png" alt="logo" className="w-8 h-8" />
          <span className="text-2xl font-semibold">Clin</span>
        </div>

        {/* Desktop Menu Right */}
        <div className="hidden md:flex">
          <ul className="flex gap-4 items-center">
            {links.map((link) => (
              <li key={link}>
                <button
                  onClick={() => handleLinkClick(link)}
                  className={`px-3 py-2 text-white font-medium border-b-2 transition duration-300 ${
                    activeLink === link
                      ? "border-white font-bold"
                      : "border-transparent hover:border-white hover:font-bold"
                  }`}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-700 md:hidden z-50">
          <ul className="flex flex-col items-start p-4 space-y-2">
            {links.map((link) => (
              <li key={link}>
                <button
                  onClick={() => handleLinkClick(link)}
                  className={`block px-3 py-2 w-full text-left text-white font-medium border-b-2 transition duration-300 ${
                    activeLink === link
                      ? "border-white font-bold"
                      : "border-transparent hover:border-white hover:font-bold"
                  }`}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
