import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isWhiteNav, setIsWhiteNav] = useState(false);

  const links = [
    { name: "About", id: "about" },
    { name: "Programs", id: "programs" },
    { name: "Impact", id: "impact" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const whiteSection = document.getElementById("about");
      const triggerPoint = whiteSection
        ? whiteSection.offsetTop - 80
        : window.innerHeight;
      setIsWhiteNav(window.scrollY >= triggerPoint);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 backdrop-blur-md transition-colors duration-300 ${
        isWhiteNav ? "bg-white text-slate-900 shadow-sm" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="CourtSide logo"
            className="h-14 w-auto rounded-full border border-white/20 bg-white p-2 md:h-22"
          />
          <span className="hidden text-lg font-bold tracking-tight sm:inline md:text-xl">
            CourtSide Academy
          </span>
        </div>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="hover:text-orange-400">
                {link.name}
              </a>
            </li>
          ))}
          <button className="bg-orange-500 px-5 py-2 rounded-lg">
            Join Now
          </button>
        </ul>

        {/* Mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div
          className={`md:hidden px-6 pb-6 space-y-4 ${
            isWhiteNav ? "bg-white text-slate-900" : "bg-black text-white"
          }`}
        >
          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="block">
              {link.name}
            </a>
          ))}
          <button className="w-full bg-orange-500 py-3 rounded-lg">
            Join Now
          </button>
        </div>
      )}
    </nav>
  );
}