import { Card } from '../Card'

const cardList = [
  {
    title:'Twitter Operator',
    image:'/image/researcher_icon.svg',
    url:'https://forms.gle/mPb92FUDvxhzi2EcA'
  },
  {
    title:'Forum Manager',
    image:'/image/forum_icon.svg',
    url:'https://forms.gle/ChyqWUa4zijd7vTA6'
  },
  {
    title:'Youtube Influencer',
    image:'/image/video_icon.svg',
    url:'https://forms.gle/xQf96wjNbVSwF5jE6'
  },
  {
    title:'Testing Moderator',
    image:'/image/moderator_icon.svg',
    url:'https://forms.gle/JpqPJtfhxKrc5Fmq6'
  },
  {
    title:'Twitter Influencer',
    image:'/image/twitter_icon.svg',
    url:'https://forms.gle/wkzKD9F8oDurijQbA'
  },
  {
    title:'BD Moderator',
    image:'/image/meme_icon.svg',
    url:'https://forms.gle/EQj9dgqUWnyzFL6TA'
  },
  {
    title:'Off-line Activity Manager',
    image:'/image/activity_icon.svg',
    url:'https://forms.gle/Sw412aSEcwo9AVw79'
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
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 md:mt-24'>
          {cardList.map((item) => (
            <Card
              title={item.title}
              image={item.image}
              url={item.url}
              key={item.title}
            />
          ))}
        </div>
      </div>
    </>
  )
}
