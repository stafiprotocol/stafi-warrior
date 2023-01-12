import React from 'react';

type RewardsProps = {
  title?: string;
  description?: string;
  image?: string;
  rewardImage1?: string;
  rewardImage2?: string;
  rewards?: string;
  cardStyle?: string;
  tagStyle?: string;
  fontStyle?: string;
};

export function RewardsCard({
  title,
  description,
  image,
  rewardImage1,
  rewardImage2,
  rewards,
  cardStyle,
  tagStyle,
  fontStyle,

}:RewardsProps){
  
  return(
    <>
      <div style={{
        backgroundImage:"linear-gradient(to bottom, rgba(52,50,35,1), rgba(16,15,7,0))",
        borderRadius: "15px",
        border:"1px",
        borderImage:"linear-gradient(90deg,rgba(255,166,52,1),rgba(133,89,33,.57),48.69%)"
        }}>
        
        <div className=''>
          <div >

          </div>
        </div>
      </div>
    </>
  )
}