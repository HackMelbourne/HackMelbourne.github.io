import HMButton from "../../assets/button/HMButton";
import { Link } from 'react-router-dom';

interface SilverProps {
  image: string;
  desc: string;
}

const PlatinumSponsor = ({ image, desc }: SilverProps) => {
  return (
    <div className="flex flex-col items-center gap-2.5 w-[400px] m-auto bg-[#171717] border border-[#E5E5E5] rounded-xl">

      <div className="flex flex-col items-center">
        <img 
          src={image}
          className="w-[300px] h-[100px] rounded-xl"
        />
        <p className="text-base font-medium">{desc}</p>
      </div>
    </div>
  );
};

export default PlatinumSponsor;