import ModalVideo from "react-modal-video"
import '../video.scss'
import { BsPlayCircleFill } from 'react-icons/bs'
import { useState } from "react"



const Features = () => {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <section className="bg-section min-h-[428px] pt-8 
    pb-[38px] lg:pb-[150px] mt-[120px] lg:mt-[130px]">
      <div className="container mx-auto">
        {/* Video bg */}
         <div 
          data-aos='fade-up' data-aos-duration='1500' data-aos-offset='500'
         className="bg-video  h-[310px] bg-cover bg-center
         bg-no-repeat lg:h-[622px] w-full flex justify-center
         items-center rounded-md -mt-[150px] mb-[28px] lg:mb-20">
          {/* video play btn */}
          <button
          onClick={() => setIsOpen(true)}
          className="text-6xl text-orange lg:text-[120px]
          cursor-pointer hover:scale-110 transition">
            <BsPlayCircleFill />
          </button>
         </div>

         {/* text */}
         <div className="flex flex-col md:flex-row md:justify-between">
          <div
           data-aos='fade-right' 
           className="flex-1">
            <div className="w-9 h-[2px] bg-orange mb-4 lg:w-[70px] rounded-full" />
            <h2 className="h2 mb-3 lg:mb-0">
              The Better Way To <br /> Start Yoga
            </h2>
          </div>
          <div  data-aos='fade-left'  >
              <p className="max-w-[360px]  mb-[1.2rem] lg:mb-[2.3rem]">
                Practice anywhere, anytime. Explore a new Way
                to exercise and learn more about yourself. We 
                are providing the best.
              </p>
              <button className="btn btn-sm btn-orange">
                Get started</button>
            </div>
         </div>


      </div>

      <ModalVideo 
      channel="youtube"
      autoplay
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      videoId="klmBssEYkdu"
      />
    </section>
  )
}

export default Features