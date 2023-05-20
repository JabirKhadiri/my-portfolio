import { Link } from "react-scroll";
import Logo from "../assets/logo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <header className="py-5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img className="w-[110px] h-auto" src={Logo} />
          </a>
          <div className="flex items-center gap-x-6 mx-auto lg:mx-0">
            <Link to="contact" smooth={true} duration={1500}>
              <button className="btn btn-sm">Work with me</button>
            </Link>
            <div className="flex gap-x-2">
              <a
                href="https://github.com/JabirKhadiri"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/jabir-khadiri-854618246/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
