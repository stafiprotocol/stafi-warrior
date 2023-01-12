import React from 'react';
import Link from 'next/link'

type CardProps = {
  title?: string;
  image?: string;
  url?: string;
};

export function Card({
  title,
  image,
  url='/',
}:CardProps){  
  return (
    <div className='bg-#172636/15 border-[1px] border-#1A2835 rounded-[15px]'>
      <div className='px-8 pt-6 pb-8'>
        <img src={image} className='w-12'/>
        <div className='mt-6 text-lg font-bold text-[#9DAFBE]'>{title}</div>
          <Link href={url} target="_blank">
            <div className='mt-6 flex gap-2'>
              <p className='text-base text-#00F3AB'> Apply </p>
              <img src='/image/apply_icon.svg' className='w-4'/>
            </div>
          </Link>
      </div>
    </div>
  );


}


