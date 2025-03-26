'use client';
import Image from 'next/image';
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <div className='flex justify-center items-center my-10 px-4'>
      <div className='flex flex-col md:flex-row gap-10 lg:border lg:border-gray-200 rounded-[10px] w-full max-w-[1100px] h-auto md:h-[500px] p-5 md:p-3'>
        {/* Left Side - Contact Info */}
        <div className='relative flex flex-col gap-10 rounded-[10px] text-white bg-[#524BAD] h-[400px] lg:h-full p-6 lg:p-10 w-full md:w-[350px]'>
          <div className='absolute flex gap-4 bottom-[20px] left-[20px] text-xl'>
            <a href='#' className='hover:text-gray-300'><FaInstagram /></a>
            <a href='#' className='hover:text-gray-300'><FaFacebook /></a>
            <a href='#' className='hover:text-gray-300'><FaLinkedin /></a>
            <a href='#' className='hover:text-gray-300'><FaWhatsapp /></a>
          </div>

          <div className='absolute w-full h-full left-0 top-0 border-black-500 overflow-hidden'>
            <Image className='absolute bottom-[-30px] right-[-40px] opacity-45' src='/Contact/circlegroup.png' alt='circle-group' width={150} height={100} />
          </div>

          <div>
            <p className='font-[500] text-[20px]'>Contact Information</p>
            <p className='text-[14px] font-[100]'>We'd love to hear from you!</p>
          </div>

          <div>
            <ul className='flex flex-col gap-6'>
              <li className='flex gap-3 items-center'>
                <FaPhoneAlt className='text-lg' />
                <p>+91 9167055515</p>
              </li>
              <li className='flex gap-3 items-center'>
                <FaEnvelope className='text-lg' />
                <p>dhanvantripaints@gmail.com</p>
              </li>
              <li className='flex gap-3 items-center'>
                <FaMapMarkerAlt className='text-lg' />
                <p>Location SS Classes Nr Ganesh Mandir, Church Road, Manpada Thane West 40060</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className='relative flex flex-col w-full md:w-[700px]'>
          <div className='absolute bottom-0 right-20 hidden md:block'>
            <Image src='/Contact/plane.png' alt='Plane' width={300} height={450} />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-5'>
            <div>
              <p className='text-[16px]'>First Name</p>
              <input className='border-b border-gray-300 outline-none w-full' type='text' />
            </div>
            <div>
              <p>Last Name</p>
              <input className='border-b border-gray-300 outline-none w-full' type='text' />
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-5'>
            <div>
              <p className='text-[16px]'>Email</p>
              <input className='border-b border-gray-300 outline-none w-full' type='email' />
            </div>
            <div>
              <p>Phone Number</p>
              <input className='border-b border-gray-300 outline-none w-full' type='text' />
            </div>
          </div>

          <div className='flex flex-col gap-5 p-5'>
            <p>Message</p>
            <textarea className='border-b border-gray-300 outline-none w-full p-2 resize-none' placeholder='Write a message'></textarea>
          </div>

          <div className='flex justify-end px-3'>
            <button className='text-[14px] lg:w-fit w-[400px] lg:px-10 md:px-20 rounded-md py-3 bg-[#524BAD] my-3 mx-4 text-white hover:bg-[#403A8A] transition duration-300'>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
