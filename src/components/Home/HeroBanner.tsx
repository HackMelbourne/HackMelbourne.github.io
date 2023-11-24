import { Link } from 'react-router-dom';
import '../../styles/HeroBanner.css';

const HeroBanner = () => {
  return (
    <div className="max-w-[1100px] grid grid-cols-1 m-auto items-center">
      <div className="z-10 col-start-1 row-start-1 flex flex-col items-center">
        <div className="text-center font-black text-7xl md:text-9xl">
          HACK
          <br />
          MELB
          <br />
          2023
        </div>
        <a
          href="https://www.google.com"
          className="mt-4 px-6 py-3 rounded-md bg-blue-600/20 border border-blue-500 font-semibold">
          Buy Hoodies
        </a>
      </div>
      <div className="col-start-1 row-start-1 text-center font-black text-9xl md:text-[15rem] text-outline text-transparent select-none">
        HACK
        <br />
        MELB
        <br />
        2023
      </div>
    </div>
  );
};

export default HeroBanner;
