import { Card } from '../Card'

const cardList = [
  {
    id: 1,
    title:'Twitter Influencer',
    image:'/image/researcher_icon.svg',
    url:'https://forms.gle/mPb92FUDvxhzi2EcA',
    description:`Proficient in crafting compelling content surrounding LSD and DeFi on various social media platforms, adept at amplifying StaFi's latest social media releases.`,
  },
  {
    id: 2,
    title:'Community Manager',
    image:'/image/forum_icon.svg',
    url:'https://forms.gle/ChyqWUa4zijd7vTA6',
    description:'We are looking for someone who has a strong understanding of DeFi and LSD and is adept at utilizing social media platforms such as Discord and Telegram for effective community management and operation. The ideal candidate will play a crucial role in enhancing community engagement through their expertise in these areas',
  },
  {
    id: 3,
    title:'Community Supporter',
    image:'/image/twitter_icon.svg',
    url:'https://forms.gle/wkzKD9F8oDurijQbA',
    description:`Proficient in LSD and DeFi, with a comprehensive understanding of StaFi-related products. Skilled in addressing community queries and bolstering StaFi's presence by communicating updates beyond the community perimeter.`,
  },
  {
    id: 4,
    title:'Business Development Moderator',
    image:'/image/meme_icon.svg',
    url:'https://forms.gle/EQj9dgqUWnyzFL6TA',
    description:'Expertise in LSD and DeFi, adept at recognizing market opportunities and integrating DeFi protocols to drive StaFi rToken growth. Additionally, maintains focus on emerging Layer 1 technologies and oversees rLaunchpad for new rToken launches.',
  },
]

export function Warriors() {
  return(
    <>
      <div className="py-12 md:py-24 px-4 md:px-24">
        <img src="/image/beekeeper_icon.png" className="mx-auto w-24"/>
        <h1 className="text-center font-anton text-xl text-#FFA540 tracking-widest">
          Go
        </h1>
        <h2 className="text-white font-anton text-4xl md:text-5xl text-center mt-6 tracking-[.3em]">
          Apply To Be Warrior
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 md:mt-24'>
          {cardList.map((item) => (
            <Card
              title={item.title}
              image={item.image}
              url={item.url}
              description={item.description}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </>
  )
}
