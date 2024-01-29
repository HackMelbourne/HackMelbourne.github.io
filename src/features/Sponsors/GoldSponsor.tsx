import HMButton from '../../components/Button/HMButton';
import DynamicLink from '../../components/DynamicLink/DynamicLink';

interface GoldProps {
  image: string;
  sponsor: string;
  desc: string;
  button: string;
  website: string;
}

const GoldSponsor = ({ image, sponsor, desc, button, website }: GoldProps) => {
  return (
    <div
      className="flex flex-col items-center gap-3.5 px-7 py-8
    bg-[#171717] border border-[#E5E5E5] rounded-xl box-border">
      <img src={image} className="w-[400px] h-[150px] rounded-xl" />
      <h3 className="text-4xl font-extrabold">{sponsor}</h3>
      <p className="max-w-[340px] h-24 text-center text-base font-medium">{desc}</p>

      <DynamicLink link={website}>
        <HMButton text={button} color="neutral" style="underline"></HMButton>
      </DynamicLink>
    </div>
  );
};

export default GoldSponsor;
