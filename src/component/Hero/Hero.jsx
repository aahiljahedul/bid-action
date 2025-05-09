import React from 'react';
import bannerimg from '../../assets/Banner-min.jpg'

const Hero = () => {
 
  return (
<div>
<div
  className="hero min-h-screen"
  style={{backgroundImage:
      `url(${bannerimg})`
    ,
  }}
>
<div className="hero-overlay"></div>
  <div className="  text-neutral-content  ">
    <div className=" pr-72">
      <h1 className="mb-5 text-6xl  font-bold">Bid on Unique Items from <br /> Around the World</h1>
      <p className="mb-5 text-sm">Discover rare collectibles, luxury goods, and vintage <br />
       treasures in our curated auctions

      </p>
      <button className="btn rounded-2xl"> Explore Auctions</button>
    </div>
  </div>
</div>
</div>
  );
};

export default Hero;
