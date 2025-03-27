import Image from "next/image"
export default function OneStop() {
    return (
      <div className="relative flex justify-center items-center md:mt-5 bg-transparent px-4">
      
            <div>
              <Image className="absolute hidden lg:block left-[5%] bottom-[30%] w-[30px]" src="/Society/Circle.png" alt="" width={100} height={100} />
              <Image className="absolute hidden lg:block right-[20%] bottom-[3%] w-[50px]" src="/Society/triangle.png" alt="" width={100} height={100} />
            </div>
      
            <div className="bg-transparent p-6 md:p-8 w-full max-w-[95%] md:max-w-3xl lg:max-w-5xl rounded-lg">
              <h2 className="text-2xl md:text-4xl font-[600] text-center mb-10 md:mb-16">
                One Stop Shop For All Your Printing Needs <br className="hidden md:block" /> 
                Let Us Help You Today!
              </h2>
      
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Name */}
                <div className="flex flex-col gap-4">
                  <label className="lg:text-[16px] md:text-2xl text-gray-700 font-medium">Your Name*</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
      
                {/* Email */}
                <div className="flex flex-col gap-4">
                  <label className="lg:text-[16px] md:text-2xl text-gray-700 font-medium">Your Email*</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
      
                {/* Phone */}
                <div className="flex flex-col gap-4">
                  <label className="lg:text-[16px] md:text-2xl text-gray-700 font-medium">Your Phone*</label>
                  <input
                    type="text"
                    placeholder="Enter your phone"
                    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
      
                {/* Services Dropdown */}
                <div className="flex flex-col gap-4">
                  <label className="lg:text-[16px] md:text-2xl text-gray-700 font-medium">Services*</label>
                  <select className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400">
                    <option className="text-[12px] max-w-[40px]">Choose Services</option>
                    <option className="text-[12px] max-w-[40px]">Internal Painting</option>
                    <option className="text-[12px] max-w-[40px]">External Painting</option>
                    <option className="text-[12px] max-w-[40px]">WaterProofing</option>
                    <option className="text-[12px] max-w-[40px]">Marketing Materials</option>
                  </select>
                </div>
      
                {/* Message */}
                <div className="md:col-span-2 flex flex-col gap-4">
                  <label className="lg:text-[16px] md:text-2xl text-gray-700 font-medium">Message (optional)</label>
                  <textarea
                    rows="4"
                    placeholder="Enter message"
                    className="resize-none w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                  ></textarea>
                </div>
      
                {/* File Upload */}
                <div className="md:col-span-2 flex flex-col gap-4">
                  <label className="lg:text-[16px] md:text-2xl text-gray-700 font-medium">Upload File</label>
                  <input 
                    type="file" 
                    className="w-[230px] border bg-gray-200 border-gray-400 text-gray-600 px-5 py-2 rounded-md"
                  />
                </div>
      
                {/* Submit Button */}
                <div className="mt-4 md:mt-0 md:col-span-2 flex justify-start">
                  <button
                    type="submit"
                    className="bg-orange-400 text-white lg:text-[16px] px-6 py-3 rounded-md hover:bg-orange-600 transition text-lg"
                  >
                    Request Order
                  </button>
                </div>
              </form>
            </div>
          </div>
    );
  }
  