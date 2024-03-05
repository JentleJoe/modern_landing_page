import { people01, people02, people03, quotes } from "../assets"

const FeedbackCard = ({ img, name, title, content, styles }) => {
  return (
    <div className={`feedback-card max-w-[370px] h-[395px] min-w-[279px] min-h-[395] flex-1
     rounded-[20px] px-[40px] py-[60px] flex flex-col justify-center`}
     >
      <img src={quotes} alt="quote-img" className="mb-10 h-[29px] w-[43px] " />
      <p className='text-white mb-10 text-[18px] font-poppins' >{content}</p>
      <div className="flex">
        <img src={img} alt="" className="avatar w-[48px] h-[48px] mr-3 rounded-full" />
        <div className="" >
          <h4 className='text-white font-poppins text-[20px]'>{name}</h4>
          <p className="text-dimWhite font-poppins text-[16px]">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard