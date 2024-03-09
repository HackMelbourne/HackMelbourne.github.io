import HMButton from "../../components/Button/HMButton";
import { Link } from "react-router-dom";
import DynamicLink from "../../components/DynamicLink/DynamicLink";

import SponsorProps from "./SponsorProps";

const Sponsor = ({ tier, image, sponsor, desc, button, website }: SponsorProps) => {
  switch (tier) {
    case "Gold":
      return (
        <div className="flex flex-col max-w-xl items-center gap-3 px-7 p-8 bg-neutral-900 border border-white rounded-xl box-border">
          <img src={image} className="object-contain max-w-[1100px] max-h-52 rounded-md" />
          <h3 className="text-5xl font-extrabold text-center">{sponsor}</h3>
          <p className="max-w-lg text-left text-base font-medium">{desc}</p>
          <HMButton text={button!} color="secondary" style="border" link={website}></HMButton>
        </div>
      );
    case "Silver":
      return (
        <div className="flex flex-col max-w-md items-center gap-3.5 px-7 py-8 bg-black border border-white rounded-xl box-border">
          <img src={image} className="object-contain max-w-[1100px] max-h-48 rounded-md" />
          <h3 className="text-4xl font-extrabold text-center">{sponsor}</h3>
          <p className="max-w-sm h-24 text-left text-base font-medium">{desc}</p>
          <HMButton text={button!} color="neutral" style="underline" link={website}></HMButton>
        </div>
      );
    case "Bronze":
      return (
        <div className="flex flex-col">
          <div className="w-[350px] h-[0.2px] bg-white"></div>
          <div className="flex">
            <div className="w-[0.2px] bg-white"></div>
            <div className="flex flex-col items-center gap-6 w-[350px] m-auto px-7 py-8 bg-black box-border">
              <img src={image} className="w-[300px] max-w-[1100px] h-[100px] rounded-xl" />
              <p className="max-w-[340px] text-center text-base font-medium">{desc}</p>
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
