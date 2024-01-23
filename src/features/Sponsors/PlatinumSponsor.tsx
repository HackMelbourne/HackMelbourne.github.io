import HMButton from "../../assets/button/HMButton";
import { Link } from 'react-router-dom';

interface PlatinumProps {
  image: string;
  sponsor: string;
  desc: string;
  button: string;
  website: string;
}

const PlatinumSponsor = ({ image, sponsor, desc, button, website }: PlatinumProps) => {
  return (
    <div className="flex flex-col items-center gap-3 min-w-[400px] max-w-[800px] w-1/2 m-auto mb-6 p-8
    bg-[#171717] border border-[#E5E5E5] rounded-xl box-border">
      <img src={image} className="w-10/12 min-w-[350px] max-w-[500px] h-[200px] mb-2.5 rounded-xl" />
      <h3 className="text-5xl font-extrabold">{sponsor}</h3>
      <p className="max-w-[400px] text-center text-base font-medium">{desc}</p>
      <Link to={website}>
        <HMButton text={button} color="secondary" style="border"></HMButton>
      </Link>
    </div>
  );
};

export default PlatinumSponsor;