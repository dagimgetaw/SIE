import { useEffect, useState } from "react";
import logo from "../../assets/satelite.png";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  // Check if we're on the home page
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      // Only detect sections if we're on the home page
      if (isHomePage) {
        const sections = ["home", "about", "service", "contact", "support"];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomePage]);

  const handleNavClick = (id) => {
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth",
        });
      }
    } else {
      // If not on home page, navigate to home page first then scroll
      window.location.href = `/#${id}`;
    }
  };

  // Determine navbar background style
  const navbarStyle =
    !isHomePage || scrolled
      ? "bg-white/80 backdrop-blur-md shadow-md text-gray-800"
      : "bg-transparent text-white";

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${navbarStyle}`}
    >
      <div className="mx-auto flex justify-between items-center py-5 px-6 md:px-10 lg:px-16">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center gap-3 group cursor-pointer">
            <img src={logo} alt="logo" className="w-10 h-10 drop-shadow-md" />
            <span className="text-xl md:text-2xl font-extrabold tracking-wide">
              SIE
            </span>
          </div>
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-6 items-center text-sm md:text-base font-medium">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "service", label: "Service" },
            { id: "contact", label: "Contact" },
          ].map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => handleNavClick(id)}
                className={`transition-all cursor-pointer px-1 pb-1 ${
                  !isHomePage || scrolled ? "text-gray-800" : "text-white"
                } ${
                  activeSection === id && isHomePage
                    ? !isHomePage || scrolled
                      ? "border-b-3 border-sky-500 text-sky-600"
                      : "border-b-3 border-white text-sky-300"
                    : ""
                } hover:text-sky-500`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
