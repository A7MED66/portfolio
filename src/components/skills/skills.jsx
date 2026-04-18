import react from "../../assets/react.png";
import java from "../../assets/js.png";
import css from "../../assets/css.png";
import TS from "../../assets/TS.png";
import tailwindcss from "../../assets/tailwindcss.png";
import html from "../../assets/html.png";
export default function Skill({ darkMode })  {
  const colors = darkMode
    ? {
        text: "text-white",
        
      }
    : {
        text: "text-black",
        
      };
  return (
    <section
      id="skills"
      className=" relative overflow-hidden flex flex-col text-white body-font"
    >
      <div className=" container flex flex-wrap px-5 py-24 mx-auto items-center">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className=" md:w-1/2 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pd-10 border-b border-orange-400"
        >
          <h1
            data-aos="fade-right"
            data-aos-delay="500"
            className={`sm:text-4xl text-2xl font-medium title-font mb-2 ${colors.text}`} 
          >
            Skills
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="500"
            className={`leading-relaxed text-base ${colors.text}`} 
          >
            I have strong expertise in React.js, including Hooks and
            component-based architecture, along with solid experience in
            JavaScript (ES6+) and TypeScript, HTML5, and CSS3. I’m proficient in
            building responsive and modern interfaces using Bootstrap 5 and
            Tailwind CSS, and I have a good understanding of state management
            using Context API and Redux. I also have hands-on experience working
            with RESTful APIs, handling asynchronous data, and integrating
            backend services. Additionally, I’m familiar with Next.js for
            building optimized and scalable applications, and I focus on UI/UX
            principles, performance optimization, clean code practices, and
            using Git & GitHub for efficient version control and collaboration.
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="500"
          className=" flex flex-col md:w-1/2 md:pl-12"
        >
          <nav className=" flex flex-wrap list-none -mb-1">
            <li className=" lg:w-1/3 mb-4 w-1/2">
              <img
                src={react}
                alt="react.jsx"
                className="  w-24 h-24 object-cover"
              />
            </li>
            <li className=" lg:w-1/3 mb-4 w-1/2">
              <img src={java} alt="java" className="  w-24 h-24 object-cover" />
            </li>
            <li className=" lg:w-1/3 mb-4 w-1/2">
              <img src={html} alt="html" className="  w-24 h-24 object-cover" />
            </li>
            <li className=" lg:w-1/3 mb-4 w-1/2">
              <img
                src={tailwindcss}
                alt="tailwindcss"
                className="  w-24 h-24 object-cover"
              />
            </li>
            <li className=" lg:w-1/3 mb-4 w-1/2">
              <img src={css} alt="css" className="  w-24 h-24 object-cover" />
            </li>
            <li className=" lg:w-1/3 mb-4 w-1/2">
              <img src={TS} alt="ts" className="  w-24 h-24 object-cover" />
            </li>
          </nav>
        </div>
      </div>
    </section>
  );
}
