interface PageHeader {
  pageTitle: string;
  pageDescription: string;
}

const TitleHero = ({ pageTitle, pageDescription }: PageHeader) => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 items-center md:mt-10">
      {/* Background */}
      <div
        className="col-start-1 row-start-1 absolute -z-10 stroke-width text-9xl font-black md:text-[256px] overflow-hidden whitespace-nowrap"
        style={{
          color: 'transparent',
          WebkitTextStrokeColor: '#767676',
        }}>
        {pageTitle}
      </div>
      {/* Foreground */}
      <div className="col-start-1 row-start-1 pt-48 px-8 justify-self-center flex flex-col gap-3 md:items-center md:gap-5">
        <div className="z-1 text-5xl font-black md:text-7xl lg:text-[96px] md:whitespace-nowrap">{pageTitle}</div>
        <div className="md:w-2/5">{pageDescription}</div>
      </div>
    </div>
  );
};

export default TitleHero;
