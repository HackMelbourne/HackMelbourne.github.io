import { Link } from 'react-router-dom';

interface GoldProps {
  image: string;
  sponsor: string;
  desc: string;
  button: string;
  website: string;
}

const GoldSponsor = ({ image, sponsor, desc, button, website }: GoldProps) => {
  return (
    <div className="flex flex-col items-center gap-3.5 min-w-[375px] max-w-[500px] w-1/2 m-auto mb-6 px-7 py-8
    bg-[#171717] border border-[#E5E5E5] rounded-xl box-border">
      <img src={image} className="w-[400px] h-[150px] rounded-xl" />
      <h3 className="text-4xl font-extrabold">{sponsor}</h3>
      <p className="max-w-[400px] text-center text-base font-medium">{desc}</p>
      <Link to={website}>
        <p className="text-xl font-bold underline">{button}</p>
      </Link>
    </div>
  );
};

export default GoldSponsor;