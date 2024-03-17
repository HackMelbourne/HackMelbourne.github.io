import CalendarItem from '../features/CalendarItem/CalendarItem';

const Calendar = () => {
    const data = [
        {
            title: "Hackiethon",
            description: "This is the best hackathon in the world wooo.",
            image: "https://placehold.co/300x200",
            date: "10/11 - 12/11",
            link: "https://www.google.com/",
        },
        {
            title: "Hackiethon",
            description: "This is the best hackathon in the world wooo.",
            image: "https://placehold.co/300x200",
            date: "10/11 - 12/11",
            link: "https://www.google.com/",
        },
        {
            title: "Hackiethon",
            description: "This is the best hackathon in the world wooo.",
            image: "https://placehold.co/300x200",
            date: "10/11 - 12/11",
            link: "https://www.google.com/",
        },
        {
            title: "Hackiethon",
            description: "This is the best hackathon in the world wooo.",
            image: "https://placehold.co/300x200",
            date: "10/11 - 12/11",
            link: "https://www.google.com/",
        },
        {
            title: "Hackiethon",
            description: "This is the best hackathon in the world wooo.",
            image: "https://placehold.co/300x200",
            date: "10/11 - 12/11",
            link: "https://www.google.com/",
        },        {
            title: "Hackiethon",
            description: "This is the best hackathon in the world wooo.",
            image: "https://placehold.co/300x200",
            date: "10/11 - 12/11",
            link: "https://www.google.com/",

        }
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-[80%] mx-auto max-h-[75vh] md:max-h-[45vh] overflow-y-auto border">
            {data.map((eventItem, index) => {
                return (
                    <CalendarItem 
                        title={eventItem.title} 
                        description={eventItem.description}
                        image={eventItem.image}
                        link={eventItem.link}
                        date={eventItem.date}
                        index={index}
                    />
                )
            })}
        </div>
    )
}

export default Calendar