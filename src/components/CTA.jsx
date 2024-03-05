import Button from './Button'

const CTA = () => {
  return (
    <section className='flex ss:mt-20 mt-6 ss:p-20 p-10 bg-black-gradient-2 rounded-[20px] items-center
    md:justify-between justify-center flex-wrap '>
      <div className=''>
        <h3 className='text-white font-poppins font-semibold xs:text-[48px] text-[45px] md:mr-10'>
          Let's try our service now!
        </h3>
        <p className='text-dimWhite font-poppins text-[18px]' >
          Everything you need to accept card payments <br className='sm:block hidden' />
          and grow your business anywhere on the planet.
        </p>
      </div>
      <div className='mt-10'>
        <Button />
      </div>
    </section>
  )
}

export default CTA