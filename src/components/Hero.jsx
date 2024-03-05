import styles from "../style"
import { discount, robot } from "../assets"
import GetStarted from "../components/GetStarted"



const Hero = () => {
  return(
    <section id="home" className={`flex md:flex-row flex-col items-start ${styles.paddingY}`}>
      <div className={`flex-1 xl:px-0 sm:px-16 px-6 ${styles.flexStart} w-full
       flex-col flex-start`}>
        <div className="flex items-center bg-discount-gradient py-[6px]
         rounded-[10px] mb-2 px-4">
          <img src={discount} alt="disount-logo" className="h-[32px] w-[32px] " />
          <p className={`${styles.paragraph}`}>
            <span className="text-white">20%</span> DISCOUNT FOR
            <span className="text-white"> 1 MONTH</span> ACCOUNT
          </p>
        </div>

        <div className="text-white flex flex-1 font-poppins font-semibold w-full 
        ss:text-[72px] xs:text-[52px] text-[45px] ss:leading-[100px] justify-between pr-0">
          <h1>
            The Future <br className="sm:block hidden" />
            <span className="text-gradient">{' '}Generation</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 ">
            <GetStarted />
          </div>
        </div>
        <div>
          <h1 className="text-white flex font-poppins font-semibold 
          ss:text-[68px] xs:text-[52px] text-[45px] ss:leading-[100px] ">Payment Method</h1>
          <p className={`${styles.paragraph} max-w-[470px] lg:mt-8 mt-5`} >
            With the right credit card, you can improve your financial life 
            by building credit, earning rewards and saving money. But with 
            hundreds of credit cards on the market.
          </p>
        </div>
      </div>

      <div className={`${styles.flexCenter} flex-1 md:my-0 my-10 relative`} >
        <img src={robot} alt="billing-img" className=" w-[100%] h-[100%] relative 
        z-index-[5] lg:-mr-20 " />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient " />
        <div className="absolute z-[1] w-[80%] h-[85%] rounded-full bottom-40
        light_yellow__gradient " />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 
        orange__gradient " />
      </div>

      <div className={`ss:hidden ${styles.flexCenter} w-full`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero