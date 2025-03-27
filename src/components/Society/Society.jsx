import Image from 'next/image'

const Society = () => {
  return (
   <div className="px-6 md:px-11 py-6 flex flex-col items-center mt-5 ">
         {/* Responsive Image Layout */}
         <div className=" max-w-7xl relative bg-cover bg-center flex justify-center mx-auto lg:mt-12">
           <Image
             src="/Society/Worker.png"
             alt="image"
             className="hidden md:block max-w-7xl sm:w-[100%] md:w-[100%] h-auto max-h-[445px] object-contain md:px-5"
             width={5000}
             height={445}
           />
           {/*Image to be displayed on mobile*/}
           <Image
             src="/Society/Worker.png"
             alt="Paint image on mobile phone"
             width={900}
             height={600}
             className="block md:hidden px-1 w-xl h-auto object-contain"
           />
         </div>
   
         {/* Text & Details Section */}
         <div className="px-1 md:mt-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-5 md:py-2 md:px-6">
           {/* Internal Painting Details */}
           <div className="max-w-lg bg-white w-full lg:w-1/2 mt-10 sm:mt-0">
             <h1 className="text-2xl sm:text-3xl font-bold">Society & Commercial Building Painting</h1>
             <p className="mt-4 md:mt-6 md:text-black max-w-[27rem]">
             Enhance the beauty and durability of your society & commercial buildings with our professional painting services. 
             We provide high-quality, weather-resistant coatings that ensure long-lasting protection and a fresh, vibrant look. 
             Let us transform your space with precision and expertise!.
             </p>
           </div>
           <Image
             src="/images/g410.png"
             alt="Shape"
             width={40}
             height={40}
             className="hidden md:inline-flex absolute left-1/2 transform -translate-x-1/2  translate-y-45"
           />
   
           {/* Available Hours Section */}
           <div className="w-full max-w-md lg:w-1/2 bg-white md:px-3">
             <p className="font-semibold text-xl md:text-lg">Available Hours*</p>
   
             <div className="mt-7 space-y-4">
               {/* Monday - Saturday */}
               <div className="md:flex md:flex-row justify-between items-center sm:flex-col sm:items-start">
                 <p className="font-semibold mb-4">Monday - Saturday</p>
                 <div className="flex items-center gap-2 mt-2">
                   <Image
                     src="/images/Time-Circle.png"
                     alt="time-circle"
                     height={20}
                     width={20}
   
                   />
                   <p className="text-sm sm:text-base">09:00 AM - 07:00 PM</p>
                 </div>
               </div>
   
               <hr className="border-gray-700 w-[100%]" />
   
               {/* Sunday */}
               <div className="md:flex md:flex-row md:gap-49 items-center sm:flex-col sm:items-start">
                 <p className="font-semibold mb-4">Sunday</p>
                 <div className="flex items-center gap-2 mt-2">
                   <Image
                     src="/images/Time-Circle.png"
                     alt="time-circle"
                     height={20}
                     width={20}
                   />
                   <p className="text-sm sm:text-base font-bold text-red-700">Holiday</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
  )
}

export default Society;
