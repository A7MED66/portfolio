import { Mail, ArrowUp } from "lucide-react";
import { FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";

function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.05.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.29 0 .32.22.7.83.58C20.56 21.79 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Footer({ darkMode }) {
  const colors = darkMode
    ? {
        bg: "bg-gray-950 border-t border-white/10",
        text: "text-white",
        subText: "text-gray-400",
        socialBtn:
          "bg-white/5 border border-white/10 text-gray-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,.45)]",
        divider: "border-white/10",
      }
    : {
        bg: "bg-white border-t border-gray-200",
        text: "text-gray-900",
        subText: "text-gray-500",
        socialBtn:
          "bg-gray-50 border border-gray-200 text-gray-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:shadow-lg",
        divider: "border-gray-200",
      };

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const socials = [
    {
      icon: GithubIcon,
      label: "GitHub",
      href: "https://github.com/A7MED66",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ahmed-ragheb-/",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      href: "https://www.instagram.com/ahmed_ragheb66?igsh=NnY2ajk4dXU3ZHJz",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      href: "https://wa.me/201023799696",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:ahmed.ragheb3232@gmail.com",
    },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className={`relative overflow-hidden body-font ${colors.bg}`}>
      {/* Orange Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <a href="#home" className="text-3xl font-extrabold">
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
                Ahmed
              </span>
              <span className={colors.text}>.</span>
            </a>

            <p className={`mt-5 leading-7 text-sm ${colors.subText}`}>
              Front-End Developer specializing in React.js, creating modern,
              responsive and high-performance web applications with clean UI,
              smooth UX and scalable architecture.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-bold mb-5 ${colors.text}`}>
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className={`text-sm transition-all duration-300 hover:text-orange-500 hover:translate-x-2 ${colors.subText}`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className={`text-lg font-bold mb-5 ${colors.text}`}>Connect</h3>

            <div className="flex flex-wrap gap-4">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`
                    w-12
                    h-12
                    rounded-full
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:scale-110
                    ${colors.socialBtn}
                  `}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>{" "}
        {/* Bottom */}
        <div
          className={`mt-16 pt-8 border-t ${colors.divider} flex flex-col md:flex-row items-center justify-between gap-6`}
        >
          <p className={`text-sm ${colors.subText}`}>
            © {year} Ahmed Ragheb. Built with React & Tailwind CSS.
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className="
              group
              inline-flex
              items-center
              gap-2
              px-6
              py-3
              rounded-full
              bg-gradient-to-r
              from-orange-500
              to-orange-600
              text-white
              font-medium
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_0_30px_rgba(249,115,22,.45)]
            "
          >
            <ArrowUp
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
