import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface BannerInfo {
  img: string;
  title: string;
  desc: string;
  button: string;
  link: string;
}

function BannerStandard({ img, title, desc, button, link }: BannerInfo) {
  return (
    <div
      className="flex w-3/4 min-w-[200px] max-w-[440px] md:w-4/5 md:min-w-[825px] md:max-w-[1100px] md:h-[505px]
        flex-col md:flex-row-reverse md:justify-between items-center gap-2.5 md:gap-0 m-auto"
    >
      <motion.div 
        className="md:w-[440px] md:h-[505px] shrink-0 self-stretch"
        initial={{ opacity:0 }}  
        transition={{ duration: 2 }} 
        whileInView={{ opacity: 1}}
        viewport={{ once: true }}
      >  
        <img src={img} />
      </motion.div>

      <motion.div 
        className="flex flex-col items-center md:items-start gap-5 self-stretch md:self-auto"
        initial={{ opacity:0 }}  
        transition={{ delay:1,duration: 2 }} 
        whileInView={{ opacity: 1}}
        viewport={{ once: true }}
      >
        <div>
          <p
            id="hoodie-title"
            className="self-stretch md:self-auto text-center md:text-left text-4xl md:text-5xl font-bold">
            {title}
          </p>
        </div>

        <div id="hoodie-desc" className="md:w-3/4">
          <p className="self-stretch md:self-auto text-center md:text-left text-base font-medium">{desc}</p>
        </div>

        <Link
          to={link}
          id="hoodie-button"
          className="flex w-[120px] h-[45px] py-2.5 px-[15px] justify-center items-center gap-2.5
                rounded-[5px] bg-[#F3B52A] bg-opacity-40 border-[#F3B52A] border-[1px]">
          <p className="text-base font-bold">{button}</p>
        </Link>
      </motion.div>
    </div>
  );
}

export default BannerStandard;
