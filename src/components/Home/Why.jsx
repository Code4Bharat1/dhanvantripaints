import Image from 'next/image';

const WhyChooseUs = () => {
    return (
        <div className="max-w-[1200px] mx-auto md:my-[100px] h-fit px-4">
            {/* Heading */}
            <div className="flex flex-col gap-4 max-w-[700px] mx-auto text-center">
                <p className="text-[23px] font-[600]">{"Why?"}</p>
                <p className="font-[600] text-[20px] md:text-[40px] sm:text-[37px]">
                    Fast and Cheap High-Quality Digital Print - Why Not?
                </p>
            </div>

            {/* Features Section */}
            <div className="flex flex-col sm:flex-row justify-center text-center gap-7 mt-10">
                {/* Card 1 - Modern Technology */}
                <div className="flex-1">
                    <div className="md:border-r-2 border-gray-400 flex flex-col gap-4 p-8">
                        <div className="w-full">
                            <Image 
                                className="mx-auto" 
                                src="/About/MarketingImage.png" 
                                alt="Modern Technology - High-quality painting techniques" 
                                width={90} 
                                height={90} 
                            />
                        </div>
                        <p className="font-semibold text-lg">Modern Technology</p>
                        <p className="w-full sm:w-60 mx-auto">
                            We utilize cutting-edge painting techniques and high-quality materials to ensure a flawless, long-lasting finish for your spaces.
                        </p>
                    </div>
                </div>

                {/* Card 2 - Speed And Accuracy */}
                <div className="flex-1">
                    <div className="md:border-r-2 border-gray-400 flex flex-col gap-4 p-8">
                        <div className="w-full">
                            <Image 
                                className="mx-auto" 
                                src="/About/MarketingImage1.png" 
                                alt="Speed and Accuracy - Efficient painting services" 
                                width={90} 
                                height={90} 
                            />
                        </div>
                        <p className="font-semibold text-lg">Speed And Accuracy</p>
                        <p className="w-full sm:w-60 mx-auto">
                            Our team is committed to delivering precise, professional results with efficiency, ensuring minimal disruption and maximum satisfaction.
                        </p>
                    </div>
                </div>

                {/* Card 3 - Professional Team */}
                <div className="flex-1">
                    <div className="flex flex-col gap-4 p-8">
                        <div className="w-full">
                            <Image 
                                className="mx-auto" 
                                src="/About/MarketingImage2.png" 
                                alt="Professional Team - Experienced and skilled painters" 
                                width={90} 
                                height={90} 
                            />
                        </div>
                        <p className="font-semibold text-lg">Professional Team</p>
                        <p className="w-full sm:w-60 mx-auto">
                            With years of experience and a passion for perfection, our skilled painters bring expertise and creativity to every project.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
