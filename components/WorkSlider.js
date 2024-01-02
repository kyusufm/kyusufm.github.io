//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import { BsArrowRight } from "react-icons/bs";

// next image
import Image from "next/image";

// links
import Link from "next/link";

// import require modules
import { Pagination } from "swiper";
import { space } from "postcss/lib/list";
const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'SE Website',
          desc: 'Debug content on Solve Education Website',
          path: '/thumb1.jpg',
        },
        {
          title: 'TigaExpress',
          path: '/thumb2.jpg',
        },
        {
          title: 'KINSYS',
          path: '/thumb3.jpg',
        },
        {
          title: 'Keceline.co.id',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'Kecegroup Accounting',
          path: '/thumb4.jpg',
        },
        {
          title: 'Kecegroup Domestic',
          path: '/thumb1.jpg',
        },
        {
          title: 'Tiga Expres Courier App',
          path: '/thumb2.jpg',
        },
        {
          title: 'Tiga Sekawan Company Profile',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper 
    spaceBetween={10}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="h-[280px] sm:h-[480px]">
      {workSlider.slides.map((slide, index) => {
          return(
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
                { slide.images.map((image, index) => {
                  return(
                    <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                        <div className="flex items-center justify-center relative overflow-hidden group">
                          {/* image */}
                          <Image src={image.path} width={500} height={300} alt=""/>
                          <div className="absolute inset-0 mx-2 mt-2">{image.title}</div>
                          <div className="btn bg-accent absolute -mt-8 mx-2 font-extralight text-xs">{image.desc}</div>
                          {/* overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                            {/* title */}
                            <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                            <Link href={''} className="hover:text-accent transition-all duration-300">
                              <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                                {/* title part 1 */}
                                <div className="delay-100">LIVE</div>
                                {/* title part 2 */}
                                <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150"> PROJECT</div>
                                {/* title part 3 */}
                                <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-300"> 
                                  <BsArrowRight />
                                </div>
                              </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                    )
                  })
                }  
              </div>            
            </SwiperSlide>
          );
      })}
      </Swiper>
    );
};

export default WorkSlider;
