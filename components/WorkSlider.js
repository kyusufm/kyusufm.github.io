//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  BsArrowRight,
  RxArrowTopRight,
} from "react-icons/rx";

// import require modules
import { Pagination } from "swiper";
import { space } from "postcss/lib/list";
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper 
    breakpoints={{
      320:{
        slidesPerView: 1,
        spacceBetween:15,
      },
      640:{
        slidesPerView: 3,
        spaceBetween:15,
      }
    }}
    FreeMode={true}
    pagination ={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="h-[240px] sm:h-[340px]">
      {
        workSlides.slides.map((service, index) => {
          return(
            <SwiperSlide key={index}>
            
            
            </SwiperSlide>
          );
      })}
      </Swiper>
    );
};

export default WorkSlider;
