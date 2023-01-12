import React from 'react';
import Link from 'next/link'

type BoardProps = {
  month?: string;
  date?: string;
  url: string;
};

export function Board({
  month,
  date,
  url='/',
}:BoardProps){  
  return (
    <Link href={url} target="_blank" className="group">
      <div className='bg-#172636/10 border-[1px] border-#1A2835 rounded-[15px] group-hover:bg-gradient-to-br from-hoverboard_bg/75 via-hoverboard_bg/40 to-[#070B10]'>
        <div className='bg-[#0095EB] drop-shadow-[0_6px_37px_rgba(0,149,235,1)] w-16 md:w-24 h-2 rounded-bl-[59px] rounded-br-[59px] rounded-tl-[6px] rounded-tr-[6px]'>
        </div>
        <div className='pl-4 pr-0 md:pl-6 md:pr-6 pt-4 pb-6 md:pb-16'>
          <h3 className='text-3xl md:text-5xl font-bold mt-2 text-#9DAFBE group-hover:text-white'>{month}</h3>
          <h4 className='text-xs md:text-lg font-bold mt-6 md:mt-14 text-white/50 group-hover:text-white'>{date}</h4>
        </div>
      </div>
    </Link>
  );


}


