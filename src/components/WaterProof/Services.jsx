import Image from 'next/image'

const Services = () => {
    return (
        <div>
            
            <h1 className='text-center font-bold text-4xl'>Services Provided</h1>

            <div className='flex justify-evenly w-[1000] m-auto my-20'>
                <div className='flex flex-col gap-8 text-center'>
                    <Image src="/Society/Service-1.png" alt='' width={100} height={100} />
                    <p>Painting</p>
                </div>
                <div className='flex flex-col gap-8 text-center'>
                    <Image src="/Society/Service-3.png" alt='' width={100} height={100} />
                    <p>Painting</p>
                </div>
                <div className='flex flex-col gap-8 text-center'>
                    <Image src="/Society/Service-2.png" alt='' width={100} height={100} />
                    <p>Painting</p>
                </div>
                <div className='flex flex-col gap-8 text-center'>
                    <Image src="/Society/Service-1.png" alt='' width={100} height={100} />
                    <p>Painting</p>
                </div>
            </div>

        </div>
    )
}

export default Services