import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Briefcase, Mail, FileText, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", path: "/", icon: <Home size={16} /> },
    { name: "About", path: "/about", icon: <User size={16} /> },
    { name: "Experience", path: "/experience", icon: <Briefcase size={16} /> },
    { name: "Contact", path: "/contact", icon: <Mail size={16} /> },
    { name: "Resume", path: "/resume", icon: <FileText size={16} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-portfolio-background/90 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* navigation and logo */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="group flex items-center gap-2 text-portfolio-text text-xl font-bold transition-transform duration-300 hover:scale-110"
          >
            <img
              src="/PP_Logo.png"
              alt="Logo"
              className="h-8 w-8 object-contain rounded-md transition-transform duration-300 group-hover:scale-110"
            />
            PORTFOLIO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-1 px-2 py-1 text-sm font-medium transition-all duration-300 hover:text-portfolio-primary ${
                  location.pathname === link.path
                    ? "text-portfolio-primary border-b-2 border-portfolio-primary"
                    : "text-portfolio-text"
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-portfolio-text hover:text-portfolio-primary"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-portfolio-background/90 backdrop-blur-md shadow-lg animate-fade-in">
          <div className="px-4 py-3 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? "text-portfolio-primary bg-white/5"
                    : "text-portfolio-text hover:bg-white/5"
                }`}
                onClick={closeMenu}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
