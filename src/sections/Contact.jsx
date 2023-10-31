

const Contact = () => {




  return (
    <section className='section-sm lg:section-lg lg:pt-[250px]'>
      <div className="container mx-auto">
        <div 
        data-aos='zoom-in'  data-aos-offset='400'
        className="flex flex-col lg:flex-row lg:gap-x-[74px] bg-contact
        bg-no-repeat bg-cover min-h-[600px]">

          <div 
          data-aos='fade-down' data-aos-delay='300' data-aos-offset='500'
          className="flex-1 flex flex-col justify-center pl-8">
            <h2 className="h2 mb-3 lg:mb-7">
              Get in touch with us for Yoga Course</h2>
            <p className="mb-7 lg:mb-0">
              Get in touch with us for any kind of help.
              We are here to give you the best and also here
              to help you find your your yoga course
            </p>
          </div>

          <form 
          data-aos='fade-up' data-aos-delay='300' data-aos-offset='500'
         
          className="flex-1 bg-white shadow-primary rounded-[20px] p-5 lg:p-10 flex flex-col
          gap-y-5 max-h-[600px] lg:-mt-20 ">
            <input 
             type="text"
             className="form-control"
             placeholder="First Name"
             name="user_firstname"
             required
             />
            <input 
             type="text"
             className="form-control"
             placeholder="Last Name"
             name="user_lastname"
             required
             />
            <input 
             type="email"
             className="form-control"
             placeholder="Email address"
             name="user_email"
             required
             />
            <textarea 
            className="form-control py-5 h-[165px] resize-none"
            placeholder="Message"
            name="user_message"
            ></textarea>
            <button className="btn btn-lg btn-orange"
            type="submit">
              Send message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact