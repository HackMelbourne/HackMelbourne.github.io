import { MeshWobbleMaterial } from '@react-three/drei';
import '../../styles/gradients.css';

interface JoinTheTeam {
  title: string[];
  desc: string[];
  button: string;
}

const JoinTheTeam = ({ title, desc, button }: JoinTheTeam) => {
  return (
    <div className="join-team-gradient-border flex flex-col min-h-[40vh] rounded-sm md:rounded-[20px] md:min-h-[60vh] max-w-[1100px] w-[100%] md:w-[80%] m-auto items-center justify-center gap-3 md:gap-6">      
      <div className="text-center text-2xl md:text-5xl font-bold text-white ">
        {title[0]}<span className="text-primary">{title[1]}</span>
        {title[2]}
      </div>
      <div className="text-2xl md:text-5xl font-bold text-white">
        {title[3]}
      </div>
      <div className="text-sm text-center">
        {desc[0]}
        <br />
        {desc[1]}
      </div>
      {/* Copied button styling from BannerStandard for now */}
      <div
        className="text-sm flex w-[120px] h-[45px] py-2.5 px-[15px] justify-center items-center gap-2.5
          rounded-[5px] bg-primary bg-opacity-40 border-primary border-[1px]">
        {button}
      </div>
    </div>
  );
};

export default JoinTheTeam;
