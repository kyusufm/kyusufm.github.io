

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// icons
import { FaQuoteLeft, faQuoteLeft } from "react-icons/fa";

// next image
import Image from "next/image";

// import require modules
import { Navigation, Pagination } from "swiper";
import { space } from "postcss/lib/list";

// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Jonathan Brown',
    position: 'Customer',
    message:
      'Gracias!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Kirk Stalagtite',
    position: 'Customer',
    message:
      'Very Nice to collaborate!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Emma Julaeha',
    position: 'Customer',
    message:
      'Looking forward to another chance to collaborate!',
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper 
    navigation={true}
    pagination={{
      clickable: true,
    }}
    modules={[Navigation, Pagination]}
    className="h-[400px]">
      {testimonialData.map((person, index) => {
          return(
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
                {/* avatar name position */}
                <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                  <div className="flex flex-col justify-center text-center">
                    {/* avatar */}
                    <div className="mb-2 mx-auto"> 
                      <Image src={person.image} width={100} height={100} alt='' />
                    </div>
                    {/* name */}
                    <div className="text-lg">
                      {person.name}
                    </div>
                    {/* position */}
                    <div className="text-[12px] uppercase font-extralight tracking-widest"> 
                      {person.position}
                    </div>
                  </div>
                </div>
                {/* quote and message */}
                <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                  {/* quote icon */}
                  <div className="mb-4">
                    <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto" />
                  </div>
                  {/* message */}
                  <div className="xl:text-lg text-center md:text-left">
                    {person.message}
                  </div>
                </div>
              </div>
              
            </SwiperSlide>
          );
      })}
      </Swiper>
    );
};

export default TestimonialSlider;

