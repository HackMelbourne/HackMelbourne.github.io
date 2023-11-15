import hoodie from '/img/hoodie.png';

// Need to add sizing, font, props, color variables

export const BannerStandard = () => {
    return (
        <div className="flex w-[1100px] justify-between items-center text-[#FFFFFF]">
            
            <div className="flex flex-col w-[539px] items-start gap-5">
                <div>
                    <p id="hoodie-title" className="text-5xl font-bold">HackMelbourne 2023 Exclusive Hoodie</p>
                </div>
                <div id="hoodie-desc" className="w-[425px]">
                    <p className="text-base font-medium">Remember the amazing year of 2023 and our achievements.</p>
                </div>
                <div id="hoodie-button" className="flex w-[120px] h-[44px] py-2.5 px-[15px] justify-center items-center 
                gap-2.5 rounded-[5px] bg-[#F3B52A] bg-opacity-40 border-[#F3B52A] border-[1px]">
                    <p className="text-base font-bold">See details</p>
                </div>
            </div>
            
            <div className="w-[441px] h-[504px] shrink-0">
                <img src={hoodie}/>
            </div>
        
        </div>
    )
}