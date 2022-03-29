import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Typewriter } from "react-simple-typewriter";
// import "react-simple-typewriter/dist/index.css";
import HomeBanner from "../assets/home_banner.jpg";
import Work from "./Work";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactWhatsapp from "react-whatsapp";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Resume from "../files/Thisyahlen_Resume.pdf";

import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "../css/social.css";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-[#0a192f]"
      style={{
        backgroundImage: `url(${HomeBanner})`,
        backgroundSize: "cover",
      }}
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-slate-100">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[white]">
          Thisyahlen Nair{" "}
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[white]">
          I'm a
          <span
            style={{ color: "red", fontWeight: "bolc", marginLeft: "10px" }}
          >
            <Typewriter
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              words={[
                "UI/UX Developer",
                "Front-End Developer",
                "Web Enthusiast",
              ]}
            />
          </span>
        </h2>
        <p className="text-slate-50	 py-4 max-w-[700px]">
          I’m a Front-End Developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive front-end web applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={Resume}
              download="Resume"
              target="_blank"
            >
              Get Resume
            </a>

            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
        <div className="social-container">
          <a
            href="https://github.com/Thisyahlen"
            className="github social"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
          <a
            href="https://www.linkedin.com/in/thisyahlen-nair-070938208/"
            className="linkedin social"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
          <a
            href="https://wa.me/60122279255"
            className="whatsapp social"
            target="_blank"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="3x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
