import { motion } from 'framer-motion';

// Edit span tags to white after bg change to black
interface Event {
  title: string;
  description: string;
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
    <div className=" mt-8 flex flex-col h-[140vh] lg:h-[100vh] max-w-[1100px] justify-between w-[80%] m-auto">
      {/* First Event */}
      <div className="flex flex-col h-[30%] lg:flex-row lg:justify-between lg:self-start lg:gap-16">
        <div className="border border-gray-200 h-1/2 lg:w-1/2 lg:h-full" />
        <motion.div
          className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-4 justify-center align-center"
          variants={container}
          viewport={{ amount: 'all', once: true }}
          initial="hidden"
          whileInView="show">
          <motion.div className="text-xl lg:text-3xl font-bold text-primary" variants={item} custom={-1}>
            <span className=""> {events[0].title}</span>
          </motion.div>
          <motion.div className="text-sm" variants={item} custom={-1}>
            {events[0].description}
          </motion.div>
        </motion.div>
      </div>

      {/* Second Event */}
      <div className="flex flex-col h-[30%] lg:h-[20%] lg:flex-row lg:justify-between lg:w-4/5 lg:self-end lg:gap-16">
        <motion.div
          className="order-2 lg:order-1 h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-4 justify-center align-center"
          variants={container}
          viewport={{ amount: 'all', once: true }}
          initial="hidden"
          whileInView="show">
          <motion.div className="text-xl lg:text-3xl font-bold text-primary" variants={item} custom={1}>
            <span className="">{events[1].title}</span>
          </motion.div>
          <motion.div className="text-sm" variants={item} custom={1}>
            {events[1].description}
          </motion.div>
        </motion.div>
        <div className="order-1 lg:order-2 border h-1/2 lg:w-1/2 lg:h-full" />
      </div>

      {/* Third Event */}
      <div className="flex flex-col h-[30%] lg:flex-row lg:justify-between lg:w-4/5 lg:self-start lg:gap-16">
        <div className="border h-1/2 lg:w-1/2 lg:h-full" />
        <motion.div
          className="h-1/2 lg:h-full lg:w-3/4 flex flex-col gap-4 justify-center align-center"
          variants={container}
          viewport={{ amount: 'all', once: true }}
          initial="hidden"
          whileInView="show">
          <motion.div className="text-xl lg:text-3xl font-bold text-primary" variants={item} custom={-1}>
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
