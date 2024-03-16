import DynamicLink from '../../components/DynamicLink/DynamicLink';
import { motion } from 'framer-motion';

const Calendar = () => {
    const data = [
        {
            title: "Hackiethon",
            description: "This is the best hackathon in the world wooo.",
            image: "https://placehold.co/300x200",
            date: "10/01/2024",
            link: "https://www.google.com/",
            time: "13:00 - 15:00"
        },
        {
            title: "Hackiethon",
            description: "This is the best hackathon in the world wooo.",
            image: "https://placehold.co/300x200",
            date: "10/01/2024",
            link: "https://www.google.com/",
            time: "13:00 - 15:00"
        },
        {
            title: "Hackiethon",
            description: "This is the best hackathon in the world wooo.",
            image: "https://placehold.co/300x200",
            date: "10/01/2024",
            link: "https://www.google.com/",
            time: "13:00 - 15:00"
        },
        {
            title: "Hackiethon",
            description: "This is the best hackathon in the world wooo.",
            image: "https://placehold.co/300x200",
            date: "10/01/2024",
            link: "https://www.google.com/",
            time: "13:00 - 15:00"
        },
        {
            title: "Hackiethon",
            description: "This is the best hackathon in the world wooo.",
            image: "https://placehold.co/300x200",
            date: "10/01/2024",
            link: "https://www.google.com/",
            time: "13:00 - 15:00"
        },        {
            title: "Hackiethon",
            description: "This is the best hackathon in the world wooo.",
            image: "https://placehold.co/300x200",
            date: "10/01/2024",
            link: "https://www.google.com/",
            time: "13:00 - 15:00"
        }
    ]

    return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-[80%] mx-auto max-h-[75vh] md:max-h-[45vh] overflow-y-auto border">
    {data.map((eventItem, index) => {
        return (
            <div className="flex flex-col w-64 h-[27rem] items-center" key={index}>
                <img className="min-h-[60%] max-h-[60%] h-[60%] border-red-600 object-cover" src={eventItem.image} onClick={() => window.open(eventItem.link, '_blank', 'noreferrer')} />
                <div className="min-h-[40%] max-h-[40%] w-11/12 border px-3 py-4 flex flex-col justify-between gap-1">
                    <p className="text-xs">{eventItem.date}</p>
                    <h4 className="text-xl font-bold">{eventItem.title.toUpperCase()}</h4>
                    <p className="text-xs">{eventItem.description}</p>
                    <DynamicLink link={eventItem.link} className="mt-1">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex justify-center px-4 py-3 rounded-md text-xs w-fit bg-yellow-600/20 border-yellow-500 border">
                            Learn More
                        </motion.div>
                    </DynamicLink>
                </div>
            </div>
        )
    })}
</div>

    )
}

export default Calendar