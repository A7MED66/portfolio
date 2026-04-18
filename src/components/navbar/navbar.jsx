import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  // Memoized colors
  const colors = useMemo(() =>
    darkMode
      ? {
          navBG: "bg-gray-900/80",
          textSec: "text-gray-300",
          textActive: "text-orange-400",
          indicator: "from-orange-500 to-amber-500",
          button: "from-orange-500 to-amber-500",
        }
      : {
          navBG: "bg-white/80",
          textSec: "text-gray-700",
          textActive: "text-orange-600",
          indicator: "from-orange-500 to-amber-500",
          button: "from-orange-500 to-amber-500",
        },
    [darkMode]
  );

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.querySelector(item.link);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(item.link.replace("#", ""));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`flex items-center justify-between w-full max-w-5xl ${colors.navBG} backdrop-blur-md rounded-2xl px-6 py-3 shadow-xl border border-white/10`}
      >
        {/* Logo */}
        <div className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-950"}`}>
          Portfolio<span className="text-orange-500">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const sectionId = item.link.replace("#", "");
            return (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setActiveSection(sectionId)}
                className="relative group"
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === sectionId
                      ? colors.textActive
                      : `${colors.textSec} hover:text-orange-400`
                  }`}
                >
                  {item.name}
                </motion.span>

                {activeSection === sectionId && (
                  <motion.div
                    layoutId="navbar-indicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className={`absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r ${colors.indicator}`}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode}
            className={`p-2 rounded-xl ${darkMode ? "bg-gray-800 text-yellow-400" : "bg-gray-100 text-gray-600"}`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`hidden sm:block px-5 py-2 text-sm font-bold text-white rounded-xl bg-gradient-to-r ${colors.button}`}
          >
            Hire Me
          </motion.a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={darkMode ? "text-white" : "text-black"} />
            ) : (
              <Menu className={darkMode ? "text-white" : "text-black"} />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-20 inset-x-4 p-6 rounded-2xl ${colors.navBG} backdrop-blur-xl md:hidden flex flex-col gap-4 shadow-2xl border border-white/10`}
          >
            {navItems.map((item) => {
              const sectionId = item.link.replace("#", "");
              return (
                <a
                  key={item.name}
                  href={item.link}
                  className={`${colors.textSec} text-lg font-semibold`}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setActiveSection(sectionId);
                  }}
                >
                  {item.name}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;