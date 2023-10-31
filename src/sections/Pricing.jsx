import { useState } from "react"
import { pricing } from "../data"


const Pricing = () => {
  const [index, setIndex] = useState(0)


  return (
    <section className="section-sm lg:section-lg bg-section">
      <div className="container mx-auto">
        {/* text */}
        <div className="text-center mb-7 lg:mb-[70px]">
          <h2
           data-aos='fade-up' data-aos-delay='600'
          className="h2 mb-3 lg:mb-[1.2rem]">
            Pick a Pricing Plan</h2>
          <p 
           data-aos='fade-up' data-aos-delay='700'
          className="max-w-[398px] mx-auto">
            Pick a pricing plan and get started on your journey
            with us to build your body. 
          </p>
        </div>

        {/* cards */}
        <div className="flex flex-col mx-auto items-center gap-y-5 lg:flex-row lg:gap-x-[1.1rem]">
          {
            pricing.map(({title, price, list, buttonText, buttonIcon, delay}, Ci) => (
              <article 
              data-aos='fade-up' data-aos-delay={delay} data-aos-offset='400'
              onClick={() => setIndex(Ci)}
              className="bg-white w-full max-w-[368px] relative min-h-[668px] h-full cursor-pointer"
              key={Ci} >
                <div className={`${index === Ci ? 'bg-orange text-white' : 'bg-white text-heading'}
                text-center pt-[70px] pb-[1.2rem] border-b border-stroke-3 transition`}>
                 <h4 className="text-[1.4rem] font-medium mb-[10px]"> 
                  {title}</h4>
                   <h3 className="text-[2.2rem] font-semibold">
                    {price}</h3>
                </div>

                <div className="px-[1.8rem] pt-[1.2rem] pb-[1.8rem] ">
                  <p className="text-center mb-6 text-sm">
                    Discover your favorite class!</p>
              

                <ul className="flex flex-col gap-3 mb-10">
                  {
                    list.map(({icon, name}, i) => (
                      <li 
                      className="border border-stroke-3 flex border-r-green p-4 rounded-md items-center gap-4"
                      key={i}>
                      <div className="flex justify-center items-center bg-green-100 w-7 h-7 text-2xl
                      text-green-300 rounded-full ">
                        {icon}</div> {name}
                      </li>
                    ))
                  }
                </ul>
              <div className="absolute bottom-[1.8rem] w-full left-0 right-0 px-[1.8rem]">
              <button className={`${index === Ci ? 'bg-orange text-white' : 'border-orange'} w-full h-[50px]
                rounded border border-orange flex items-center justify-center text-orange font-medium transition relative`}>
                  {buttonText}
                  <div className={`${index === Ci ? 'bg-orange-200' : 'bg-orange'}
                  w-[50px] h-[50px] flex justify-center items-center absolute right-0 rounded text-white`}>
                    {buttonIcon}
                  </div>
                  </button>
              </div>
                </div>
              </article>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Pricing