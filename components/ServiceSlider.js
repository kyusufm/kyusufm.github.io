//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// import require modules
import { FreeMode, Pagination } from "swiper";
import { space } from "postcss/lib/list";

// service data
export const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Application Development',
    description: 'From concept to deployment, transforming ideas into feature-rich, fully functional applications.',
  },
  {
    icon: <RxCrop />,
    title: 'Front-End Development',
    description: 'Crafting visually stunning and user-friendly interfaces that captivate and engage.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Back-End Development',
    description: 'Building robust server-side solutions for seamless functionality and performance.',
  },
  
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Weave words into your success story. From captivating content to SEO optimization, lets craft messaging that engages, converts, and establishes a memorable brand voice',
  },
  {
    icon: <RxRocket />,
    title: 'UI Design',
    description: 'Elevating user experiences with aesthetically pleasing and intuitive design.',
  },
];

const ServiceSlider = () => {
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
    modules={[FreeMode, Pagination]}
    className="h-[240px] sm:h-[340px]">
      {
        serviceData.map((service, index) => {
          return(
            <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icon */} 
              <div className="text-4xl text-accent mb-4">{service.icon}</div>
              {/* title  and description*/}
              <div className="mb-8">
                <div className="mb-2 text-lg">{service.title}</div>
                <p className="max-w-[350px] leading-normal">{service.description}</p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
              </div>
            </div>
            
            </SwiperSlide>
          );
      })}
      </Swiper>
    );
};

export default ServiceSlider;
