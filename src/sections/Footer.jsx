import { FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa'
import { images } from '../constants'

const Footer = () => {
  return (
    <footer
    data-aos='fade-up' data-aos-offset='0'
    className='pb-[70px] '>
      <div className="container mx-auto">
        <div className='flex flex-col justify-between items-center lg:flex-row
        gap-y-5'>
          <a href="#">
          <img src={images.Logo} alt="logo" />
          </a>

          <small>&copy; {new Date().getFullYear()}. All rights reserved</small>

          <div className='flex gap-x-4 text-orange text-lg'>
            <div className='w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center
            shadow-primary cursor-pointer hove:text-paragraph transition'>
              <FaYoutube /></div>
              <div className='w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center
            shadow-primary cursor-pointer hove:text-paragraph transition'>
              <FaInstagram /></div>
              <div className='w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center
            shadow-primary cursor-pointer hove:text-paragraph transition'>
              <FaGithub /></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer