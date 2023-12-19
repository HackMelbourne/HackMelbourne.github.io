import '../../styles/gradients.css';
import { motion } from "framer-motion";

const JoinTheTeam = () => {
  return (
    <motion.div
      className="join-team-gradient-border flex flex-col min-h-[40vh] rounded-sm md:rounded-[20px] md:min-h-[60vh] max-w-[1100px] w-[100%] md:w-[80%] m-auto items-center justify-center gap-3 md:gap-6"
      initial={{ opacity:0 }}  
      transition={{ duration: 3 }} 
      whileInView={{ opacity: 1}}
      viewport={{ once: true }}
    >      
      <div className="text-center text-2xl md:text-5xl font-bold text-white ">
        Join the <span className="text-primary">Hack</span>
        Melbourne
      </div>
      <div className="text-2xl md:text-5xl font-bold text-white">
        team for 2024
      </div>
      <div className="text-sm text-center">
        Be make an impact on our future and learn some
        <br />
        more skills along the way!
      </div>
      {/* Copied button styling from BannerStandard for now */}
      <div
        className="text-sm flex w-[120px] h-[45px] py-2.5 px-[15px] justify-center items-center gap-2.5
          rounded-[5px] bg-primary bg-opacity-40 border-primary border-[1px]">
        Apply Now
      </div>
    </motion.div>
  );
};

export default JoinTheTeam;