import HMButton from "../../components/Button/HMButton";
import { Link } from "react-router-dom";
import DynamicLink from "../../components/DynamicLink/DynamicLink";

import SponsorProps from "./SponsorProps";

const Sponsor = ({ tier, image, sponsor, desc, button, website }: SponsorProps) => {
  switch (tier) {
    case "Gold":
      return (
        <div className="flex flex-col w-full max-w-4xl items-start md:items-center gap-5 md:px-12 p-12 bg-neutral-900 border border-white rounded-xl box-border">
          <img src={image} className="object-contain max-h-52 rounded-md" />
          <h3 className="text-5xl font-extrabold text-center">{sponsor}</h3>
          <p className="text-left text-base">{desc}</p>
          <HMButton text={button!} color="secondary" style="border" link={website}></HMButton>
        </div>
      );
    case "Silver":
      return (
        <div className="flex flex-col max-w-md items-start md:items-center gap-3 px-8 py-8 bg-neutral-900 border border-white rounded-xl box-border">
          <img src={image} className="object-contain max-h-48 rounded-md" />
          <h3 className="text-4xl font-extrabold text-center">{sponsor}</h3>
          <p className="text-left text-base">{desc}</p>
          <a
            href={website}
            className="text-neutral-300 underline py-2 pr-2 hover:text-yellow-500"
            target="_blank"
            rel="noopener">
            {button}
          </a>
        </div>
      );
    case "Bronze":
      return (
        <div className="flex flex-col">
          <div className="w-[350px] h-[0.2px] bg-white"></div>
          <div className="flex">
            <div className="w-[0.2px] bg-white"></div>
            <div className="flex flex-col items-start md:items-center gap-6 w-[350px] m-auto px-7 py-8 bg-neutral-900 box-border">
              <img src={image} className="w-[300px] h-[100px] rounded-xl" />
              <p className="max-w-[340px] text-center text-base">{desc}</p>
            </div>
            <div className="w-[0.2px] bg-white"></div>
          </div>
          <div className="w-[350px] h-[0.2px] bg-white"></div>
        </div>
      );
    // case 'Community':
    //   return (
    //     <div className="flex flex-col">
    //       <div className="w-[350px] h-[0.2px] bg-white"></div>
    //       <div className="flex">
    //         <div className="w-[0.2px] bg-white"></div>
    //         <div className="flex flex-col items-center w-[350px] m-auto px-7 py-8 bg-black box-border">
    //           <img src={image} className="w-[300px] h-[100px] rounded-xl" />
    //         </div>
    //         <div className="w-[0.2px] bg-white"></div>
    //       </div>
    //       <div className="w-[350px] h-[0.2px] bg-white"></div>
    //     </div>
    //   );
  }
};

export default Sponsor;
