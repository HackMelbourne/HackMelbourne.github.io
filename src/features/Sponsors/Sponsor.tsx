import HMButton from '../../components/Button/HMButton';
import { Link } from 'react-router-dom';
import DynamicLink from '../../components/DynamicLink/DynamicLink';

interface SponsorProps {
  tier: string;
  image: string;
  sponsor?: string;
  desc?: string;
  button?: string;
  website?: string;
}

const Sponsor = ({ tier, image, sponsor, desc, button, website }: SponsorProps) => {
  switch (tier) {
    case 'Platinum':
      return (
        <div className="flex flex-col items-center gap-3 p-8 m-auto bg-[#171717] border border-blue rounded-xl box-border">
          <img src={image} className="w-10/12 min-w-[325px] max-w-[500px] h-[200px] mb-2.5 rounded-xl" />
          <h3 className="text-5xl font-extrabold">{sponsor}</h3>
          <p className="max-w-[400px] text-center text-base font-medium">{desc}</p>
          <Link to={website!}>
            <HMButton text={button!} color="secondary" style="border"></HMButton>
          </Link>
        </div>
      );
    case 'Gold':
      return (
        <div
          className="flex flex-col items-center gap-3.5 px-7 py-8 bg-[#171717] border border-[#E5E5E5] rounded-xl box-border">
          <img src={image} className="w-[400px] h-[150px] rounded-xl" />
          <h3 className="text-4xl font-extrabold">{sponsor}</h3>
          <p className="max-w-[340px] h-24 text-center text-base font-medium">{desc}</p>
    
          <DynamicLink link={website!}>
            <HMButton text={button!} color="neutral" style="underline"></HMButton>
          </DynamicLink>
        </div>
      );
    case 'Silver':
      return (
        <div className="flex flex-col">
          <div className="w-[350px] h-[0.2px] bg-white">          
          </div>
          <div className="flex">
            <div className="w-[0.2px] bg-white">          
            </div>
            <div className="flex flex-col items-center gap-6 w-[350px] m-auto px-7 py-8 bg-[#171717] box-border">
              <img src={image} className="w-[300px] h-[100px] rounded-xl" />
              <p className="max-w-[340px] text-center text-base font-medium">{desc}</p>
            </div>
            <div className="w-[0.2px] bg-white">          
            </div>
          </div>
          <div className="w-[350px] h-[0.2px] bg-white">         
          </div>
        </div>
      );
    case 'Community':
      return (
        <div className="flex flex-col">
          <div className="w-[350px] h-[0.2px] bg-white">          
          </div>
          <div className="flex">
            <div className="w-[0.2px] bg-white">          
            </div>
            <div className="flex flex-col items-center w-[350px] m-auto px-7 py-8 bg-black box-border">
              <img src={image} className="w-[300px] h-[100px] rounded-xl" />
            </div>
            <div className="w-[0.2px] bg-white">          
            </div>
          </div>
          <div className="w-[350px] h-[0.2px] bg-white">         
          </div>
        </div>
      );
  }
};

export default Sponsor;
