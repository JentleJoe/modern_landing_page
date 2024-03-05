const Button = ({styles}) => {
  return (
    <button className={`w-[170px] h-[64px] bg-orange-gradient flex justify-center items-center 
    rounded-[10px] font-poppins font-semibold ${styles}`} >
      Get Started
    </button>
  )
}

export default Button