import { useEffect, useRef } from 'react';

interface PageHeader {
  pageTitle: string;
  pageDescription: string;
}

const TitleHero = ({ pageTitle, pageDescription }: PageHeader) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="grid grid-cols-1 grid-rows-1 items-center md:mt-10 relative overflow-clip">
      {/* Background */}
      <div
        className="col-start-1 row-start-1 absolute -z-10 stroke-width text-9xl font-black md:text-[256px] whitespace-nowrap left-1/2"
        style={{
          color: 'transparent',
          WebkitTextStrokeColor: '#767676',
        }}
        ref={ref}>
        <div className=" relative -left-1/2">{pageTitle}</div>
      </div>
      {/* Foreground */}
      <div className="col-start-1 row-start-1 pt-48 px-8 j">
        <div className="justify-self-center flex flex-col gap-3 md:items-center md:gap-5">
          <div className="z-1 text-5xl font-black md:text-7xl lg:text-[96px] md:whitespace-nowrap">{pageTitle}</div>
          <div className="md:w-2/5">{pageDescription}</div>
        </div>
      </div>
    </div>
  );
};

export default TitleHero;
