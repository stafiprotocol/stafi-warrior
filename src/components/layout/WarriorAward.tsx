import { Board } from '../Board'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay} from 'swiper';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"

const awardList = [
  {
    image:"/image/2023Q2moderatorrewards_icon.png",
    id:1,
  },
  {
    image:"/image/2023Q2ambassadorrewards_icon.png",
    id:2,
  }
]

export function WarriorAward() {

  let page: number = Math.ceil(awardList.length/2) ;
  let slidesNumber :Array<number> = new Array(page).fill(0);

  return(
    <>
      <div className="py-16 md:py-24 px-4 md:px-24">
        <img src="/image/beekeeper_icon.png" className="mx-auto w-24"/>
        <h1 className="text-center font-anton text-base md:text-xl text-#FFA540 tracking-widest md:tracking-widest">
          About
        </h1>
        <h2 className="text-white font-anton text-4xl md:text-5xl text-center mt-6 tracking-[.3em] md:tracking-[.3em]">
          Warrior Star Award
        </h2>
        <p className='text-center text-#5B6872 text-sm md:text-base mt-10 md:mt-16 px-4 md:px-20 tracking-wide md:tracking-wide leading-relaxed md:leading-relaxed'>
          Warrior Star Award is awarded quarterly for the warriors that have made significant contributions and passions to the StaFi ecosystem. They may not be the best performed, but are most devoted, fastest growing and greatly passionate in the StaFi Warriors team.
        </p>
        <div className='w-full'>
          <Swiper
            modules={[Pagination,Autoplay]} 
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={1}
            speed={1000}
            autoplay={{delay:3000}}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className="w-full mt-4 md:mt-10"
          >
          {slidesNumber.map((item,index) => (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-2 gap-4 md:gap-8 py-6 md:py-14' key={index}>
                {awardList.slice(index*2,index*2+2).map((item) => (
                  <img
                    src={item.image}
                    className="w-full"
                    key={item.id}
                  />
                ))}
              </div>
            </SwiperSlide> 
          ))}

          </Swiper>

      </div>
      </div>
    </>
  )
}