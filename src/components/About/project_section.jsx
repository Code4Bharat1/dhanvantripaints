import Image from "next/image";
import { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Project_section() {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 300; // adjust based on your card width
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Scroll buttons
  const scrollLeftBy = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRightBy = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col bg-white m-auto p-auto md:mt-20 mt-17">
      <h1 className="text-center font-semibold md:text-3xl text-2xl">
        Our Signature
      </h1>
      <p className="text-center md:text-2xl text-xl font-semibold mb-10">
        -10 Highlights That Define Us
      </p>

      <div
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        ref={scrollRef}
        className="flex overflow-x-scroll pb-10 hide-scroll-bar cursor-grab active:cursor-grabbing transition-all"
      >
<div className="2-[300px] flex flex-nowrap lg:ml-10 md:ml-10 ml-10 md:h-[500px] h-[300px] gap-5">
<div className="md:w-[300px] w-[200px] mx-auto rounded-xl shadow-md overflow-hidden  p-4 bg-white">
 
 <div className="md:h-40 h-35 rounded-md md:mb-4">
  <Image src="/images/cosmos_habitat_A.png" alt="cosmos habbitat A wing" width={200} height={200}
   className="md:w-[300px] md:h-[250px] h-[130px]"
    />
   </div>
<div className="md:mb-2 md:mt-30">
   <h2 className="md:text-xl text-[11px] font-semibold text-gray-900">Cosmos Habitat A wing</h2>
   <p className="md:text-sm text-[10px] text-gray-500 md:mb-0 mb-2">Thane,Maharashtra</p>
</div>


<p className="text-gray-600 md:text-sm text-[9px]">
Cosmos Habitat in Majiwada, Thane, Mumbai, is a residential building project with 2 towers, 16 floors each, and 102 units, known for its spacious housing and basic amenities.
</p>
</div>

<div className="md:w-[300px] w-[200px] mx-auto rounded-xl shadow-md overflow-hidden  p-4 bg-white">
 
 <div className="md:h-40 h-35 rounded-md md:mb-4">
 <Image src="/images/cosmos_habitat.png" alt="cosmos habbitat A wing" width={200} height={200}
className="md:w-[300px] md:h-[250px] h-[130px]"
/>
</div>
<div className="md:mb-2 md:mt-30">
<h2 className="md:text-xl text-[11px] font-semibold text-gray-900">Cosmos Habitat</h2>
<p className="md:text-sm text-[10px] text-gray-500 md:mb-0 mb-2">Thane,Maharashtra</p>
</div>

<p className="text-gray-600 md:text-sm text-[9px]">
Cosmos Habbitat a project by Aryan Builders and Developers, located in Mira Road East, Mumbai, generally receives positive reviews for its peaceful locality, good connectivity.
</p>
</div>

<div className="md:w-[300px] w-[200px] mx-auto rounded-xl shadow-md overflow-hidden p-4 bg-white">
 
 <div className="md:h-40 h-35 rounded-md md:mb-4">
 <Image src="/images/cosmos_county_magic.jpeg" alt="cosmos habbitat A wing" width={200} height={200}
className="md:w-[300px] md:h-[250px] h-[130px]"
/>
</div>
<div className="md:mb-2 md:mt-30">
<h2 className="md:text-xl text-[11px] font-semibold text-gray-900">Cosmos Horizon</h2>
<p className="md:text-sm text-[10px] text-gray-500 md:mb-0 mb-2">Thane,Maharashtra</p>
</div>

<p className="text-gray-600 md:text-sm text-[9px]">
Cosmos Horizon, a project by Cosmos Group in Thane West, generally receives positive reviews for its location, amenities, and developer reputation, with some users highlighting its value for money and ease of accessibility. 
</p>
</div>

<div className="md:w-[300px] w-[200px] mx-auto rounded-xl shadow-md overflow-hidden p-4 bg-white">
 
 <div className="md:h-40 h-35 rounded-md md:mb-4">
 <Image src="/images/cosmos_jewel.png" alt="cosmos Jewel" width={200} height={200}
className="md:w-[300px] md:h-[250px] h-[130px]"
/>
</div>
<div className="md:mb-2 md:mt-30">
<h2 className="md:text-xl text-[11px] font-semibold text-gray-900">Cosmos Jewel</h2>
<p className="md:text-sm text-[10px] text-gray-500 md:mb-0 mb-2">Thane,Maharashtra</p>
</div>

<p className="text-gray-600 md:text-sm text-[9px]">
Cosmos jewels,one of the most prominent projects for flats in anand nagar, thane. This residential flat is east-Facing direction. Constructed on a carpet area of 702 sq.Ft., the flat comprises 2 bedroom(s), 1 bathroom and 3 balconies.
</p>
</div>

<div className="md:w-[300px] w-[200px] mx-auto rounded-xl shadow-md overflow-hidden p-4 bg-white">
 
 <div className="md:h-40 h-35 rounded-md md:mb-4">
 <Image src="/images/cosmos_hawaiian.png" alt="cosmos Hawaiian" width={200} height={200}
className="md:w-[300px] md:h-[250px] h-[130px]"
/>
</div>
<div className="md:mb-2 md:mt-30">
<h2 className="md:text-xl text-[11px] font-semibold text-gray-900">Cosmos Hawaiian</h2>
<p className="md:text-sm text-[10px] text-gray-500 md:mb-0 mb-2">Thane,Maharashtra</p>
</div>

<p className="text-gray-600 md:text-sm text-[9px]">
Cosmos Hawaiian is well-maintained, conveniently located with 24-hour water supply, and has easy access to public transportation and amenities like a mall and parks. It is safe, clean and less polluted.
</p>
</div>

<div className="md:w-[300px] w-[200px] mx-auto rounded-xl shadow-md overflow-hidden p-4 bg-white">
 
 <div className="md:h-40 h-35 rounded-md md:mb-4">
 <Image src="/images/cosmos_mary_park.png" alt="cosmos habbitat A wing" width={200} height={200}
className="md:w-[300px] md:h-[250px] h-[130px]"
/>
</div>
<div className="md:mb-2 md:mt-30">
<h2 className="md:text-xl text-[11px] font-semibold text-gray-900">Cosmos Mary Park </h2>
<p className="md:text-sm text-[10px] text-gray-500 md:mb-0 mb-2">Thane,Maharashtra</p>
</div>

<p className="text-gray-600 md:text-sm text-[9px]">
Cosmos Mary Park in Thane West, Mumbai, receives generally positive reviews, with residents highlighting its prime location, good connectivity, and reputed builder. 
</p>
</div>

<div className="md:w-[300px] w-[200px] mx-auto rounded-xl shadow-md overflow-hidden p-4 bg-white">
 
 <div className="md:h-40 h-35 rounded-md md:mb-4">
 <Image src="/images/sankalp_heights.png" alt="Sankalp Heights" width={200} height={200}
className="md:w-[300px] md:h-[250px] h-[130px]"
/>
</div>
<div className="md:mb-2 md:mt-30">
<h2 className="md:text-xl text-[11px] font-semibold text-gray-900">Sankalp Heights</h2>
<p className="md:text-sm text-[10px] text-gray-500 md:mb-0 mb-2">Thane,Maharashtra</p>
</div>

<p className="text-gray-600 md:text-sm text-[9px]">
Sankalp Heights is a residential project that takes luxuriant living to newer and greater heights. The scenic beauty that nature supplies is abundant in these apartments.
</p>
</div>

<div className="md:w-[300px] w-[200px] mx-auto rounded-xl shadow-md overflow-hidden p-4 bg-white">
 
 <div className="md:h-40 h-35 rounded-md md:mb-4">
 <Image src="/images/cosmos_spring.png" alt="cosmos Angel" width={200} height={200}
className="md:w-[300px] md:h-[250px] h-[130px]"
/>
</div>
<div className="md:mb-2 md:mt-30">
<h2 className="md:text-xl text-[11px] font-semibold text-gray-900">Cosmos Springs</h2>
<p className="md:text-sm text-[10px] text-gray-500 md:mb-0 mb-2">Thane,Maharashtra</p>
</div>

<p className="text-gray-600 md:text-sm text-[9px]">
Cosmos Springs,a residential building in Owale, Thane, is generally considered a "good society" with positive reviews highlighting its nature-friendly environment, well-maintained roads, and proximity to amenities. 
</p>
</div>

</div>
</div>

<div className="hidden sm:flex justify-center gap-4 mt-5 pr-4">
  {/* Left Arrow */}
  <button
    onClick={() => scroll('left')}
    className="rounded-full border-2 border-black w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm shadow-md hover:bg-white hover:shadow-lg hover:scale-105 transition-all"
    aria-label="Scroll Left"
  >
    <FaArrowLeft className="text-black w-5 h-5" />
  </button>

  {/* Right Arrow */}
  <button
    onClick={() => scroll('right')}
    className="rounded-full border-2 border-black w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm shadow-md hover:bg-white hover:shadow-lg hover:scale-105 transition-all"
    aria-label="Scroll Right"
  >
    <FaArrowRight className="text-black w-5 h-5" />
  </button>
</div>
</div>
  );
}
