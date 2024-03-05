import React from 'react'
import { apple, bill, google } from '../assets'
import styles, {layout} from '../style'

// This section should have an ID of product because it can be scrolled to
// This section should have a col-reverse property so that in mobile devices
// the image comes second instead of first
const Billing = () => {
  return (
    <section id='product' className={`sm:mb-20 mb-6 flex flex-col-reverse justify-between ss:flex-row ss:items-center`}>
      <div className="ss:max-w-[50%] sm:mr-6" >
        <img src={bill} alt="billing" className='w-[100%] h-[100%] z-[5]' />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%]
        rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%]
        rounded-full pink__gradient" />
      </div>

      <div className="ss:max-w-[50%] md:pl-10 pr-4">
          <h2 className='text-white font-poppins font-semibold xs:text-[48px] text-[45px] pr-4 pl-4'>
            Easily control your<br className='sm:block hidden'/> billing & invoicing.
          </h2>
          <p className='mt-5 flex text-white font-poppins pr-4 pl-4 lg:max-w-[470px] text-[18px]'>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque.
          Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
          </p>
          <div className='mt-10 flex' >
            <img src={apple} alt="apple_store" className='cursor-pointer w-[120px] h-[35px] ss:w-[145px] ss:h-[44px] ' />
            <img src={google} alt="google_play" className='ml-6 cursor-pointer w-[120px] h-[35px] ss:w-[145px] ss:h-[44px]' />
          </div>
      </div>
    </section>
  )
}

export default Billing