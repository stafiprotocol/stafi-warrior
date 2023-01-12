

export function Recruit() {
  return(
    <>
      <div className="py-12 md:py-24 px-8 md:px-24">
        <img src="/image/beekeeper_icon.png" className="mx-auto w-24"/>
        <h1 className="text-center font-anton text-base md:text-xl text-#FFA540 tracking-widest">
          Recruitment
        </h1>
        <h2 className="text-white font-anton text-4xl md:text-5xl text-center mt-6 tracking-[.3em] md:tracking-[.3em]">
          You will Get
        </h2>
        <div className="px-2 md:px-12 py-12 md:py-16 border-[1px] border-[#1A2835] mt-10 rounded-[15px]" style={{background:"linear-gradient(180deg, rgba(31, 45, 65, 0.5) -72.35%, rgba(23, 34, 49, 0.339914) 77.97%, rgba(7, 11, 16, 5e-05) 150.61%)"}}>
          <h3 className="text-center text-base md:text-xl text-white font-anton tracking-[.3em] md:tracking-[.3em]">
            Financial Support
          </h3>
          <p className="text-center text-sm md:text-base mt-8 text-#5B6872 leading-relaxed  md:leading-relaxed tracking-wide md:tracking-wide">
            Monthly salary base（400～1200$USDT in $FIS) and bonus (0~200$USDT in $FIS) based on the contribution and performance. Apart from that, warriors have the opportunities to get the quarterly Warrior Star Award(500 $FIS) and yearly Thanksgiving Gift (5000 $FIS) rewards.
          </p>
          <div className="mt-12 grid grid-cols-5 md:grid-cols-11 gap-2">
            <div className="col-span-2">
              <img src="/image/usdtprize_icon.svg" className="mx-auto w-14"/>
              <p className="text-sm md:text-base text-[#00F3AB] text-center mt-6"> 400～1200 $USDT </p>
              <p className="text-sm md:text-base text-#5B6872 text-center mt-2"> Salary Base </p>
            </div>
            <div className="col-span-1 text-base text-[#00F3AB] text-center mt-[4.8rem]">
              +
            </div>
            <div className="col-span-2">
              <img src="/image/maxprize_icon.svg" className="mx-auto w-14"/>
              <p className="text-sm md:text-base text-[#00F3AB] text-center mt-6"> Max 200 $USDT </p>
              <p className="text-sm md:text-base text-#5B6872 text-center mt-2"> Bonus </p>
            </div>
            <div className="col-span-1 text-base text-[#00F3AB] text-center mt-[4.8rem] hidden md:block">
              +
            </div>
            <div className="col-span-2">
              <img src="/image/fis_icon.svg" className="mx-auto w-14"/>
              <p className="text-sm md:text-base text-[#00F3AB] text-center mt-6"> 500 FIS </p>
              <p className="text-sm md:text-base text-#5B6872 text-center mt-2"> Warrior Star</p>
            </div>
            <div className="col-span-1 text-base text-[#00F3AB] text-center mt-[4.8rem]">
              +
            </div>
            <div className="col-span-2">
              <img src="/image/5000fis_icon.svg" className="mx-auto w-14"/>
              <p className="text-sm md:text-base text-[#00F3AB] text-center mt-6"> 5000 FIS </p>
              <p className="text-sm md:text-base text-#5B6872 text-center mt-2"> Thanksgiving </p>
            </div>
          </div>
        </div>

        <div className='mt-12 md:mt-24'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            <div className=''>
              <img src="/image/selfgrowth_icon.svg" className='w-14 mx-auto'/>
              <h2 className='text-xl md:text-2xl text-white mt-4 text-center font-anton tracking-[.3rem] md:tracking-[.3rem]'>Self-growth</h2>
              <p className="text-center text-sm md:text-base text-#5B6872 mt-4 md:leading-relaxed leading-relaxed">The efficient assistance and suggestions from Crypto OGs in daily work and ideas.</p>
            </div>
            <div className=''>
              <img src="/image/experties_icon.svg" className='w-14 mx-auto'/>
              <h2 className='text-xl md:text-2xl text-white mt-4 text-center font-anton tracking-[.3rem] md:tracking-[.3rem]'>Expertise Training</h2>
              <p className="text-center text-sm md:text-base text-#5B6872 mt-4 md:leading-relaxed leading-relaxed">Help build the StaFi community in what they are good at and polish professional knowledge & skills.</p>

            </div>
            <div className=''>
              <img src="/image/decisionmaking_icon.svg" className='w-14 mx-auto'/>
              <h2 className='text-xl md:text-2xl text-white mt-4 text-center font-anton tracking-[.3rem] md:tracking-[.3rem]'>Decision Making</h2>
              <p className="text-center text-sm md:text-base text-#5B6872 mt-4 md:leading-relaxed leading-relaxed">Participate in internal team discussions on StaFi products&community.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
