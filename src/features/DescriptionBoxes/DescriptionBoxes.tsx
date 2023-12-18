import { motion } from "framer-motion"

// Edit span tags to white after bg change to black
interface Event {
  title: string;
  description: string;
}

interface DescriptionBoxesProps {
  events: Event[];
}

function DescriptionBoxes({ events }: DescriptionBoxesProps) {
  // Ensure exactly three events
  if (events.length !== 3) {
    console.error('DescriptionBoxes component expects exactly three events.');
    return null;
  }

  return (
    <div className="flex flex-col h-[140vh] lg:h-[100vh] max-w-[1100px] justify-between w-[80%] m-auto">
      {/* First Event */}
      <div className="flex flex-col h-[30%] lg:flex-row lg:justify-between lg:self-start lg:gap-16">
        <div className="border border-gray-200 h-1/2 lg:w-1/2 lg:h-full" />
        <motion.div
          className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-4 justify-center align-center"
          initial={{ x: "10vw", opacity:0 }}  
          transition={{ duration: 1 }} 
          whileInView={{ opacity: 1, x:0}}
          viewport={{ once: true }}
        >
          <div className="text-xl lg:text-3xl font-bold text-primary">
            <span className=""> {events[0].title}</span>
          </div>
          <div className="text-sm">{events[0].description}</div>
        </motion.div>
      </div>

      {/* Second Event */}
      <div className="flex flex-col h-[30%] lg:h-[20%] lg:flex-row lg:justify-between lg:w-4/5 lg:self-end lg:gap-16">
        <motion.div 
          className="order-2 lg:order-1 h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-4 justify-center align-center"
          initial={{ x: "-10vw", opacity:0 }}  
          transition={{ duration: 1 }} 
          whileInView={{ opacity: 1, x:0}}
          viewport={{ once: true }}
        >
          <div className="text-xl lg:text-3xl font-bold text-primary">
            <span className="">{events[1].title}</span>
          </div>
          <div className="text-sm">{events[1].description}</div>
        </motion.div>
        <div className="order-1 lg:order-2 border h-1/2 lg:w-1/2 lg:h-full" />
      </div>

      {/* Third Event */}
      <div className="flex flex-col h-[30%] lg:flex-row lg:justify-between lg:w-4/5 lg:self-start lg:gap-16">
        <div className="border h-1/2 lg:w-1/2 lg:h-full" />
        <motion.div 
          className="h-1/2 lg:h-full lg:w-3/4 flex flex-col gap-4 justify-center align-center"
          initial={{ x: "10vw", opacity:0 }}  
          transition={{ duration: 1 }} 
          whileInView={{ opacity: 1, x:0}}
          viewport={{ once: true }}
        >
          <div className="text-xl lg:text-3xl font-bold text-primary">
            <span className=""> {events[2].title}</span>
          </div>
          <div className="text-sm">{events[2].description}</div>
        </motion.div>
      </div>
    </div>
  );
}

export default DescriptionBoxes;
