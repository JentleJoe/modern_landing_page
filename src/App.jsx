import React from 'react'
import styles from './style'
import {Navbar, Hero, Stats, Billing, Business, CardDeal, Testimonials, Clients, CTA, Footer} from './components'

const App = () => (
  <>
    <div className='bg-primary w-full overflow-hidden pb-12 lg:px-10' >
      <div className={`sm:px-16 px-6 ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary sm:px-16 px-6 ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
        </div>
      </div>

    </div>
    <div className={`flex items-center justify-center bg-black pt-10 sm:px-16 px-6`}>
      <div className={`lg:px-16 ${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </>
)

export default App