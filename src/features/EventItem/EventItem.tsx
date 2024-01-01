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
    <div className="rounded-[10px] mx-auto w-4/5 max-w-[800px] mb-10 min-h-[200px]">
      <div className="h-[30vw] bg-cover bg-center rounded-[10px]" style={{ backgroundImage: `url(${bgImage})` }}></div>
      <div className="flex">
        <div className="w-[40%] px-10">
          <img
            className="h-[120%] -mt-[25%] rounded-[10px] object-cover w-full"
            src={frontImage}
            alt={name}
          />
        </div>
        <div className="p-4 flex flex-col justify-between w-[60%]">
          <div>
            <h2 className="text-4xl font-bold mb-2">{name}</h2>
            <div className="flex gap-2 mb-2">
              <p className="font-bold text-xs">{date}</p>
              <p className="text-gray-600 text-xs">{brief}</p>
            </div>
            <p className="text-sm text-gray-600 overflow-y-hidden max-h-[40%] min-h-[40%] h-[10vh] truncate">{description}</p>
          </div>
          <a href={link} className="w-[30%] text-center inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Visit here
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
