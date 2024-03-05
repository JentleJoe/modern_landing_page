import { clients } from "../constants"
import { airbnb, coinbase, binance, dropbox } from "../assets"

const Clients = () => {
  return (
    <section className="flex items-center md:px-8 md:justify-between justify-center flex-wrap mt-6 ss:mt-20 ">
      {
        clients.map((client, index) => {
          return(
            <img src={client.logo} key={client.id} className={`ss:w-[193px] w-[130px] h-[40px] ss:h-[60px] mx-3
            object-contain ${index !== 3 && 'mb-4'} `} />
          )
        })
      }
    </section>
  )
}

export default Clients