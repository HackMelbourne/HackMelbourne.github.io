const Events = () => {
  return (
    <div className="w-screen max-w-full">

        {/* Title */}
        <div className="flex flex-col items-center md:mt-10">
          <div className="z-0 absolute top-[10%] left-[-37%] text-9xl font-black md:left-[-12%] md:text-[256px] overflow-hidden whitespace-nowrap" style={{
            color: 'transparent',
            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: '#767676'
          }}>
            Events / Initiatives
          </div>

          <div className="absolute top-[18%] w-[85%] flex flex-col gap-3 md:absolute md:top-[35%] md:items-center md:gap-5">
            <div className="z-1 text-5xl font-black md:text-[96px] md:whitespace-nowrap">
              Events / Initiatives
            </div>
            <div className="md:w-2/5">
              Throughout the year, HackMelbourne offers many opportunities for both
              complete beginners and seasoned veterans to display their teamwork, coding
              and leadership skills.
            </div>
          </div>
        </div>


    </div>
  );
 };
 
 export default Events;
 