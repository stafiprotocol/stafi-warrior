import { Disclosure } from '@headlessui/react'
import {AvatarCard} from '../AvatarCard'
import Link from 'next/link'



export function WarriorsList() {
  
  const warriorsModeratorList = [
    {
      id:8,
      title:'BD Moderator',
      avatar:'/image/avatar_kelvin.png',
      name:'Kelvin',
      description:"An Electronics Engineer turned into a Crypto Researcher. Passionate in bridging the gap of No-Coiners to become a Crypto Believer.",
      twitter_url:'https://twitter.com/KelvinAerovall',
      twitter_username:'@KelvinAerovall',
    },
    {
      id:2,
      title:'Discord Manager',
      avatar:'/image/avatar_2.png',
      name:'AlphaTower',
      description:'An Air Traffic Controller by profession and a Web3 enthusiast. A Discord Community Manager/Moderator for Web3 projects.',
      twitter_url:'https://twitter.com/EB_fifth',
      twitter_username:'@EB_fifth', 
    },
    {
      id:3,
      title:'Operator',
      avatar:'/image/avatar_3.png',
      name:'Zanthony',
      description:"A blockchain enthusiast from Nigeria and I'm quite busy making sure you all have the best on StaFi twitter handles.",
      twitter_url:'https://twitter.com/Miles_From_Town',
      twitter_username:'@Mazi55480281',
    },
    {
      id:4,
      title:'Operator',
      avatar:'/image/avatar_4.png',
      name:'Jay Caesar',
      description:"I am a realist, dad's youngest, a blockchain preacher, If you want to discuss come to the forum, let's have some fun 😉",
      twitter_url:'https://twitter.com/Caesar_Jay1',
      twitter_username:'@Caesar_Jay1',
    },
    {
      id:5,
      title:'Testing Moderator',
      avatar:'/image/avatar_5.png',
      name:'Dayal',
      description:"A crypto enthusiast who strongly believes in Blockchain Technology and DeFi. Self-Motivated and Get Going person, a pet lover by nature.",
      twitter_url:'https://twitter.com/DayalKS2',
      twitter_username:'@DayalKS2',
    },
    {
      id:6,
      title:'Editor Moderator',
      avatar:'/image/avatar_6.png',
      name:'Rohit Chatterjee',
      description:"Electronics engineer who loves writing about latest blockchain projects. Recently got into creating NFTs as well.",
      twitter_url:'https://twitter.com/aaboltaabol',
      twitter_username:'@aaboltaabol',
    },
    {
      id:9,
      title:'Operator',
      avatar:'/image/avatar_jupiter.png',
      name:'Jupiter',
      description:"I got into college to study Petroleum Engineering, but instead I coincidentally learnt about blockchain, and it changed my life. Now I'm on a mission to tell others about it.",
      twitter_url:'https://twitter.com/mrrpiusz',
      twitter_username:'@mrrpiusz',
    }
  ]
  const warriorsAmbassadorList = [
    {
      id:2,
      title:'Ambassador',
      avatar:'/image/avatar_8.png',
      name:'Nsikak Joseph',
      description:"I'm a content developer, and graphic designer, with vast experience in the blockchain space. I am driven by the zeal to promote the adoption of crypto in Africa",
      twitter_url:'https://twitter.com/_brownish6',
      twitter_username:'@brownish6',
    },
    {
      id:3,
      title:'Ambassador',
      avatar:'/image/avatar_9.png',
      name:'Delphin Amonle',
      description:'I started out my Blockchain journey since 2019 as "buy-and-hold" person. In only three years of this journey, I have been named Ambassador for some Crypto Brands.',
      twitter_url:'https://twitter.com/delkind26',
      twitter_username:'@delkind26',
    },
    {
      id:6,
      title:'Ambassador',
      avatar:'/image/avatar_sanchez.png',
      name:'Sanchez',
      description:"My deep-rooted passion for cryptocurrencies, DeFi, and blockchain technology has fueled my continuous learning, research, and active participation in the crypto community.",
      twitter_url:'https://twitter.com/kvng_aries',
      twitter_username:'@kvng_aries',
    },
    {
      id:7,
      title:'Ambassador',
      avatar:'/image/avatar_charles.png',
      name:'Charles',
      description:"I'm a 22 year-old Crypto enthusiast from Nigeria. I love to serve humanity in all ways possible. Presently, I see the Crypto-space as a means to serve the technological advancements of humanity.",
      twitter_url:'https://twitter.com/charlesace_',
      twitter_username:'@charlesace_',
    },
    {
      id:8,
      title:'Ambassador',
      avatar:'/image/avatar_jagwa.png',
      name:'Jagwa',
      description:"A freelancer who's a crypto enthusiast. Spreading word of crypto in every way possible though writeups, animations and graphics design.",
      twitter_url:'https://twitter.com/oghene_ganreTM?s=09',
      twitter_username:'@oghene_ganreTM',
    }
  ]


  const ambassdorList = [
    {
      id:1,
      title:'Twitter Influencer',
      description:'Promote StaFi’s products and brand on twitter by using own social influence.',
      url:'https://forms.gle/wkzKD9F8oDurijQbA',
    },
    {
      id:2,
      title:'Youtube Influencer',
      description:'Create product demo and explanatory videos that will help the community understand StaFi’s product and boost the brand promotion of StaFi’s products as a whole.',
      url:'https://forms.gle/xQf96wjNbVSwF5jE6',
    },
    {
      id:3,
      title:'Off-line Activity Manager',
      description:'Arrange off-line meetups and seminars locally for StaFi community member to concentrate the community and expand the branding.',
      url:'https://forms.gle/Sw412aSEcwo9AVw79',
    },
  ]


  return(
    <>
      <div className="py-12 md:py-24 px-6">
        <img src="/image/beekeeper_icon.png" className="mx-auto w-24"/>
        <h1 className="text-center font-anton text-xl text-#FFA540 tracking-widest">
          Warrior
        </h1>
        <h2 className="text-white font-anton text-5xl text-center mt-6 tracking-[.3em]">
          StaFi Community Operator
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-1 md:gap-8 mt-24">

          <div className='col-span-2 mt-10 md:mt-0'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            { warriorsModeratorList.map((item) => (
              <AvatarCard
                key = {item.id}
                title = {item.title}
                name = {item.name}
                image = {item.avatar}
                description = {item.description}
                twitter_url = {item.twitter_url}
                twitter_username = {item.twitter_username}
              />

            ))}

            { warriorsAmbassadorList.map((item) => (
              <AvatarCard
                key = {item.id}
                title = {item.title}
                name = {item.name}
                image = {item.avatar}
                description = {item.description}
                twitter_url = {item.twitter_url}
                twitter_username = {item.twitter_username}
              />

            ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
