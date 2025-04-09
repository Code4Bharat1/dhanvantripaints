import Image from "next/image";

const HomeGallery = () => {
    return (
        <div className="flex flex-col items-center my-10 w-full gap-4">
            {/* Header */}
            <div className="flex flex-col justify-center items-center py-1 md:py-14 text-center">
                <h1 className="text-lg md:text-xl lg:text-2xl font-medium">Gallery</h1>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-10">BEFORE AND AFTER</h1>
            </div>

            {/* Responsive Gallery */}
            <div className="w-full md:w-[1000px] flex flex-col gap-4">

                {/* ✅ Desktop View - Grid Layout */}
                <div className="hidden md:flex flex-col gap-4 px-4">
                    <div className="flex gap-4 justify-center">
                        <Image src="/Home/works1.png" alt="Interior 1" width={300} height={400} className="w-[300px] h-auto object-cover" />
                        <Image src="/Home/works2.png" alt="Interior 2" width={300} height={400} className="w-[300px] h-auto object-cover" />
                        <Image src="/Home/works3.png" alt="Interior 3" width={300} height={400} className="w-[300px] h-auto object-cover" />
                    </div>
                    <div className="flex gap-4 justify-center">
                        <Image src="/Home/works4.png" alt="Interior 4" width={300} height={400} className="w-[300px] h-auto object-cover z-[1]" />
                        <Image src="/Home/works5.png" alt="Interior 5" width={300} height={400} className="w-[300px] h-auto object-cover" />
                        <Image src="/Home/works6.png" alt="Interior 6" width={300} height={400} className="w-[300px] h-auto object-cover z-[1]" />
                    </div>
                </div>
                <Image src="/Home/logo10.png"
                    alt="/"
                    width={50}
                    height={50}
                    className='hidden sm:inline-flex absolute top-1370 left-12 z-[-1] md:left-18 lg:left-24'
                />
                <Image src="/Home/logo13.png"
                    alt="/"
                    width={50}
                    height={50}
                    className='hidden sm:inline-flex absolute top-1370 z-[-1] right-12 md:right-18 lg:right-43'
                />
                

                {/* ✅ Mobile View - Horizontal Scroll */}
                <div className="block md:hidden w-full overflow-x-auto px-4 hide-scrollbar">
                    <div className="flex gap-4">
                        <Image src="/Home/works1.png" alt="Interior 1" width={250} height={200} className="w-[250px] h-auto object-cover" />
                        <Image src="/Home/works2.png" alt="Interior 2" width={250} height={200} className="w-[250px] h-auto object-cover" />
                        <Image src="/Home/works3.png" alt="Interior 3" width={250} height={200} className="w-[250px] h-auto object-cover" />
                        <Image src="/Home/works4.png" alt="Interior 4" width={250} height={200} className="w-[250px] h-auto object-cover" />
                        <Image src="/Home/works5.png" alt="Interior 5" width={250} height={200} className="w-[250px] h-auto object-cover" />
                        <Image src="/Home/works6.png" alt="Interior 6" width={250} height={200} className="w-[250px] h-auto object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeGallery;
