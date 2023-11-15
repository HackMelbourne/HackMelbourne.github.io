// Edit span tags to white after bg change to black

export default function DescriptionBoxes() {
    return (
      <div className = "flex flex-col h-[150vh] md:h-[100vh] max-w-[1100px] justify-between w-[80%] m-auto">

        <div className="flex flex-col h-[30%] md:flex-row md:justify-between">
          <div className="border h-1/2 md:w-1/2 md:h-full" />
          <div className="h-1/2 md:h-full md:w-1/2 flex flex-col gap-2 justify-center align-center md:ml-10 md:mr-5">
            <div id="EventTitle1" className="text-2xl md:text-3xl font-bold text-[#F3B52A]">
              Event <span className="">Title</span> 
            </div>
            <div className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.            </div>
          </div>
        </div>

        <div className="flex flex-col h-[30%] md:flex-row md:justify-between md:w-3/4 md:h-1/5 md:self-end">
            <div className="order-2 md:order-1 h-1/2 md:h-full md:w-1/2 flex flex-col gap-2 justify-center align-center md:ml-10 md:mr-5">
                <div id="EventTitle3" className="text-2xl md:text-3xl font-bold text-[#F3B52A]">
                    Event <span className="">Title</span>
                </div>
                <div className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.                </div>
            </div>
            <div className="order-1 md:order-2 border h-1/2 md:w-1/2 md:h-full" />
        </div>

        <div className="flex flex-col h-[30%] md:flex-row md:justify-between md:w-4/5 md:self-start">
            <div className="border h-1/2 md:w-1/2 md:h-full" />
            <div className="h-1/2 md:h-full md:w-1/2 flex flex-col gap-2 justify-center align-center md:ml-10 md:mr-5">
                <div id="EventTitle5" className="text-2xl md:text-3xl font-bold text-[#F3B52A]">
                Event<span className=""> Title</span>
                </div>
                <div className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.                </div>
            </div>
        </div>

      </div>
    );
  }
  