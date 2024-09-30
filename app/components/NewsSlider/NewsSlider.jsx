"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css"; // Core Swiper CSS
import "swiper/css/navigation"; // Navigation styles
import 'swiper/css/effect-coverflow';

import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";


import sliderImage1 from "../../../assets/images/slider/slider1.webp";
import sliderImage2 from "../../../assets/images/slider/slider2.webp";
import sliderImage3 from "../../../assets/images/slider/slider3.webp";
import sliderImage4 from "../../../assets/images/slider/slider4.webp";
import Image from "next/image";

const NewsSlider = () => {
  return (
    <div className="relative z-0 w-full h-full">
      <Swiper
        modules={[EffectCoverflow, Navigation, Autoplay]} // Ensure modules are passed correctly
        navigation={true} // Enable navigation
        effect={'coverflow'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay config
        loop={true} // Enable loop
        className="mySwiper"
      >
        {/* Slider 1 */}
        <SwiperSlide>
          <Image
            src={sliderImage1}
            alt="Slider 1"
            className="w-full h-[350px] object-cover"
          />
          <div className="flex justify-center items-center">
            <div className="w-[482px] h-[47px]  absolute bottom-3 left-0 bg-opacity-65 bg-black text-white p-4">
              <h3 className="text-lg font-semibold">
                AI বদলে দিচ্ছে কাজের ধরন
              </h3>
            </div>
          </div>
        </SwiperSlide>

        {/* Slider 2 */}
        <SwiperSlide>
          <Image
            src={sliderImage2}
            alt="Slider 2"
            className="w-full h-[350px] object-cover"
          />
          <div className="flex justify-center items-center">
            <div className="w-[482px] h-[47px]  absolute bottom-3 left-0 bg-opacity-65 bg-black text-white p-4">
              <h3 className="text-lg text-center font-semibold">
                AI প্রযুক্তি পরিবর্তন
              </h3>
            </div>
          </div>
        </SwiperSlide>

        {/* Slider 3 */}
        <SwiperSlide>
          <Image
            src={sliderImage3}
            alt="Slider 3"
            className="w-full h-[350px] object-cover"
          />
          <div className="w-[482px] h-[47px]  absolute bottom-3 left-0 bg-opacity-65 bg-black text-white p-4">
            <h3 className="text-lg font-semibold">নতুন যুগের সূচনা</h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default NewsSlider;
