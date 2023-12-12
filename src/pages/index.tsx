import { Meta } from '../components/Meta'
import { Recruit } from '../components/layout/Recurit'
import { Warriors } from '../components/layout/Warriors'
import { ContributionBoard } from '../components/layout/Contributionboard'
import { WarriorsList } from '../components/layout/WarriorsList'
import { BountyList } from '../components/layout/BountyLst'
import Link from 'next/link'

export default function Home() {

  return (
    <>
      <Meta
        title='StaFi Warriors Team'
        description='StaFi Warriors team consists of the community member who believe StaFi‘s concepts and prospects deeply. They are working together with the core team to advocate and generalize StaFi’s vision and mission to build an open, free and self-governed StaFi community.'
        image='https://warrior.stafi.io/social_card.png'
        url='https://warrior.stafi.io'
      />
      <div className='bg-blackColor'>
        <div className='bg-bgWave bg-cover bg-repeat bg-center'>
          <div className='max-w-7xl mx-auto'>
            <section>
              <div className=''>
                <div className='px-4 py-24'>
                  <img src='/image/stafi_font.svg' className='mx-auto h-20 md:h-36'/>
                  <img src='/image/warrior_font.svg' className='mx-auto h-20 md:h-36 mt-4'/>
                  <div className='flex gap-6 md:gap-12 mt-12 md:mt-24 justify-center'>
                    <Link href="#apply">
                      <button className='bg-gradient-to-r from-#0093ED to-#00F3AB text-black text-sm md:text-base font-bold px-8 py-4 md:px-10 md:py-4 rounded-[12px]'> Apply Now</button>
                    </Link>
                    <Link href="https://medium.com/stafi/stafi-warriors-program-79bdc4b6a447" target="_blank">
                      <button className='border-[1px]	border-#5B6872 text-#9DAFBE text-sm md:text-base font-bold px-8 py-4 md:px-10 md:py-4 rounded-[12px]'> Learn More</button>
                    </Link>
                  </div>
                  <p className='text-center text-#5B6872 text-sm md:text-base mt-16 px-4 md:px-32 tracking-wide md:tracking-wide leading-relaxed md:leading-relaxed'>
                    StaFi Warriors team consists of the community members who believe StaFi‘s concepts and prospects deeply. They are working together with the core team to advocate and generalize StaFi’s vision and mission to build an open, free and self-governed StaFi community.
                  </p>
                  <div className='mt-16 md:mt-32 px-4 md:px-24'>
                    <div className='grid grid-cols-3 gap-4 md:gap-8'>
                      <div className=''>
                        <img src="/image/create_icon.png" className='w-14 mx-auto'/>
                        <h2 className='text-base md:text-xl text-#9DAFBE mt-4 text-center'>Co-Create</h2>
                      </div>
                      <div className=''>
                        <img src="/image/govern_icon.png" className='w-14 mx-auto'/>
                        <h2 className='text-base md:text-xl text-#9DAFBE mt-4 text-center'>Co-Govern</h2>
                      </div>
                      <div className=''>
                        <img src="/image/share_icon.png" className='w-14 mx-auto'/>
                        <h2 className='text-base md:text-xl text-#9DAFBE mt-4 text-center'>Co-Share</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          <WarriorsList/>
          <BountyList/>
          <Recruit/>
          <div id='apply'>
            <Warriors/>
          </div>
          <ContributionBoard/>
          </div>
        </div>
      </div>         
      
    </>
  )
}


