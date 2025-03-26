import Image from "next/image";

const ElevatorPainting = () => {
    return (
        <div className="flex flex-col max-w-fit m-auto items-start my-10 w-full gap-4">
            {/* Title Positioned Left */}
            <div className="text-[20px] md:text-[26px] px-4 md:px-0 font-bold whitespace-nowrap">
                Elevator Door Painting
            </div>

            {/* Responsive Wrapper */}
            <div className="w-full flex flex-col lg:items-center gap-4">

                {/* ✅ Desktop Grid - Hidden on Mobile */}
                <div
                    className="hidden md:block w-full"
                >
                    <div
                        className="grid gap-34 w-full"
                        style={{
                            gridTemplateColumns: "450px 450px",
                            justifyContent: "center",
                        }}
                    >
                        <Image src="/Gallery/elevator1.png" alt="Interior 1" width={400} height={250} className="w-[450px] h-[650px] object-cover" />
                        <Image src="/Gallery/elevator2.png" alt="Interior 2" width={300} height={250} className="w-[450px] h-[650px] object-cover" />
                    </div>

                    
                </div>

                {/* ✅ Mobile Row Layout - Hidden on Desktop */}
                <div className="block md:hidden w-full overflow-x-auto whitespace-nowrap scrollbar-hide px-4">
                    <div className="flex gap-4">
                        <Image src="/Gallery/elevator1.png" alt="Interior 1" height={200} width={250} className="w-[250px] h-auto object-cover" />
                        <Image src="/Gallery/elevator2.png" alt="Interior 2" height={200} width={250} className="w-[250px] h-auto object-cover" />
                        </div>
                </div>

            </div>
        </div>
    );
};

export default ElevatorPainting;
