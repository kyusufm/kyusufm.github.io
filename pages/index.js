// ngext image
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

//framer motion
import {motion} from "framer-motion";

//variants
import {fadeIn} from "../variants";


const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30">
        <div className = "text-center flex flex-col justify-center xl:pt-10 xl:text-left h-full container mx-auto">
          {/* tittle */}
          <motion.h1 className="h1"
            variants={fadeIn('down',0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Transforming Ideas <br /> Into{' '}
            <span className="text-accent"> Digital Reality </span>
          </motion.h1>
          {/* subtitle */}
          <motion.p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
            variants={fadeIn('down',0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quisquam, quod, quia, quibusdam quisquam quod quia quibusdam quisquam quod quia quibusdam quisquam quod quia quibusdam quisquam quod quia quibusdam quisquam quod.
          </motion.p>
          {/* button */}
          <div className="flex justify-center xl:hidden relative ">
            <ProjectsBtn />
          </div>
          <motion.div variants={fadeIn('down',0.8)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex">
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
        </div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar image */}
        <motion.div className="w-full h-full max-w-[600px] max-h-[578px] absolute -bottom-32 lg:bottom-0 lg:right-[12%]"
          variants={fadeIn('up',0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{duration: 0.5, ease:"easeInOut"}}
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
    );
};

export default Home;
