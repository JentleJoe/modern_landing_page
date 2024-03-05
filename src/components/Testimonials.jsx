import { feedbacks } from "../constants"
import styles from "../style"
import FeedbackCard from "./FeedbackCard"
import Button from './Button'

const Testimonials = () => {
  return (
    <section id="clients" className="relative" >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full light_purple__gradient "/>
      <div className={`sm:mb-20 mb-6 justify-between flex flex-col-reverse ss:flex-row ss:items-center`}>
        <div className="ss:max-w-[50%] ss:mr-6" >
          <h3 className="text-white font-poppins font-semibold xs:text-[48px] text-[45px]" >
            What people are, <br className="ss:block hidden"/> saying about us
          </h3>
        </div>

        <div className="ss:max-w-[50%] md:pl-10">
          <p className="text-white font-poppins text-[18px]">
            Everything you need to accept card payments <br className='ss:block hidden'/>
            and grow your business anywhere on the planet.
          </p>
        </div>
      </div>

      <div className="flex ss:justify-between justify-center flex-wrap">
        {
          feedbacks.map((feedback, index) => {
            return(
              <FeedbackCard key={feedback.id} {...feedback} styles={index !== 2 ? "mr-6" : "mr-0"} />
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials