import CountUp from "react-countup"
import { facts } from "../data"
import { images } from "../constants"

const Facts = () => {
  return (
    <section className="section-sm lg:section-lg">
      <div className="container mx-auto flex flex-col-reverse  lg:flex-row lg:gap-x-[1.8rem]">
        <div className="flex flex-1 flex-wrap gap-x-[5%] gap-y-[35px]">
          {
            facts.map(({startNumber, endNumber, unit, title, desc}, i) => (
              <div 
              className="w-[45%]"
              key={i}>
                <h2 className="h2 mb-2 lg:mb-4">
                  <CountUp 
                  start={startNumber}
                  end={endNumber}
                  duration={2}
                  enableScrollSpy
                  />
                  {unit}+
                </h2>
                <h5 className="text-xl font-bold text-heading mb-3">
                  {title}</h5>
                  <p className="max-w-[240px]">
                    {desc}</p>
              </div>
            ))
          }
        </div>

        <div className="flex-1" >
          <div className="flex flex-col justify-center h-full lg:pl-[100px]" >
            <h2
             data-aos='fade-down' data-aos-delay='500'
             className="h2 mb-12 max-w-[295px] md:max-w-none">
              Relax And Enjoy a Personalized Day Yoga With Us.
            </h2>
            <div 
             data-aos='fade-down' data-aos-delay='600'
            className="mb-2" >
              <img src={images.JohnCena} alt="signature" />
            </div>
            <p
             data-aos='fade-down' data-aos-delay='700'
            className="text-lg mb-6 font-bold text-heading">
              John Cena/<span className="text-base text-paragraph font-normal">
                Founder</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Facts