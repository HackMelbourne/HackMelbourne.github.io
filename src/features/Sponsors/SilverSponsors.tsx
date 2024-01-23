interface SilverProps {
  image: string;
  desc: string;
}

const SilverSponsor = ({ image, desc }: SilverProps) => {
  return (
    <div className="flex flex-col items-center gap-6 w-[350px] m-auto px-7 py-8 bg-[#171717] rounded-xl box-border">
      <img src={image} className="w-[300px] h-[100px] rounded-xl" />
      <p className="max-w-[340px] text-center text-base font-medium">{desc}</p>
    </div>
  );
};

export default SilverSponsor;