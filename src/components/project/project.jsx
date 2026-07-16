import { ExternalLink } from "lucide-react";
import project1 from "../../assets/project/ecommerce.png";
import project4 from "../../assets/project/portfilo.png";
import project5 from "../../assets/project/spot.jpg";

function GithubIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.05.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.29 0 .32.22.7.83.58C20.56 21.79 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
export default function Project({ darkMode }) {
  const colors = darkMode
    ? {
        text: "text-white",
        subText: "text-gray-300",
        card: "bg-gray-900/60 border border-gray-700/50",
        tag: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
        btnOutline:
          "border border-gray-600 text-gray-300 hover:border-orange-400 hover:text-orange-400",
      }
    : {
        text: "text-gray-900",
        subText: "text-gray-600",
        card: "bg-white border border-gray-200",
        tag: "bg-orange-50 text-orange-600 border border-orange-200",
        btnOutline:
          "border border-gray-300 text-gray-600 hover:border-orange-500 hover:text-orange-500",
      };

  const projects = [
    {
      id: 1,
      title: "TruckSpot",
      desc: "Multi-role food truck discovery and ordering platform for Customers, Vendors, and Admins, built with React and Tailwind CSS with real-time API integration for orders and menus.",
      image: project5,
      tags: ["React", "Tailwind", "API"],
      demo: "https://end-truckspot.vercel.app/",
      code: "https://github.com/yousefjunior40-sys/DEPI-Project.git",
    },
    {
      id: 2,
      title: "Portfolio",
      desc: "A responsive personal portfolio showcasing projects and skills, featuring smooth scroll animations and a clean, modern layout built with React and Tailwind CSS.",
      image: project4,
      tags: ["React", "Tailwind", "AOS"],
      demo: "#",
      code: "https://github.com/A7MED66/portfolio.git",
    },
    {
      id: 3,
      title: "Tradex Agency",
      desc: "A multi-section business agency website featuring a services showcase, portfolio gallery, team profiles, pricing plans, and blog posts, built with Bootstrap and jQuery.",
      image: project1,
      tags: ["Bootstrap", "JavaScript", "CSS"],
      demo: "https://a7med66.github.io/E-comerce/",
      code: "https://github.com/A7MED66/E-comerce.git",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden flex flex-col body-font"
    >
      {/* Glow */}
      <div className="absolute top-[100px] left-1/2 -translate-x-1/2 flex items-start justify-center pointer-events-none">
        <div className="h-96 w-96 bg-gradient-to-br from-[#ff910a] blur-2xl opacity-20 rounded-full"></div>
        <div className="h-96 w-96 bg-gradient-to-r from-[#ff910a] blur-2xl opacity-20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-24 w-full">
        {/* Header */}
        <div data-aos="fade-up" data-aos-delay="200" className="mb-12">
          <h1 className="sm:text-4xl text-3xl font-bold text-orange-500 mb-2">
            Projects
          </h1>
          <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
              className={`rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1.5 ${colors.card} flex flex-col`}
            >
              {/* Image */}
              <div className="overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <h2 className={`text-xl font-bold mb-2 ${colors.text}`}>
                  {project.title}
                </h2>

                <p
                  className={`text-sm leading-relaxed mb-4 flex-1 ${colors.subText}`}
                >
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-3 py-1 rounded-full font-medium ${colors.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium transition-colors duration-300 hover:shadow-[0_0_20px_rgba(255,165,0,0.5)]"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${colors.btnOutline}`}
                  >
                    <GithubIcon size={14} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
