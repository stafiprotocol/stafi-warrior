import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';


type MetaProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  pathname?: string;
};

export function Meta({
  title = 'StaFi Community',
  description = 'test',
  image,
  url = "https://test.com",
  pathname,

}:MetaProps){
  const router = useRouter();
  const imageUrl = url + image;
  const path = pathname || router.pathname;
  
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta name="twitter:site" content="https://warrior.stafi.io/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={imageUrl}></meta>
    </Head>
  );


}