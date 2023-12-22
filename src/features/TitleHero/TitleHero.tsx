interface PageHeader {
    pageTitle: string;
    pageDescription: string;
}

const TitleHero = ({ pageTitle, pageDescription }: PageHeader) => {
  return (
    <>
      {/* Title */}
      <div className="flex flex-col items-center md:mt-10">
        <div className="stroke-width z-0 absolute top-[10%] left-[-37%] text-9xl font-black md:left-[-12%] md:text-[256px] overflow-hidden whitespace-nowrap" style={{
            color: 'transparent',
            WebkitTextStrokeColor: '#767676'
        }}>
          {pageTitle}
        </div>
        <div className="absolute top-[18%] w-[85%] flex flex-col gap-3 md:absolute md:top-[35%] md:items-center md:gap-5">
          <div className="z-1 text-5xl font-black md:text-[96px] md:whitespace-nowrap">
            {pageTitle}
          </div>
          <div className="md:w-2/5">
            {pageDescription}
          </div>
        </div>
      </div>
    </>
  )
}

export default TitleHero