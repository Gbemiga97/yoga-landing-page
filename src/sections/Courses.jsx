import {BsStarFill, BsStarHalf} from 'react-icons/bs'
import { courses } from '../data'

const Courses = () => {
  return (
    <section className='section-sm lg:section-lg'>
        <div className="container mx-auto">
            {/* text */}
            <div className='text-center mb-16 lg:mb-32'>
                <h2 
                 data-aos='fade-down' data-aos-delay='200'
                className='h2 mb-3 lg:mb-[1.2rem]'>
                 Popular Courses
                </h2>
                <p 
                 data-aos='fade-down' data-aos-delay='300'
                className='max-w-[480px] mx-auto '>
                    Practice anywhere, anytime. 
                    Explore a new Way to exercise and 
                    learn more about yourself. 
                    We are providing the best.
                </p>
            </div>


            {/* courses */}
            <div className='flex flex-col lg:flex-row items-center lg:gap-x-[2.1rem] gap-y-24 mb-7
            lg:mb-14 mt-[5rem]'>
                {
                    courses.map(({image, title, desc, link, delay}, i) => (
                        <article
                        data-aos='fade-up' data-aos-delay={delay}
                        className='w-full  bg-white hover:shadow-primary max-w-[368px] px-[1.2rem]
                        pb-[26px] lg:px-[28px] lg:pb-[2.2rem] flex flex-col rounded-[0.8rem] 
                        max-auto transition'
                        key={i}>
                            <div className='-mt-[2.2rem] lg:-mt-12 mb-4 lg:mb-6'>
                                <img src={image} alt={title} />
                            </div>

                            <div>
                                <h4 className='text-lg lg:text-xl font-semibold mb-2 lg:mb-4'>
                                    {title}</h4>
                                <p>{desc}</p>

                                <div className='flex items-center justify-between mt-8 mb-2 lg:mb-0 '>
                                    <div className='flex text-orange gap-x-2'>
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarHalf />
                                        </div>
                                        <a className='font-medium'
                                         href="#">{link}</a>
                                    
                                </div>
                            </div>
                        </article>
                    ))
                }
            </div>



            {/* btn */}
            <div
             data-aos='fade-up' data-aos-delay='600'
            className='flex justify-center'>
                <button className='btn btn-sm btn-orange'>
                    Browse all</button>
            </div>
        </div>
    </section>
  )
}

export default Courses