import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const openWebPage = () => {
  window.open('https://github.com/JabirKhadiri', '_blank');
};

const Work: React.FC = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-7 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work
              </h2>
              <p className="max-x-sm mb-5">
                I have been gaining
                valuable experience in both GUI and full-stack development. I
                have been working on various projects where I have honed my
                skills in designing user interfaces that are visually appealing
                and intuitive to use. Through my dedication and continuous
                learning, I am eager to further enhance my proficiency in GUI
                and full-stack development.
              </p>
              <button onClick={openWebPage} className="btn btn-sm">View all projects</button>
            </div>
            <div
              className="group relative overflow-hidden border-2
          border-white/50 rounded-xl"
            >
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
            z-40 transition-all duration-300"
              ></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
              />
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24
            transition-all duration-500 z-50"
              >
                <span className="text-gradient">GUI using Java and JavaFX</span>
              </div>
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-14
            transition-all duration-700 z-50"
              >
                <span className="text-3xl text-white">Tracking orders</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            <div
              className="group relative overflow-hidden border-2
          border-white/50 rounded-xl"
            >
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
            z-40 transition-all duration-300"
              ></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
              />
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24
            transition-all duration-500 z-50"
              >
                <span className="text-gradient">Static responsive web site</span>
              </div>
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-14
            transition-all duration-700 z-50"
              >
                <span className="text-3xl text-white">World Cup 2022</span>
              </div>
            </div>
            <div
              className="group relative overflow-hidden border-2
          border-white/50 rounded-xl"
            >
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
            z-40 transition-all duration-300"
              ></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
              />
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24
            transition-all duration-500 z-50"
              >
                <span className="text-gradient">Fullstack Ecommerce web site</span>
              </div>
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-14
            transition-all duration-700 z-50"
              >
                <span className="text-3xl text-white">GreenStore</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
