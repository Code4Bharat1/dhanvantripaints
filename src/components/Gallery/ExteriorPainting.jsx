import Image from "next/image";

const ExteriorPainting = () => {
  return (
    <div className="flex flex-col max-w-fit m-auto items-start my-10 w-full gap-4">
      {/* Title Positioned Left */}
      <div className="text-[20px] md:text-[26px] px-4 md:px-0 font-bold whitespace-nowrap">
        Exterior Painting
      </div>

      {/* Responsive Wrapper */}
      <div className="w-full flex flex-col lg:items-center gap-4">
        
        {/* ✅ Desktop Grid - Hidden on Mobile */}
        <div
          className="hidden md:block w-full"
        >
          <div
            className="grid gap-4 w-full"
            style={{
              gridTemplateColumns: "400px 300px 300px",
              justifyContent: "center",
            }}
          >
            <Image src="/Gallery/exterior1.png" alt="Interior 1" width={400} height={250} className="w-[400px] h-[250px] object-cover" />
            <Image src="/Gallery/exterior2.png" alt="Interior 2" width={300} height={250} className="w-[300px] h-[250px] object-cover" />
            <Image src="/Gallery/exterior3.png" alt="Interior 3" width={300} height={250} className="w-[300px] h-[250px] object-cover" />
          </div>

          <div
            className="grid gap-4 w-full mt-4"
            style={{
              gridTemplateColumns: "310px 310px 380px",
              justifyContent: "center",
            }}
          >
            <Image src="/Gallery/exterior4.png" alt="Interior 4" width={300} height={250} className="w-[300px] h-[250px] object-cover" />
            <Image src="/Gallery/exterior5.png" alt="Interior 5" width={400} height={250} className="w-[400px] h-[250px] object-cover" />
            <Image src="/Gallery/exterior6.png" alt="Interior 6" width={400} height={250} className="w-[400px] h-[250px] object-cover" />
          </div>
        </div>

        {/* ✅ Mobile Row Layout - Hidden on Desktop */}
        <div className="block md:hidden w-full overflow-x-auto whitespace-nowrap scrollbar-hide px-4">
          <div className="flex gap-4">
            <Image src="/Gallery/exterior1.png" alt="Interior 1" height={200} width={250} className="w-[250px] h-auto object-cover" />
            <Image src="/Gallery/exterior2.png" alt="Interior 2" height={200} width={250} className="w-[250px] h-auto object-cover" />
            <Image src="/Gallery/exterior3.png" alt="Interior 3" height={200} width={250} className="w-[250px] h-auto object-cover" />
            <Image src="/Gallery/exterior4.png" alt="Interior 4" height={200} width={250} className="w-[250px] h-auto object-cover" />
            <Image src="/Gallery/exterior5.png" alt="Interior 5" height={200} width={250} className="w-[250px] h-auto object-cover" />
            <Image src="/Gallery/exterior6.png" alt="Interior 6" height={200} width={250} className="w-[250px] h-auto object-cover" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ExteriorPainting;
