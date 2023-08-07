'use client'
import Lottie from "lottie-react";
import animation from "public/coding-animation.json"
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";
import Image from 'next/image'

const Banner = () => {
    return (
        <header>
             <Swiper
       spaceBetween={30}
       effect={"fade"}
       navigation={true}
       pagination={{
         clickable: true,
       }}
       modules={[EffectFade, Navigation, Pagination]}
        className="h-[92vh]"
      >
        <SwiperSlide>
            <div className="w-full h-[92vh]">
                
          <Image fill={true} className="object-cover" src="https://swiperjs.com/demos/images/nature-1.jpg" alt="banner image"  />
          <div>
            <Lottie animationData={animation} loop={true} />
        </div>
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="w-full h-[92vh]">
                
          <Image fill={true} className="object-cover" src="https://swiperjs.com/demos/images/nature-2.jpg" alt="banner image"  />
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="w-full h-[92vh]">
                
          <Image fill={true} className="object-cover" src="https://swiperjs.com/demos/images/nature-3.jpg" alt="banner image"  />
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="w-full h-[92vh]">
              <p></p>  
          <Image fill={true} className="object-cover" src="https://swiperjs.com/demos/images/nature-4.jpg" alt="banner image"  />
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="w-full h-[92vh]">
                
          <Image fill={true} className="object-cover" src="https://swiperjs.com/demos/images/nature-5.jpg" alt="banner image"  />
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="w-full h-[92vh]">
                
          <Image fill={true} className="object-cover" src="https://swiperjs.com/demos/images/nature-6.jpg" alt="banner image"  />
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="w-full h-[92vh]">
                
          <Image fill={true} className="object-cover" src="https://swiperjs.com/demos/images/nature-7.jpg" alt="banner image"  />
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="w-full h-[92vh]">
                
          <Image fill={true} className="object-cover" src="https://swiperjs.com/demos/images/nature-8.jpg" alt="banner image"  />
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="w-full h-[92vh]">
                
          <Image fill={true} className="object-cover" src="https://swiperjs.com/demos/images/nature-9.jpg" alt="banner image"  />
          </div>
        </SwiperSlide>
      </Swiper>
        </header>
    );
};

export default Banner;