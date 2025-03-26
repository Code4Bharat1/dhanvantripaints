import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Paints() {
    const [selected, setSelected] = useState(null);

    const handleClick = (section) => {
        setSelected(selected === section ? null : section); // Toggle between image and text
    };

    return (
        <div className="p-4">
            <div className="flex flex-col gap-4 max-w-[700px] mx-auto text-center mb-30 md:mb-15">
                <p className="text-[23px] font-[600]">Our Services</p>
                <p className="font-[600] text-[20px] md:text-[38px] sm:text-[37px]">
                DISCOVER OUR WORLD OF PAINT AND DECOR
                </p>
            </div>
            <div className="grid grid-cols-2 gap-5 md:gap-15 mr-0 ml-1 md:ml-12 md:mr-12 lg:ml-0 lg:mr-0 lg:flex lg:justify-center lg:items-center">
                {/* Interior Painting */}
                <div className="flex flex-col items-center">
                    <motion.div
                        className="bg-[#9EC2D1] p-5 md:p-6 md:py-6 cursor-pointer transition-all duration-1000 ease-in-out lg:max-w-[200px]"
                        onClick={() => handleClick("interior")}
                        animate={{
                            height: selected === "interior" ? 250 : 382, // Default height for desktop
                            "@media (max-width: 768px)": { height: selected === "interior" ? 340 : 450 }, // Tablet
                            "@media (max-width: 330px)": { height: selected === "interior" ? 330 : 450 }, // Mobile
                            "@media (max-width: 280px)": { height: selected === "interior" ? 280 : 320 }, // Small mobile
                        }}
                        transition={{ duration: 0.1, ease: "easeInOut" }}
                    >

                        {selected === "interior" ? (
                            <div className="mr-10">
                                <div className="border-2 border-white h-16 md:h-17 w-20 rounded-tr-4xl leading-1">
                                    <div className="text-white text-[9px] p-1">Dusty Rose</div>
                                    <div className="text-white text-[9px] p-1">#E18787</div>
                                    <div className="text-black bg-white w-full h-3 md:h-3 text-[11px] md:text-[10px] mt-6 lg:mt-7 py-1">
                                        Popular Shade
                                    </div>
                                </div>
                                <h1 className="text-white font-bold mt-2 md:mt-1 text-left text-xs md:text-base lg:text-lg">
                                    <span className="inline lg:block">Interior Paints</span>
                                </h1>
                                <p className="text-white font-bold text-left text-[8px] md:text-[8px] lg:text-[10px] mt-2 lg:mt-1">
                                    Let your home reflect your personality with perfect shades. Our expert interior painting transforms spaces into extraordinary living experiences.
                                </p>
                            </div>
                        ) : (
                            <div className="mt-0">
                                <Image src="/Home/Interior1.png" alt="Interior Paint" height={200} width={180} className="h-[275px] md:h-[280px] w-[120px] md:w-[140px] mt-1 md:mt-0" />
                                <h1 className="text-white font-bold mt-6 md:mt-2 text-left text-sm md:text-base lg:text-lg">
                                    <span className="inline lg:block lg:text-[16px]">Interior&nbsp;</span>
                                    <span className="inline lg:block lg:text-[16px]">Paint</span>
                                </h1>
                            </div>
                        )}
                    </motion.div>

                    <div className="flex flex-col justify-center items-center p-4">
                        <Image src="/Home/arrowup.png" className="mt-8" alt="" height={22} width={22}  />
                        <p className="mt-8 font-[600] text-center whitespace-nowrap text-md md:text-base lg:text-xl">Interior Painting</p>
                    </div>
                </div>

                {/* Exterior Painting */}
                <div className="flex flex-col items-center">
                    <div className="flex flex-col justify-center items-center p-4">
                        <p className="mb-2 mt-15 font-[600] text-center whitespace-nowrap text-sm md:text-base lg:text-xl">
                            Exterior Painting
                        </p>
                        <Image src="/Home/arrowdown.png" className="h-4 w-2.5 mt-8" alt="" height={20} width={20} />
                    </div>

                    <motion.div
                        className="bg-[#BCB2A6] p-6 mt-6 cursor-pointer lg:max-w-[220px]"
                        onClick={() => handleClick("exterior")}
                        animate={{
                            height: selected === "exterior" ? 246 : 380, // Adjust height dynamically
                        }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        {selected === "exterior" ? (
                            <div>
                                <div className="border-2 border-white h-16 md:17 w-20 rounded-tr-4xl leading-2">
                                    <div className="text-white text-[9px] p-1">Dusty Rose</div>
                                    <div className="text-white text-[9px] p-1">#E18787</div>
                                    <div className="text-black py-0 md:py-1 bg-white w-full h-2 md:h-3 text-[10px] mt-5 md:mt-4">
                                        Popular Shade
                                    </div>
                                </div>
                                <h1 className="text-white font-bold mt-4 md:mt-2 text-left text-[12px] md:text-base lg:text-sm">
                                    <span className="inline lg:block">Exterior Paints</span>
                                </h1>
                                <p className="text-white font-bold text-left text-[8px] md:text-md lg:text-[10px] mt-1 lg:mt-2">
                                    Your home's first impression starts with its exterior. A flawless coat of paint not only
                                    protects against the elements but also adds charm, elegance, and a lasting impact.
                                    Let us refresh your home with colors that stand the test of time.
                                </p>
                            </div>
                        ) : (
                            <div>
                                <Image
                                    src="/Home/Exterior1.png"
                                    alt="Repairing Paint"
                                    height={270}
                                    width={150}
                                    className="h-[280px]"
                                />
                                <h1 className="text-white font-bold mt-6 md:mt-2 text-left text-sm md:text-base lg:text-lg">
                                    <span className="inline lg:block lg:text-[16px]">Exterior&nbsp;</span>
                                    <span className="inline lg:block lg:text-[16px]">Paint</span>
                                </h1>
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* Water Proofing */}
                <div className="flex flex-col items-center">
                    <motion.div
                        className="bg-[#EAE3C8] p-6 md:p-6 cursor-pointer transition-all duration-1000 ease-in-out lg:max-w-[200px]"
                        onClick={() => handleClick("water")}
                        animate={{
                            height: selected === "water" ? 250 : 380, // Default height
                            "@media (min-width: 768px)": { height: selected === "water" ? 350 : 450 } // Responsive height for md screens
                        }}
                        transition={{ duration: 0.1, ease: "easeInOut" }}
                    >

                        {selected === "water" ? (
                            <div>
                                <h1 className="text-white font-bold mt-5 md:mt-6 text-left text-sm md:text-base lg:text-lg">
                                    <span className="inline lg:block">Water Proofing</span>
                                </h1>
                                <p className="text-white font-bold text-left text-[9px] mt-2 md:text-md lg:text-[10px] lg:mt-2">
                                    Moisture and water damage can silently ruin your home's foundation. With our cutting-edge waterproofing techniques, we provide long-lasting protection, preventing leaks, mold, and structural damage while preserving the beauty of your space.
                                </p>
                            </div>
                        ) : (
                            <div className="mt-2">
                                <Image src="/Home/Water1.png" alt="Water Proofing" height={270} width={150} className="h-[280px]" />
                                <h1 className="text-white font-bold mt-6 md:mt-2 text-left text-sm md:text-base lg:text-lg">
                                    <span className="inline lg:block lg:text-[15px]">Water&nbsp;</span>
                                    <span className="inline lg:block lg:text-[15px]">Proofing</span>
                                </h1>
                            </div>
                        )}
                    </motion.div>
                    <div className="flex flex-col justify-center items-center p-4">
                        <Image src="/Home/arrowup.png" className="mt-8" alt="" height={22} width={22} />
                        <p className="mt-8 font-[600] text-center whitespace-nowrap text-md md:text-base lg:text-xl">
                            Water Proofing
                        </p>
                    </div>
                </div>

                {/* Repairing Painting */}
                <div className="flex flex-col items-center">
                    <div className="flex flex-col justify-center items-center p-4">
                        <p className="mb-2 mt-15 font-[600] text-center whitespace-nowrap text-md md:text-base lg:text-xl">
                            Repairing Paint
                        </p>
                        <Image src="/Home/arrowdown.png" className="h-4 w-2.5 mt-8" alt="" height={20} width={20} />
                    </div>

                    <motion.div
                        className="bg-[#CCD7DA] p-6 mt-6 cursor-pointer lg:max-w-[220px]"
                        onClick={() => handleClick("repair")}
                        animate={{
                            height: selected === "repair" ? 230 : 380, // Adjust height dynamically
                        }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        {selected === "repair" ? (
                            <div className="mt-0 md:mt-6">
                                <h1 className="text-white font-bold mt-8 md:mt-6 text-left text-sm md:text-base lg:text-lg">
                                    <span className="inline lg:block">Repair Painting</span>
                                </h1>
                                <p className="text-white font-bold text-left text-[9px] md:text-md lg:text-[10px] mt-2 lg:mt-2">
                                    Peeling, cracking, or faded paint can make your home look worn out. Our expert paint repair services
                                    restore your walls to perfection, fixing imperfections and reviving the beauty of your space with a
                                    fresh flawless finish.
                                </p>
                            </div>
                        ) : (
                            <div>
                                <Image
                                    src="/Home/Repair1.png"
                                    alt="Repairing Paint"
                                    height={270}
                                    width={150}
                                    className="h-[280px]"
                                />
                                <h1 className="text-white font-bold lg:mt-2 mt-6 text-left text-sm md:text-base lg:text-lg">
                                    <span className="inline lg:block lg:text-[16px]">Repairing&nbsp;</span>
                                    <span className="inline lg:block lg:text-[16px]">Paint</span>
                                </h1>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div >
    );
}
