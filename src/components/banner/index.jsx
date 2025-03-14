import React from "react";

import img1 from '../../assets/carousel/1.jpg'
import img2 from '../../assets/carousel/2.webp'
import img3 from '../../assets/carousel/3.jpg'
import img4 from '../../assets/carousel/4.jpg'
import img5 from '../../assets/carousel/5.jpg'
import VerticalCarousel from "../Carousel";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <div className="flex h-min mx-30 ">
      <div className=" flex flex-col flex-1/2  border-black gap-10 ">
        <div className="text-6xl font-bold text-[#2c3e50] leading-[1.5] font-[Arial]" >Revolutionizing Patient Care Innovations</div>
        <div className="font-mono text-2xl "  >Pioneering breakthroughs in clinical research for enhanced patient care and advanced pharmaceutical innovations in India.</div>
        <div>
            <Button    className='bg-[#1638e8] rounded-none cursor-pointer font-mono px-6  py-8 text-xl   hover:bg-[#1638e8]   '   >Explore Innovations</Button>
        </div>
      </div>
      <div className="flex-1/2  border-black ">
      <div className="flex" >
      <VerticalCarousel direction="top"  images={[img1,img2,img3,img4,img5]} />
      <VerticalCarousel  images={[img1,img2,img3,img4,img5]}  direction="bottom" />

      </div>
      </div>
    </div>
  );
};

export default Banner;
