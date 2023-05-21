import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const services = [
  {
    name: "Single-Page Application (SPA)",
    description:
      "As a developer, I specialize in creating Single-Page Applications (SPAs) using HTML, CSS, JavaScript, and React. With React, I can efficiently build dynamic and interactive web applications that deliver a seamless user experience. By leveraging my skills in HTML, CSS, and JavaScript, I ensure that the SPAs I develop are visually appealing, responsive, and feature-rich.",
    link: "https://developer.mozilla.org/fr/docs/Glossary/SPA",
  },
  {
    name: "Full-stack Application",
    description:
      "I specialize in developing full-stack applications using reactJS and TypeScript or PHP, with a focus on creating RESTful APIs. In TypeScript, I utilize the NestJS framework, which provides a scalable and modular architecture for building RESTful APIs. Whether it's PHP or TypeScript, I have the expertise to develop fullstack applications and APIs that meet your requirements.",
    link: "https://www.simplilearn.com/what-is-full-stack-development-article",
  },
  {
    name: "Graphic User Interface (GUI)",
    description:
      "I have experience in developing Graphical User Interface (GUI) applications using Java and JavaFX. JavaFX is a powerful framework that allows for the creation of visually appealing and interactive user interfaces. With my expertise in Java and JavaFX, I can design and implement GUI applications that provide a seamless user experience, leveraging the rich set of features and components available in JavaFX.",
    link: "https://www.educba.com/what-is-gui/",
  },
];

const Services: React.FC = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            style={{ backgroundSize: "95%" }}
            className="flex-1 lg:bg-services lg:bg-bottom  bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I am a Fullstack Web and GUI developer.
            </h3>
            <Link to="work" smooth={true} duration={1500}>
              <button className="btn btn-sm">Check my work</button>
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {services.map((service, index) => {
              return (
                <div
                  className="border-b border-white/20 mb-[38px]
                flex"
                  key={index}
                >
                  <div className="max-w-[476px]">
                    <h4
                      className="text-[20px] tracking-wider font-primary
                    font-semibold mb-6"
                    >
                      {service.name}
                    </h4>
                    <p className="font-secondary leading-tight">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn w-9 h-9 mb-[42px] flex justify-center
                    items-center"
                    >
                      <BsArrowUpRight />
                    </a>

                    <a className="text-gradient text-sm">
                    Learn more
                    </a>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
