import React from 'react';
import Link from 'next/link'

type AvatarCardProps = {
  title?: string;
  image?: string;
  name?: string;
  description?: string;
  twitter_url?: string;
  twitter_username?: string;
};

export function AvatarCard({
  title,
  image,
  name,
  description,
  twitter_url = '/',
  twitter_username,
}:AvatarCardProps){  
  return (
    <div className='bg-#172636/10 border-[1px] border-#1A2835 rounded-[15px] group hover:bg-#5B6872/10 h-[280px] relative'>
      <div className='px-6 py-6 group-hover:px-4'>
        <div className='block group-hover:hidden'>
          <img src={image} className="rounded-full border w-32 h-32 mx-auto"/>
          <h3 className='text-center mt-6 md:text-base text-#9DAFBE font-bold'>{title}</h3>
          <p className='text-center mt-4 md:text-base text-#5B6872'>{name}</p>
        </div>
        <div className='hidden group-hover:block'>
          <p className='text-center text-white text-sm leading-relaxed'>{description}</p>
          <div className='absolute inset-x-0 bottom-0 pb-6'>
            { 
              twitter_url != "/" &&
              <Link href={twitter_url} target="_blank">
                <img src='/image/twitter_logo.png' className='w-12 mx-auto hidden md:block'/>
                <p className='text-white/50 text-sm text-center mt-2 hidden md:block'>{twitter_username}</p>
              </Link>
            }
          </div>
        </div>
      </div>

    </div>
  );


}


