import Hi from "../../assets/hi.png";
import CV from "./cv.pdf";
import ME from "../../assets/ME.jpg";
import ME_LIGHT from "../../assets/ME_LIGHT.jpg";

export default function Hero({ darkMode })  {
  const colors = darkMode
    ? {
        text: "text-white",
        subText: "text-orange-400",
        img: ME,
        para: "text-gray-300",
      }
    : {
        text: "text-black",
        subText: "text-orange-500",
        img: ME_LIGHT,
        para: "text-gray-700",
      };

  return (
    <div
      id="home"
      className="relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col pt-20"
    >
      {/* Background shape */}
      <div className="md:h-[720px] h-[960px] md:w-[640px] w-[880px] right-0 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 absolute rounded-full transform rotate-12 -top-20"></div>

      <section
        data-aos="fade-right"
        data-aos-delay="250"
        className="body-font relative overflow-hidden"
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          
          {/* Text */}
          <div className="lg:flex-grow md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left relative">

            <img
              src={Hi}
              data-aos="fade-left"
              data-aos-delay="900"
              alt="hi"
              className="absolute top-[350px] left-44 md:top-[-30px] md:left-[450px] w-10 h-10 md:w-32 md:h-32 transform -translate-x-1/2 -translate-y-1/2"
            />

            <h1 className={`title-font text-4xl sm:text-5xl ${colors.text} mb-4 font-bold`}>
              Hi! I'm{" "}
              <span
                className={
                  darkMode
                    ? "text-gray-950 md:text-orange-400"
                    : "text-gray-950 md:text-orange-500"
                }
              >
                Ahmed Ragheb
              </span>
            </h1>

            <p className={`mb-8 leading-relaxed ${colors.para} max-w-lg`}>
              I'm a Front-End Developer specialized in React.js, focused on
              building scalable and high-performance web applications. I create
              dynamic and interactive user interfaces using modern JavaScript,
              with strong expertise in component-based architecture, reusable
              code, and clean design principles. I have hands-on experience with
              React Hooks, state management, and performance optimization,
              ensuring fast, responsive, and seamless user experiences.
            </p>

            <div className="flex gap-4">
              <a href={CV} download>
                <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-lg transition duration-300">
                  Download CV
                </button>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              src={colors.img}
              alt="hero"
              className="object-cover object-center rounded-full w-80 h-80"
            />
          </div>

        </div>
      </section>
    </div>
  );
};