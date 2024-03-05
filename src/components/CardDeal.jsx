import Button from './Button'
import { card } from '../assets'

const CardDeal = () => {
  return (
    <section className={`sm:mb-20 mb-6 justify-between flex flex-col ss:flex-row ss:items-center`}>
      <div className="ss:max-w-[50%] ss:mr-6" >
        <h3 className="text-white font-poppins font-semibold xs:text-[48px] text-[45px]" >
          Find a better card deal, <br className="xs:block hidden"/> in few easy steps
        </h3>
        <p className="mt-5 flex text-white font-poppins lg:max-w-[500px] pr-3 xs:pr-6 text-[18px]">
          Arcu tortor, purus in mattis at sed integer faucibus. <br className="hidden md:flex lg:hidden" />
          Aliquet quis aliquet eget mauris tortor.ç Aliquet <br className="hidden md:flex lg:hidden" />
          ultrices ac, ametau.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className="ss:max-w-[50%] md:pl-10">
        <img src={card} alt="card" className='w-[100%] h-[100%]' />
      </div>
    </section>
  )
}

export default CardDeal