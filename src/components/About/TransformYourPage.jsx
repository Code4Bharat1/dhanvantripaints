import Image from 'next/image'

const TransformYourPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-[1000px] h-fit mx-auto my-[100px] gap-20  px-4">
      <div className="w-full md:w-1/2 flex justify-center">
        <Image className="w-[400px] h-auto" src="/About/worker.png" alt="Worker" width={400} height={400} />
      </div>
      <div className="flex flex-col gap-3 w-full md:w-1/2 text-left md:text-left ">
        <p className="font-medium text-[20px]">About Us</p>
        <h2 className="text-[28px] lg:text-[40px] leading-12 font-[500]">
          Transform Your Space With Expert Painting Solutions
        </h2>
        <p className="text-sm sm:text-sm">
        In 2010 I started my own company in the name of "Dhanvantri Paints" since then we are giving service with my expertise to different companies and societies in an around Thane and Mumbai. Our good work has a result and we are succeeded in making a good relation with our reputed customers. I have a force of different Technical and non technical expertise in our team. Each work has a warranty period and assurance for stability of the work.
          </p>
      </div>
    </div>
  )
}

export default TransformYourPage
