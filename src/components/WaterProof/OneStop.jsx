export default function OneStop() {
    return (
      <div className="flex justify-center items-center my-10 bg-transparent px-4">
        <div className="bg-transparent p-6 md:p-8 w-full max-w-[95%] md:max-w-3xl lg:max-w-5xl rounded-lg">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-16">
            One Stop Shop For All Your Printing Needs <br className="hidden md:block" /> 
            Let Us Help You Today!
          </h2>
  
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-lg md:text-2xl text-gray-700 font-medium">Your Name*</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
  
            {/* Email */}
            <div className="flex flex-col">
              <label className="text-lg md:text-2xl text-gray-700 font-medium">Your Email*</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
  
            {/* Phone */}
            <div className="flex flex-col">
              <label className="text-lg md:text-2xl text-gray-700 font-medium">Your Phone*</label>
              <input
                type="text"
                placeholder="Enter your phone"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
  
            {/* Services Dropdown */}
            <div className="flex flex-col">
              <label className="text-lg md:text-2xl text-gray-700 font-medium">Services*</label>
              <select className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400">
                <option>Choose Services</option>
                <option>Printing</option>
                <option>Designing</option>
                <option>Marketing Materials</option>
              </select>
            </div>
  
            {/* Message */}
            <div className="md:col-span-2 flex flex-col">
              <label className="text-lg md:text-2xl text-gray-700 font-medium">Message (optional)</label>
              <textarea
                rows="4"
                placeholder="Enter message"
                className="resize-none w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              ></textarea>
            </div>
  
            {/* File Upload */}
            <div className="md:col-span-2 flex flex-col">
              <label className="text-lg md:text-2xl text-gray-700 font-medium">Upload File</label>
              <input 
                type="file" 
                className="w-[100px] border bg-gray-200 border-gray-400 text-gray-600 px-3 py-2 rounded-md"
              />
            </div>
  
            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-start">
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition text-lg"
              >
                Request Order
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  