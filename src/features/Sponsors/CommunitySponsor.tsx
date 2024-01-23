interface CommunityProps {
  image: string;
}

const CommunitySponsor = ({ image }: CommunityProps) => {
  return (
    <div className="flex flex-col items-center w-[400px] m-auto px-7 py-8 bg-[#171717] box-border">
      <img src={image} className="w-[300px] h-[100px] rounded-xl" />
    </div>
  );
};

export default CommunitySponsor;