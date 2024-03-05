import { arrowUp } from "../assets"
import styles from "../style"

const GetStarted = () => {
  return (
    <div className='bg-orange-gradient w-[140px] h-[140px] rounded-full p-[2px] cursor-pointer '>
      <div className={`bg-primary w-full h-full rounded-full flex-col ${styles.flexCenter} `}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins text-[18px] leading-[23px] mr-2 flex-row">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} alt="arrowUp" className="w-[23px] h-[23px] object-contain"/>
        </div>
        <p className="font-poppins text-[18px] leading-[23px] mr-2 flex-row">
            <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  )
}

export default GetStarted