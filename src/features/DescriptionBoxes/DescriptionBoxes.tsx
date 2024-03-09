import { motion } from 'framer-motion';

// Edit span tags to white after bg change to black
interface Event {
  title: string;
  description: string;
  image: string;
  altImage: string;
}

interface DescriptionBoxesProps {
  events: Event[];
}

function DescriptionBoxes({ events }: DescriptionBoxesProps) {
  // Animation properties

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: (i: number) => ({
      opacity: 0,
      x: i * 30,
    }),
    show: {
      opacity: 1,
      x: -0,
      transition: {
        duration: 0.4,
      },
    },
  };

  // Ensure exactly three events
  if (events.length !== 3) {
    console.error('DescriptionBoxes component expects exactly three events.');
    return null;
  }

  return (
    <div className="mt-8 flex flex-col gap-3 lg:gap-0 h-[175vh] lg:min-h-[100vh] lg:h-[100vh] max-w-[1100px] lg:justify-between w-[80%] m-auto">
      {/* First Event */}
      <div className="flex flex-col h-[30%] justify-center lg:flex-row lg:justify-between lg:self-start lg:gap-16">
        <img
          src={events[0].image}
          alt={events[0].altImage}
          className="object-cover border border-gray-200 h-1/3 lg:w-1/2 lg:h-full rounded-sm"
        />
        <motion.div
          className="min-h-1/4 lg:h-full lg:w-1/2 flex flex-col lg:gap-4 lg:justify-center justify-between align-center"
          variants={container}
          viewport={{ amount: 'all', once: true }}
          initial="hidden"
          whileInView="show">
          <motion.div className="text-xl lg:text-3xl font-bold text-yellow-600" variants={item} custom={-1}>
            <span className=""> {events[0].title}</span>
          </motion.div>
          <motion.div className="text-sm" variants={item} custom={-1}>
            {events[0].description}
          </motion.div>
        </motion.div>
      </div>

      {/* Second Event */}
      <div className="flex flex-col h-[30%]  justify-center lg:h-[20%] lg:flex-row lg:justify-between lg:w-4/5 lg:self-end lg:gap-16">
        <motion.div
          className="order-2 lg:order-1 min-h-3/4  lg:h-full lg:w-1/2 flex flex-col lg:gap-4 lg:justify-center justify-between align-center"
          variants={container}
          viewport={{ amount: 'all', once: true }}
          initial="hidden"
          whileInView="show">
          <motion.div className="text-xl lg:text-3xl font-bold text-yellow-600" variants={item} custom={1}>
            <span className="">{events[1].title}</span>
          </motion.div>
          <motion.div className="text-sm" variants={item} custom={1}>
            {events[1].description}
          </motion.div>
        </motion.div>
        <img
          src={events[1].image}
          alt={events[1].altImage}
          className="object-cover order-1 lg:order-2 border h-1/3 lg:w-1/2 lg:h-full rounded-sm"
        />
      </div>

      {/* Third Event */}
      <div className="flex flex-col h-[30%] justify-center lg:flex-row lg:justify-between lg:w-4/5 lg:self-start lg:gap-16">
        <img 
          src={events[2].image} 
          alt={events[2].altImage} 
          className="object-cover border h-1/3 max-w-[1100px] lg:w-1/2 lg:h-full rounded-sm" 
        />
        <motion.div
          className="min-h-3/4 lg:h-full lg:w-3/4 flex flex-col lg:gap-4 lg:justify-center justify-between align-center"
          variants={container}
          viewport={{ amount: 'all', once: true }}
          initial="hidden"
          whileInView="show">
          <motion.div className="text-xl lg:text-3xl font-bold text-yellow-600" variants={item} custom={-1}>
            <span className=""> {events[2].title}</span>
          </motion.div>
          <motion.div className="text-sm" variants={item} custom={-1}>
            {events[2].description}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default DescriptionBoxes;
