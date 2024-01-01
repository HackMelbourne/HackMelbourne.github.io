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
    <div className="bg-cover rounded-[10px] bg-center flex flex-col mx-auto w-4/5 max-w-[800px] min-h-[200px] mb-10" style={{ backgroundImage: `url(${bgImage})` }}>
      <img
        className="h-48 rounded-[10px] object-cover w-[20%]"
        src={frontImage}
        alt={name}
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm text-gray-600">{date}</p>
        <p className="text-sm text-gray-600">{brief}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default EventItem;
