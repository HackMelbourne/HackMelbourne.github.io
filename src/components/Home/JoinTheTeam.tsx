import { MeshWobbleMaterial } from '@react-three/drei';
import '../../styles/gradients.css';

interface JoinTheTeam {
  title_start: string;
  first_name: string;
  last_name: string;
  title_end: string;
  desc_start: string;
  desc_end: string;
  action: string;
}

const JoinTheTeam = ({ title_start, first_name, last_name, title_end, desc_start, desc_end, action }: JoinTheTeam) => {
  return (
    <div className="join-team-gradient-border flex flex-col min-h-[40vh] rounded-sm md:rounded-[20px] md:min-h-[60vh] max-w-[1100px] w-[100%] md:w-[80%] m-auto items-center justify-center gap-3 md:gap-6">      
      <div className="text-center text-2xl md:text-5xl font-bold text-white ">
        {title_start}<span className="text-primary">{first_name}</span>
        {last_name}
      </div>
      <div className="text-2xl md:text-5xl font-bold text-white">
        {title_end}
      </div>
      <div className="text-sm text-center">
        {desc_start}
        <br />
        {desc_end}
      </div>
      {/* Copied button styling from BannerStandard for now */}
      <div
        className="text-sm flex w-[120px] h-[45px] py-2.5 px-[15px] justify-center items-center gap-2.5
          rounded-[5px] bg-primary bg-opacity-40 border-primary border-[1px]">
        {action}
      </div>
    </div>
  );
};

export default JoinTheTeam;
