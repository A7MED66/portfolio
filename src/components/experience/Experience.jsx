import icon from "../../assets/ME.jpg";
import icon_a from "../../assets/ME_LIGHT.jpg";

export default function Experience({ darkMode }) {
  const colors = darkMode
    ? {
        text: "text-white",
        imgg: icon,
      }
    : {
        text: "text-black",
        imgg: icon_a,
      };

  return (
    <section
      id="experience"
      className="relative overflow-hidden flex flex-col text-gray-600 body-font"
    >
      {/* Glow */}
      <div className="absolute top-[100px] left-1/2 -translate-x-1/2 flex items-start justify-center">
        <div className="h-96 w-96 bg-gradient-to-br from-[#ff910a] blur-2xl opacity-30 rounded-full"></div>
        <div className="h-96 w-96 bg-gradient-to-r from-[#ff910a] blur-2xl opacity-30 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center gap-12">

        {/* Left Side - hidden on mobile, visible from md up */}
        <div
          data-aos="fade-right"
          data-aos-delay="500"
          className="hidden md:flex md:w-1/2 justify-center"
        >
          <div className="relative">
            <div
              className="absolute h-[450px] w-[300px] rounded-xl rotate-3 -top-5 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 shadow-[0_0_40px_rgba(255,165,0,.7)]"
            ></div>

            <img
              src={colors.imgg}
              alt="Ahmed Ragheb"
              className="relative z-10 w-[310px] h-[450px] object-cover rounded-xl -ml-5"
            />
          </div>
        </div>

        {/* Right Side */}
        <div
          data-aos="fade-left"
          data-aos-delay="500"
          className="w-full md:w-1/2"
        >
          <h1 className="text-4xl font-bold text-orange-500 mb-8">
            Experience & Training
          </h1>

          {/* Front-End */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-orange-500">
              Front-End Development
            </h2>

            <p className={`${colors.text} font-semibold mt-1 mb-4`}>
              2025 – Present
            </p>

            <ul className={`${colors.text} space-y-3`}>
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">✓</span>
                React.js Development
              </li>

              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">✓</span>
                Responsive UI with Tailwind CSS & Bootstrap
              </li>

              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">✓</span>
                JavaScript (ES6+) & Modern Front-End Practices
              </li>

              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">✓</span>
                Git & GitHub Version Control
              </li>

              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">✓</span>
                Clean, Reusable & Maintainable Code
              </li>
            </ul>
          </div>

          {/* Training */}
          <div>
            <h2 className="text-2xl font-bold text-orange-500 mb-5">
              Professional Training
            </h2>

            <div className="border-l-2 border-orange-500 pl-5 space-y-6">

              <div>
                <h3 className={`font-bold text-lg ${colors.text}`}>
                  Digital Egypt Pioneers Initiative (DEPI)
                </h3>

                <p className="text-orange-500 text-sm mb-2">
                  Front-End Development Track | Dec 2025 – Jul 2026
                </p>

                <p className={colors.text}>
                  Completed an intensive front-end development program focused on
                  React, Tailwind CSS, JavaScript, Git, GitHub, and real-world
                  project development.
                </p>
              </div>

              <div>
                <h3 className={`font-bold text-lg ${colors.text}`}>
                  National Telecommunication Institute (NTI)
                </h3>

                <p className="text-orange-500 text-sm mb-2">
                  Web Design Summer Training | 2025
                </p>

                <p className={colors.text}>
                  Successfully completed hands-on training in HTML, CSS,
                  JavaScript, Bootstrap, Git, and freelancing fundamentals
                  through practical projects.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}