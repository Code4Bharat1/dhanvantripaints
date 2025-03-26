import Image from 'next/image'

const Services = () => {
  return (
    <div className="px-4 py-10 flex flex-col gap-10">
      <h1 className='text-center font-[600] text-4xl mb-10'>Services Provided</h1>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-15 lg:gap-8 w-full max-w-6xl mx-auto'>
        <div className='flex flex-col items-center gap-7 text-center'>
          <Image src="/Society/Society.png" alt='Painting' width={100} height={100} />
          <p>Painting</p>
        </div>
        <div className='flex flex-col items-center gap-4 text-center'>
          <Image src="/Society/Society-1.png" alt='Painting' width={100} height={100} />
          <p>Painting</p>
        </div>
        <div className='flex flex-col items-center gap-4 text-center'>
          <Image src="/Society/Society-2.png" alt='Painting' width={100} height={100} />
          <p>Painting</p>
        </div>
        <div className='flex flex-col items-center gap-4 text-center'>
          <Image src="/Society/Society-3.png" alt='Painting' width={100} height={100} />
          <p>Painting</p>
        </div>
      </div>
    </div>
  )
}

export default Services
