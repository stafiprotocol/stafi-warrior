import React from "react"
import { BountyCard } from "../BountyCard"

const bountyList = [
  {
    id: 1,
    title: 'Integrate rToken to the popular wallet/dApp',
    description: 'Assist in integrating current rTokens (native/link) into well-known wallets or dapps on their respective chains to boost the acceptance and overall supply of rTokens.',
    amount: '500-1500 $FIS',
    url: 'https://forms.gle/mPb92FUDvxhzi2EcA'
  },
  {
    id: 2,
    title: 'New rToken on the new popular Layer1',
    description: 'StaFi is a multi-chain LSD protocol that offers LSD for Layer 1 networks. Discovering new Layer 1 opportunities and establishing partnerships, list new rTokens on Layer 1 through the rLaunchpad.',
    amount: '500-1500 $FIS',
    url: 'https://forms.gle/mPb92FUDvxhzi2EcA'
  },
  {
    id: 3,
    title: 'LSD reaearch article',
    description: 'Experienced in Liquidity Staking Derivatives (LSD) and DeFi, adept at creating research articles that integrate the most recent advancements and technological trends in LSD. Skilled in generating well-articulated content with a logical flow and a fluent writing style.',
    amount: '500-700 $FIS',
    url: 'https://forms.gle/mPb92FUDvxhzi2EcA'
  },
  {
    id: 4,
    title: 'StaFi Protocol research article',
    description: `Familiar with StaFi's product portfolio and developmental trajectory, adept at composing concise articles that elucidate the latest products and technical aspects of StaFi.`,
    amount: '300-600 $FIS',
    url: 'https://forms.gle/mPb92FUDvxhzi2EcA'
  },
]

export function BountyList() {

  return (
    <div className="py-12 md:py-24 px-6">
      <img src="/image/beekeeper_icon.png" className="mx-auto w-24" />
      <h1 className="text-center font-anton text-xl text-#FFA540 tracking-widest">
        2023Q4-2024Q1
      </h1>
      <h2 className="text-white font-anton text-5xl text-center mt-6 tracking-[.3em]">
        Bounty List
      </h2>
      <div className="px-2 md:px-12 py-12 md:py-16 border-[1px] border-[#1A2835] mt-12 rounded-[15px]" style={{ background: "linear-gradient(180deg, rgba(31, 45, 65, 0.5) -72.35%, rgba(23, 34, 49, 0.339914) 77.97%, rgba(7, 11, 16, 5e-05) 150.61%)" }}>
        <h3 className="text-center text-base md:text-xl text-white font-anton tracking-[.3em] md:tracking-[.3em]">
          Financial Support
        </h3>
        <p className="text-center text-sm md:text-base mt-8 text-#5B6872 leading-relaxed  md:leading-relaxed tracking-wide md:tracking-wide">
          The DAO Treasury will allocate funds to the community as rewards for those contributing to the protocol. Currently, the following tasks are deemed crucial for the protocol's growth. Please submit your contributions, which will undergo community review for rewards. This list will be updated on a monthly basis.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 md:mt-12'>
        {bountyList.map((item) => (
          <BountyCard
            title={item.title}
            url={item.url}
            description={item.description}
            key={item.id}
            amount={item.amount}
          />
        ))}
      </div>
    </div>
  )

}
