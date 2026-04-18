
import icon from "../../assets/ME.jpg";
import icon_a from "../../assets/ME_LIGHT.jpg";


export default function Experience({ darkMode })  {
  const colors = darkMode
    ? {
        text: "text-white",
        imgg : icon
        
      }
    : {
        text: "text-black",
        imgg: icon_a
        
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

      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center gap-10">
        {/* LEFT SIDE (Image + box) */}
        <div
          data-aos="fade-right"
          data-aos-delay="500"
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative">
            <div
              className="h-[450px] w-[300px] 
              bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 
              absolute rounded-xl rotate-4 -top-6 shadow-[0_0_40px_rgba(255,165,0,0.7)] z-0"
            ></div>

            <img
              src={colors.imgg}
              alt="experience"
              className="object-cover w-[310px] h-[450px] rounded-xl relative z-10 -ml-5 "
            />
          </div>
        </div>

        {/* RIGHT SIDE (Text) */}
        <div
          data-aos="fade-left"
          data-aos-delay="500"
          className="w-full md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-orange-500">
            Experience
          </h1>

          <h2 className={`title-font font-bold ${colors.text} sm:text-2xl`}>
            Remote Freelance Front-End Developer
          </h2>

          <p className={`mb-2 ${colors.text} font-semibold`}>2025 - Present:</p>

          <ul className={`mb-6 ${colors.text} leading-relaxed space-y-2`}>
            <li className="border-l-2 border-orange-500 pl-3">
              Built responsive and modern web applications using React and
              Tailwind.
            </li>
            <li className="border-l-2 border-orange-500 pl-3">
              Translated client requirements into user-friendly interfaces.
            </li>
            <li className="border-l-2 border-orange-500 pl-3">
              Delivered high-performance projects with clean code.
            </li>
            <li className="border-l-2 border-orange-500 pl-3">
              Collaborated using Git & GitHub.
            </li>
          </ul>

          <h2 className={`title-font font-bold ${colors.text} sm:text-2xl`}>
            Career Start
          </h2>

          <p className={`${colors.text} leading-relaxed`}>
            Although I’m at the beginning of my professional journey and haven’t
            worked with companies yet, I have developed strong skills through
            personal and training projects. I’m fully prepared to take on my
            first professional opportunity, bringing dedication, fast learning,
            and a strong commitment to delivering high-quality work that
            reflects my full potential.
          </p>
        </div>
      </div>
    </section>
  );
}
