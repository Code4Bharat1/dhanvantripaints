import Image from 'next/image';

export default function Services_provided() {
  return (
    <div className="md:mb-15px-4 md:mt-15 mt-6">
      {/* Title */}
      <h1 className="text-2xl text-black md:text-4xl md:text-bold text-center font-semibold">Services Provided</h1>

      {/* Services Grid */}
      <div className="justify-center md:px-25 md:justify-center mt-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-0 gap-20 text-center">

        {/* Painting */}
        <div className="flex flex-col items-center">
          <Image src="/images/image_paint.png" alt="Painting" width={100} height={100} />
          <p className="mt-4 text-black font-semibold">Painting</p>
        </div>

        {/* Repairing */}
        <div className="flex flex-col items-center">
          <Image src="/images/image_tool.png" alt="Repairing" width={100} height={100} />
          <p className="mt-4 text-black font-semibold">Repairing</p>
        </div>

        {/* Water Proofing */}
        <div className="flex flex-col items-center">
          <Image src="/images/image_verify.png" alt="Water Proofing" width={100} height={100} />
          <p className="mt-4 text-black font-semibold">Water Proofing</p>
        </div>

      

      </div>

      {/* Decorative Shapes */}
      <div className="relative mt-10 flex justify-between">
        <Image src="/images/Group1.png" alt="Shape" width={25} height={25} className="hidden md:inline-flex absolute left-10 sm:left-36" />
        <Image src="/images/g317.png" alt="Shape" width={40} height={40} className="hidden md:inline-flex absolute right-10 sm:right-36" />
      </div>

    </div>
  );
}