import { features } from "../constants"
import styles, { layout } from "../style"
import { star } from "../assets"
import Button from "./Button"

const Business = () => {
  return (
    <section id="features" className={`sm:mb-20 mb-6 justify-between flex flex-col ss:flex-row ss:items-center`}>
      <div className="ss:max-w-[50%] ss:mr-6" >
        <h3 className="text-white font-poppins font-semibold xs:text-[48px] text-[45px]" >
          You do the business, <br className="xs:block hidden"/> we'll handle the money
        </h3>
        <p className="mt-5 flex text-white font-poppins lg:max-w-[500px] pr-3 xs:pr-6 text-[18px]">
          With the right credit card, you can improve your financial <br className="hidden md:flex lg:hidden" />
          life by building credit, earning rewards and saving money. <br className="hidden md:flex lg:hidden" />
          But with hundreds of credit cards on the market.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className="ss:max-w-[50%] md:pl-10">
        {
          features.map((feature, index) => {
            return(
              <div key={feature.id} className={`features-card cursor-default ${index !== 2 ? "mb-6" : "mb-0"} flex mt-6
               rounded-3xl p-4 items-center flex-1`} >
                <div className="flex flex-shrink-0 mr-6 w-[56px] h-[56px] rounded-full items-center justify-center
                 bg-[#09977C1A]" >
                  <img src={feature.icon} alt="icon" className="object-contain p-2" />
                </div>
                <div className="max-w-[400px]" >
                  <h2 className="text-white font-poppins font-semibold text-[18px]" >{feature.title}</h2>
                  <p className={`max-w[480px] text-dimWhite font-poppins text-[16px]`} >
                    {feature.content}
                  </p>
                </div>
              </div>
              )
          })
        }
      </div>
    </section>
  )
}

export default Business