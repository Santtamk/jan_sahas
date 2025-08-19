"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

interface eventType {
  cards: { id: number; image: string; title: string }[];
}

const Events = ({ cards }: eventType) => {
  return (
    <div className="w-full h-full  py-10">
      <Swiper
        // Responsive padding for top/bottom + left/right
        // className="py-4 px-2 sm:py-6 sm:px-4 lg:py-8 lg:px-8 "
        // Offsets for left/right shadow breathing room
        // slidesOffsetBefore={10} // mobile small
        // slidesOffsetAfter={10}
        rewind={true}
        // loopFillGroupWithBlank={false} //  avoids blank spaces
        // loop={cards.length > 3} // 👈 only loop if we have more than 3 cards
        // slidesPerGroup={1}
        // watchSlidesProgress={true}
        modules={[Pagination, Scrollbar, Autoplay]}
        spaceBetween={20}
        // loop={true}
        // loopedSlides={cards.length} //  ensures all slides can loop smoothly,
        // breakpoints={{
        //   0: {
        //     slidesPerView: 1,
        //     slidesOffsetBefore: 10,
        //     slidesOffsetAfter: 10,
        //   }, // Mobile
        //   640: {
        //     slidesPerView: 2,
        //     slidesOffsetBefore: 20,
        //     slidesOffsetAfter: 20,
        //   }, // Tablet
        //   1024: {
        //     slidesPerView: 3,
        //     slidesOffsetBefore: 30,
        //     slidesOffsetAfter: 30,
        //   }, // Desktop
        // }}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: true,
        // }}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        <div className="!py-10  !gap-5 !px-4">
          {cards.map((card) => (
            <SwiperSlide
              key={card.id}
              className="rounded-2xl !bg-white mx-auto 
             !w-[250px] 
             !h-[350px] "
            >
              <div className="duration-300">
                <div className="relative w-full h-48">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={150}
                    height={300}
                    className="object-cover rounded-t-lg object-top"
                  />
                </div>
                <div>
                  <div className="p-4">
                    <h3 className="text-lg text-background/80 font-semibold">
                      {card.title}
                    </h3>
                  </div>
                  <div className="mb-4">
                    <button className="inline-flex cursor-pointer items-center gap-2 px-8 py-[0.9375rem] rounded-[2rem] bg-primary text-white transition-all duration-300 hover:scale-103 md:text-sm font-medium text-xs">
                      Read more <FaArrowRightLong size={15} />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      {/* Custom Pagination Styling */}
      <style jsx global>{`
        .swiper-pagination {
          position: relative !important; /* move it into normal flow */
          bottom: 0 !important; /* remove absolute positioning */
          margin-top: 1rem; /* spacing from the slides */
          text-align: center;
        }
        .swiper-pagination-bullet {
          background-color: #primary !important;
          opacity: 0.4;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Events;
