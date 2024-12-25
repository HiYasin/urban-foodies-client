// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../../assets/Slider/1.png';
import slide2 from '../../assets/Slider/2.png';
import slide3 from '../../assets/Slider/3.png';
import slide4 from '../../assets/Slider/4.png';
import slide5 from '../../assets/Slider/5.jpg';
import slide6 from '../../assets/Slider/6.jpg';
import slide7 from '../../assets/Slider/7.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      effect={'fade'}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}

    >
      <SwiperSlide>
        <div className='flex justify-center items-center rounded-box overflow-hidden object-cover'>
          <img src={slide1} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex justify-center items-center rounded-box overflow-hidden object-cover'>
          <img src={slide2} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex justify-center items-center rounded-box overflow-hidden object-cover'>
          <img src={slide3} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex justify-center items-center rounded-box overflow-hidden object-cover'>
          <img src={slide4} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex justify-center items-center rounded-box overflow-hidden object-cover'>
          <img src={slide5} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex justify-center items-center rounded-box overflow-hidden object-cover'>
          <img src={slide6} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex justify-center items-center rounded-box overflow-hidden object-cover'>
          <img src={slide7} alt="" />
        </div>
      </SwiperSlide>

    </Swiper>
  );
};
