
import React from 'react';
import Link from 'next/link'

type BountyCardProps = {
  title: string;
  description: string;
  url: string;
  amount: string;
};

export function BountyCard({title,description,url,amount}:BountyCardProps){
  return(
    <div className='bg-#172636/15 border-[1px] border-#1A2835 rounded-[15px] cursor-pointer'>
      <Link href={url} target="_blank">
        <div className='px-8 pt-6 pb-8'>
          <div className='mt-6 text-lg font-bold text-[#9DAFBE]'>{title}</div>
            <div className='mt-6 text-base text-[#9DAFBE]'>
              {description}
            </div>
            <div className='flex mt-6 text-[#9DAFBE] items-center'>
              <div className='text-base text-medium'>
                Rewards:
              </div>
              <div className='text-right text-base'>
                {amount}
              </div>
            </div>
              <div className='mt-6 flex gap-2'>
                <p className='text-base text-#00F3AB'> Apply </p>
                <img src='/image/apply_icon.svg' className='w-4'/>
              </div>
        </div>
      </Link>
  </div>
  )
}