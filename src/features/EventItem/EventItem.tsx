import React from 'react';

interface EventItemProps {
    name: string;
    date: string;
    brief: string;
    description: string;
    bgImage: string;
    frontImage: string;
    link: string;
}

const EventItem = ({ name, date, brief, description, bgImage, frontImage, link }: EventItemProps) => {

  return (
    <div className="rounded-[10px] mx-auto w-4/5 max-w-[800px] my-20 min-h-[200px]">
      {/* small screen heading */}
      <h2 className="text-4xl font-bold mb-2 md:hidden block text-center">{name}</h2>
      <div className="md:ml-0 ml-6 h-[30vw] bg-cover bg-center rounded-[10px]" style={{ backgroundImage: `url(${bgImage})` }}></div>
      <div className="flex">
        <div className="w-[60%] md:w-[40%] md:p-4">
          <img
            className="h-[120%] relative -top-[20%] rounded-[10px] object-cover w-full"
            src={frontImage}
            alt={name}
          />
        </div>
        <div className="md:p-4 p-2 pr-0 flex flex-col justify-between w-[40%] md:w-[60%] ">
          <div>
            <h2 className="text-4xl font-bold mb-2 hidden md:block">{name}</h2>
            <div className="flex flex-col md:flex-row gap-2 mb-2 md:text-xs sm:text-xl text-base">
              <p className="font-bold">{date}</p>
              <p className="text-neutral-400">{brief}</p>
            </div>
            <p className="text-sm overflow-y-hidden min-h-[40%] mb-2 hidden md:block">{description}</p>
          </div>
          <a href={link} className="hidden md:block w-[30%] text-center mt-4 py-3 rounded-md bg-blue-600/20 border border-blue-500 font-semibold">
            Visit here
          </a>
        </div>
      </div>
      {/* small screen items */}
      <div className="p-4 flex flex-col items-center justify-between w-[100%]">
        <p className="md:hidden block text-sm overflow-y-hidden min-h-[40%] mb-2">{description}</p>
        <a href={link} className="md:hidden block w-[60%] text-center mt-4 py-3 rounded-md bg-blue-600/20 border border-blue-500 font-semibold">
          Visit here
        </a>
      </div>
    </div>
  );
};

export default EventItem;
