import { images } from "../constants"


const Cards = () => {
  return (
    <section className="bg-cardsBg min-h-[260px] pb-[55px] lg:-mt-24 ">
        <div className="container mx-auto flex flex-col lg:flex-row gap-x-[2rem] ">

            <div className="flex flex-1 gap-x-[0.9rem] lg:gap-x-[2rem] -mt-[2.5rem]
            z-10 lg:-mt-[77px] mx-auto">

                {/* Card 1 */}
                <div className="bg-white w-full max-w-[282px] p-[14px]
                lg:p-[26px] shadow-2xl rounded-md max-h-[282px]">
                    <div className="flex items-center mb-[1.2rem] lg:[28px]">
                        <h4 className="text-lg lg:text-2xl lg:leading-7 font-bold
                        text-heading mr-8 ">
                            Make Your Own Plan For Yoga.</h4>
                        <h2 className='h2 text-stroke-2'>1</h2>
                    </div>

                    <div>
                        <img src={images.Card1} alt="yoga" />
                    </div>
                </div>



                {/* Card 2 */}
                <div className="bg-white w-full max-w-[282px] p-[14px]
                lg:p-[26px] shadow-2xl rounded-md max-h-[282px]">
                    <div className="flex items-center mb-[1.2rem] lg:[28px]">
                        <h4 className="text-lg lg:text-2xl lg:leading-7 font-bold
                        text-heading mr-8 ">
                            Find a Yoga Mentor For You.</h4>
                        <h2 className='h2 text-stroke-2'>2</h2>
                    </div>

                    <div>
                        <img src={images.Card2} alt="yoga" />
                    </div>
                </div>
            </div>

             {/* Card 3 */}
             <div className="bg-white w-full flex-1 max-w-[542px] mx-auto p-[0.8rem]
                lg:p-[1.6rem]  mt-4 lg:-mt-[77px] z-10 shadow-2xl rounded-md flex 
                justify-between items-start">

                    <div className="max-w-[240px]">
                        <div className="flex items-center mb-4 lg:mb-8">
                            <h4 className="text-lg lg:text-2xl lg:leading-7 font-bold
                            text-heading mr-8">
                                Every-Day Open Master Classes.</h4>
                            <h2 className="h2 text-stroke-2">3</h2>
                        </div>
                        <p className="mb-4 lg:mb-3">
                            We're boosting online yoga by enabling anyone
                            in the world to learn from the best
                        </p>
                        <a 
                        className="text-xs lg:text-sm font-bold uppercase text-heading"
                        href="#">Read more</a>
                    </div>

                    <div>
                        <img src={images.Card3} alt="yoga" />
                    </div>
                </div>
        </div>
    </section>
  )
}

export default Cards