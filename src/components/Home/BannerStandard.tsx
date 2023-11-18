import hoodie from '/img/hoodie.png';

function BannerStandard() {
    return (
        <div className="flex w-[339px] md:w-[1100px] h-[780px] md:h-[504px] flex-col md:flex-row-reverse md:justify-between items-center gap-2.5 md:gap-0 text-[#FFFFFF]">
            
            <div className="shrink-0 w-[339px] md:w-[441px] h-[486px] md:h-[504px] self-stretch">
                <img src={hoodie}/>
            </div>

            <div className="flex flex-col w-[339px] md:w-[539px] items-center md:items-start gap-5 self-stretch md:self-auto">
                <div>
                    <p id="hoodie-title" className="self-stretch md:self-auto text-center md:text-left text-4xl md:text-5xl font-bold">HackMelbourne 2023 Exclusive Hoodie</p>
                </div>
                <div id="hoodie-desc" className="md:w-[425px]">
                    <p className="self-stretch md:self-auto text-center md:text-left text-base font-medium">Remember the amazing year of 2023 and our achievements.</p>
                </div>
                <div id="hoodie-button" className="flex w-[120px] h-[44px] py-2.5 px-[15px] justify-center items-center 
                gap-2.5 rounded-[5px] bg-[#F3B52A] bg-opacity-40 border-[#F3B52A] border-[1px]">
                    <p className="text-base font-bold">See details</p>
                </div>
            </div>
        
        </div>
    );
}

export default BannerStandard;