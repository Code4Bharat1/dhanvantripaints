import Image from "next/image";

const OurTeam = () => {
    return (
        <div className="lg:w-[1000px] my-20 p-2 w-full m-auto">
            <div className="flex justify-center">
                <Image src="/Home/logo1.png"
                    alt="/"
                    width={40}
                    height={60}
                    className='hidden sm:inline-flex absolute top-985 left-12 md:left-18 lg:left-130'
                />
                <Image src="/Home/logo5.png"
                    alt="/"
                    width={40}
                    height={50}
                    className='hidden sm:inline-flex absolute top-898 left-12 md:left-18 lg:left-0'
                />
                <Image src="/Home/logo10.png"
                    alt="/"
                    width={40}
                    height={50}
                    className='hidden sm:inline-flex absolute top-1030 left-12 md:left-18 lg:left-35'
                />
                <Image src="/Home/logo11.png"
                    alt="/"
                    width={50}
                    height={50}
                    className='hidden sm:inline-flex absolute z-[1] top-1020 right-12 md:right-18 lg:right-22'
                />
                <div className="flex  w-1/2 lg:w-full">
                    <div>
                        <Image className="h-[180px] lg:w-[250px] lg:h-[350px]" src="/Home/worker3.png" alt="" width={1000} height={1000} />
                    </div>
                    <div className=" h-[180px] md:w-1/2 bg-[#524BAD] flex flex-col justify-center items-center md:h-auto">
                        <h1 className="text-white text-xs md:text-3xl text-left lg:p-0 md:p-2">SANJAY</h1>
                        <h1 className="text-white text-xs md:text-3xl text-left lg:p-0 md:p-2">GUPTA</h1>
                        <p className="text-white text-[8px] md:text-[16px] md:mt-5 lg:text-xs text-left lg:p-0 p-5 md:p-5">Founder of Dhanvantri Paints</p>
                    </div>

                </div>
                <div className=" relative w-1/2 lg:w-full flex flex-col justify-center items-center h-auto">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="font-bold text-[13px] md:text-xl">Our Team</h1>
                        <p className="font-semi-bold lg:w-[350px] text-md md:text-2xl md:leading-7 lg:text-4xl lg:leading-12">Unlimited Creativity With Our Professional Team</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center ">
                <div className=" w-full">
                    <p className="lg:text-[13px] font-[400] text-[9px] mr-2 mt-8 md:text-[12px] md:p-1 lg:p-18 text-justify">Myself Sanjay Kumar Singh was worked under different builder. I was supervisor and supervised different Civil Work and Learnt the technique through practical work. I was involved in looking after the work from reading drawing then digging. RCC plinth, pillars. Columns, Iron gauge for weight and load, RCC structure Slab. Brick work, plaster work, painting work, plumbing work and at last interior work
                    </p>
                </div>
                <div className="flex w-full">
                    <div>
                        <Image className="w-[160px] md:w-[300px] h-[180px] lg:h-[320px]" src="/Home/worker2.png" alt="" width={1000} height={1000} />
                    </div>
                    <div className=" w-[150px] md:w-1/2  bg-[#FF9247] flex flex-col justify-center z-[-1] items-center h-[180px] lg:h-[320px]">
                        <h1 className="text-white text-lg md:text-2xl">AHMED</h1>
                        <p className="text-white text-[8px] md:text-[13px] ml-4 md:ml-4">Manager of Dhannvanti Painting</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurTeam;
