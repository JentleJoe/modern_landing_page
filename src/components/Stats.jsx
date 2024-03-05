import { stats } from "../constants"
import styles from "../style"

const Stats = () => {
  return (
    <section className={`${styles.flexStart} flex-wrap w-full justify-between
    sm:mb-20 mb-6`} >
      {stats.map((stat, index) => {
        return(
          <div key={stat.id} className={`flex flex-row flex-1} items-center
          md:justify-between
          `} >
            <h4 className={`text-white font-semibold font-poppins 
             xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]'} `
             } >
              {stat.value}
            </h4>
            <p className={`text-white font-normal font-poppins text-gradient uppercase
             xs:text[20px] text-[15px] xs:leading-[26px] leading-[21px] ml-3
              ${index === 2 ? '' : 'mr-6'}`}>
              {stat.title}
            </p>
            {/* {index === 2 ? null : 
            <div className={`hidden md:flex md:bg-white md:w-1 md:mx-6`}></div>
            } */}
          </div>
        )
      })}
    </section>
  )
}

export default Stats