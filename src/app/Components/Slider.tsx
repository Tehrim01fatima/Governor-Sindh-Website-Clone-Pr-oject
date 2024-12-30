'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module
import 'swiper/css';
import 'swiper/css/pagination';

const Slider = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-10">
      <Swiper
        modules={[Pagination, Autoplay]} // Add Autoplay module
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1000, // 1 second delay
          disableOnInteraction: false, // Keeps autoplay running after user interactions
        }}
        className="rounded-lg shadow-lg"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="grid grid-cols-2 gap-4  ">
            <img
              src="/section2card1.jpg"
              alt="Slide 1 Image 1"
              className="w-full h-[300px] md:h-[600px] object-cover rounded-lg "
            />
            <img
              src="/section2caard7.jpg"
              alt="Slide 1 Image 2"
              className="w-full h-[300px] md:h-[600px] object-cover rounded-lg "
            />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/section2card3.jpg"
              alt="Slide 2 Image 1"
              className="w-full h-[300px] md:h-[600px] object-cover rounded-lg "
            />
            <img
              src="/section2card4.jpg"
              alt="Slide 2 Image 2"
              className="w-full h-[300px] md:h-[600px] object-cover rounded-lg "
            />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/section2card5.jpg"
              alt="Slide 3 Image 1"
              className="w-full h-[300px] md:h-[600px] object-cover rounded-lg "
            />
            <img
              src="/section2card6.jpg"
              alt="Slide 3 Image 2"
              className="w-full h-[300px] md:h-[600px] object-cover rounded-lg "
            />
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/section2caard7.jpg"
              alt="Slide 4 Image 1"
              className="w-full h-[300px] md:h-[600px] object-cover rounded-lg "
            />
            <img
              src="/section2card8.jpg"
              alt="Slide 4 Image 2"
              className="w-full h-[300px] md:h-[600px] object-cover rounded-lg "
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
