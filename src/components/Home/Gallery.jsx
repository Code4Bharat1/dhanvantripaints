import Image from 'next/image';

export default function Gallery() {
    return (
        <div className="w-full px-4 md:px-10">
            <div className="flex flex-col justify-center items-center mt-5 text-center">
                <h1 className="text-lg md:text-xl lg:text-2xl font-medium">Gallery</h1>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">Spectacular Works From Our</h1>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">Digital Print Services</h1>
            </div>

            <div className="flex flex-col items-center p-10 w-full gap-4">
                {/* First Row - Always Visible */}
                <div className="flex flex-row gap-4 w-full max-w-[1200px] mx-auto lg:overflow-hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                    <div className="w-64 md:w-96 flex-shrink-0 snap-center">
                        <Image src="/Home/works1.png" alt="Works1" className="w-full h-auto" height={400} width={400} />
                    </div>
                    <div className="w-64 md:w-96 flex-shrink-0 snap-center">
                        <Image src="/Home/works2.png" alt="Works2" className="w-full h-auto" height={400} width={400} />
                    </div>
                    <div className="w-64 md:w-96 flex-shrink-0 snap-center">
                        <Image src="/Home/works3.png" alt="Works3" className="w-full h-auto" height={400} width={400} />
                    </div>
                </div>

                {/* Second Row - Always Visible */}
                <div className="flex flex-row gap-4 w-full max-w-[1200px] mx-auto lg:overflow-hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                    <div className="w-64 md:w-96 flex-shrink-0 snap-center">
                        <Image src="/Home/works4.png" alt="Works4" className="w-full h-auto" height={400} width={400} />
                    </div>
                    <div className="w-64 md:w-96 flex-shrink-0 snap-center">
                        <Image src="/Home/works6.png" alt="Works6" className="w-full h-auto" height={400} width={400} />
                    </div>
                    <div className="w-64 md:w-96 flex-shrink-0 snap-center">
                        <Image src="/Home/works5.png" alt="Works5" className="w-full h-auto" height={400} width={400} />
                    </div>
                </div>
            </div>
        </div>
    );
}
