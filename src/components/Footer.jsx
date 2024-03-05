import { logo } from "../assets"
import { footerLinks, socialMedia } from "../constants"
import { facebook, twitter, linkedin, github } from "../assets"

const Footer = () => {
  return (
    <section className="">
      <div className='w-full flex pb-10 border-b-[1px] border-dimWhite justify-between flex-wrap' >
        <div className="ml-6 lg:ml-0">
          <img src={logo} alt="logo" />
          <p className="text-dimWhite font-poppins lg:mt-10 md:mt-6 mt-3 px-10 text-[18px]" >
            A new way to make the payments <span className="xs:block hidden" />
            easy, reliable and secure
          </p>
        </div>
        <div className="lg:w-[59%] xl:w-[60%] lg:mt-0 mt-10 w-full flex justify-between flex-wrap">
        {
          footerLinks.map((content) => {
            return(
              <div key={content.title} className="my-6 ml-6">
                <p className="text-white font-poppins font-bold text-[18px] mb-6">
                  {content.title}
                </p>
                <div>
                  {
                    content.links.map((item, index) => {
                      return(
                        <a key={item.name} href={item.link} target="_blank">
                          <p className={`text-dimWhite font-poppins text-[16px] mt-3  lg:mr-8
                          mr-6`}>{item.name}</p>
                        </a>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
        </div>
      </div>
      <div className="flex flex-wrap fb:justify-between justify-center flex-col-reverse items-center fb:flex-row">
        <p className="text-dimWhite font font-poppins xs:text-[16px] text-[12px] fb:pt-8 pb-8">Copyright ©️  2024 JoeBank. All Rights Reserved.</p>
        <div className="flex px-6 flex-shrink-0 py-8">
          {
            socialMedia.map((socials, index) => {
              return(
                <a href={socials.link} key={socials.id} target="_blank"
                className={`${index != socialMedia.length - 1 ? "mr-6" : "mr-0"}`} >
                  <img className="block w-[24px]" src={socials.icon}  />
                </a>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Footer