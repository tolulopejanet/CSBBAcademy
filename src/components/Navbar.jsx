import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isWhiteNav, setIsWhiteNav] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", id: "home", path: "/" },
    { name: "About", id: "about", path: "/about" },
    { name: "Gallery", id: "gallery", path: "/gallery" },
    { name: "Blog", id: "blog", path: "/blog" },
    { name: "Contact", id: "contact", path: "/contact" },
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
        isWhiteNav ? "bg-white text-slate-900 shadow-lg" : "bg-black/40 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-white rounded-4xl">
            <img
              src={logo}
              alt="CourtSide logo"
              className="h-70 w-auto md:h-20"
            />
          </div>
          <span className="hidden text-lg font-bold tracking-tight sm:inline md:text-xl">
            CourtSide Academy
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.id}>
                <Link
                  to={link.path}
                  className={`transition-colors ${
                    isActive
                      ? "text-orange-500 font-semibold"
                      : "hover:text-orange-400"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
          <a
            href="https://wa.me/2348189295556?text=Hi%2C%20my%20name%20is%20___.%20I%20would%20like%20to%20join%20CourtSide%20Academy.%20Can%20you%20provide%20more%20information%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 px-5 py-2 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Join Now
          </a>
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
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.id}
                to={link.path}
                className={`block transition-colors ${
                  isActive
                    ? "text-orange-500 font-semibold"
                    : "hover:text-orange-400"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <a
            href="https://wa.me/2348189295556?text=Hi%2C%20my%20name%20is%20___.%20I%20would%20like%20to%20join%20CourtSide%20Academy.%20Can%20you%20provide%20more%20information%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-orange-500 py-3 rounded-lg text-center hover:bg-orange-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            Join Now
          </a>
        </div>
      )}
    </nav>
  );
}