import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { words } from "../constants";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#F5BA41]">Prince</span>
          </h1>
          <h1 className={`${styles.heroHeadText} text-white`}>
            — a Full Stack Developer.
          </h1>
          <p className={`${styles.heroSubText} mt-10 text-white-100`}>
            I build seamless, responsive web applications from front-end
            interfaces to robust back-end systems. With a passion for clean code
            and intuitive user experiences, I transform{" "}
            <span className="relative inline-block align-middle">
              <span className="h-10 overflow-hidden inline-block">
                <span className="wrapper">
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className="flex items-center justify-center md:gap-3 gap-1 h-10"
                    >
                      <img
                        src={word.imgPath}
                        alt={word.text}
                        className="w-6 h-6 md:w-10 md:h-10 xl:w-12 xl:h-12 md:p-2 p-1 rounded-full bg-white filter invert object-contain"
                      />
                      <span className="flex items-center justify-center leading-tight">
                        {word.text}
                      </span>
                    </span>
                  ))}
                </span>
              </span>
            </span>{" "}
            into scalable digital solutions.
          </p>

          <p className={`${styles.heroSubText} mt-20 text-white-100`}>
            Explore My Work
          </p>
          <p className={`${styles.heroSubText} text-white-100`}>↓</p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
