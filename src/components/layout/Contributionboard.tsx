import { Board } from '../Board'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay} from 'swiper';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"



const slides =[
  {
    id:19,
    month:'7',
    date: 'July，2023',
    url:'https://dao.stafi.io/t/stafi-warriors-contribution-submission-assessment-july-2023/103'
  },
  {
    id:18,
    month:'6',
    date: 'June，2023',
    url:'https://dao.stafi.io/t/stafi-warriors-contribution-submission-assessment-june-2023/91/10?u=sara_stafi'
  },
  {
    id:17,
    month:'5',
    date: 'May，2023',
    url:'https://dao.stafi.io/t/stafi-warriors-contribution-submission-assessment-may-2023/82/11?u=sara_stafi'
  },
  {
    id:16,
    month:'4',
    date: 'April，2023',
    url:'https://commonwealth.im/stafi/discussion/11318-stafi-warriors-contribution-submission-assessment-2023-april'
  },
  {
    id:15,
    month:'3',
    date: 'March，2023',
    url:'https://commonwealth.im/stafi/discussion/10935-stafi-warriors-contribution-submission-assessment-2023-march'
  },
  {
    id:14,
    month:'2',
    date: 'February，2023',
    url:'https://commonwealth.im/stafi/discussion/10224-stafi-warriors-contribution-submission-assessment-2023-february'
  },
  {
    id:13,
    month:'1',
    date: 'January，2023',
    url:'https://commonwealth.im/stafi/discussion/9782-stafi-warriors-contribution-submissionassessment2023-january'
  },
  {
    id:12,
    month:'12',
    date: 'December，2022',
    url:'https://commonwealth.im/stafi/discussion/8797-warrior-contribution-submissionassessment2022-december'
  },
  {
    id:11,
    month:'11',
    date: 'November，2022',
    url:'https://commonwealth.im/stafi/discussion/8051-warrior-contribution-submissionassessment2022-november'
  },
  {
    id:10,
    month:'10',
    date: 'October，2022',
    url:'https://commonwealth.im/stafi/discussion/7417-warrior-contribution-submissionassessment2022-october'
  },
  {
    id:9,
    month:'9',
    date: 'September，2022',
    url:'https://twitter.com/StaFi_Protocol/status/1580872961724030978'
  },
  {
    id:8,
    month:'8',
    date: 'August，2022',
    url:'https://twitter.com/StaFi_Protocol/status/1570018838078717954'
  },
  {
    id:7,
    month:'7',
    date: 'July，2022',
    url:'https://twitter.com/StaFi_Protocol/status/1557662998323466240'
  },
  {
    id:6,
    month:'6',
    date: 'June，2022',
    url:'https://twitter.com/StaFi_Protocol/status/1547548449763123204'
  },
  {
    id:5,
    month:'5',
    date: 'May，2022',
    url:'https://twitter.com/StaFi_Protocol/status/1536715167417122817'
  },
  {
    id:4,
    month:'4',
    date: 'April，2022',
    url:'https://twitter.com/StaFi_Protocol/status/1526115391079976960'
  },
  {
    id:3,
    month:'3',
    date: 'March，2022',
    url:'https://twitter.com/StaFi_Protocol/status/1514579473697415170'
  },
  {
    id:2,
    month:'2',
    date: 'February，2022',
    url:'https://twitter.com/StaFi_Protocol/status/1503713022472495112'
  },
  {
    id:1,
    month:'1',
    date: 'January，2022',
    url:'https://twitter.com/StaFi_Protocol/status/1493159510688821251'
  },

]


export function ContributionBoard() {

  let page: number = Math.ceil(slides.length/9) ;
  let slidesNumber :Array<number> = new Array(page).fill(0);

  return(
    <>
      <div className="py-12 md:py-24 px-2 md:px-16">
        <img src="/image/beekeeper_icon.png" className="mx-auto w-24"/>
        <h1 className="text-center font-anton text-base md:text-xl text-#FFA540 tracking-widest md:tracking-widest">
          Warrior
        </h1>
        <h2 className="text-white font-anton text-4xl md:text-5xl text-center mt-6 tracking-[.3em] md:tracking-[.3em]">
          Contribution Board
        </h2>

      <div className='w-full'>
        <Swiper
          modules={[Pagination,Autoplay]} 
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{delay:3000}}
          speed={1000}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className="w-full mt-6 md:mt-12"
        >
        {slidesNumber.map((item,index) => (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-3 grid-rows-3 gap-2 md:gap-4 py-10 md:py-14'>
              {slides.slice(index*9,index*9+9).map((item) => (
                <Board
                month={item.month}
                date={item.date}
                url={item.url}
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