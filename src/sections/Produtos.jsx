// import required modules
import { FreeMode, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { RiArrowRightLine } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";

export default function Produtos() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  return (
    <section
      className="bg-[#F8F9F9] py-10 md:py-14 px-5 xl:px-14 -mt-10 lg:mt-20 z-20 sticky"
      id="produtos"
    >
      <div className="flex justify-between items-center">
        <h2 className="font-title text-4xl lg:text-[52px] font-bold text-neutral-800">
          Alguns produtos
        </h2>
        <div className=" items-center gap-5 hidden lg:flex">
          <a
            href="https://www.instagram.com/pig_pins/"
            target="_blank"
            className="hover:opacity-80 flex items-center gap-5"
            rel="noreferrer"
          >
            <span className="font-body font-medium text-xl text-neutral-600">
              Veja mais trabalhos{" "}
            </span>
            <RiArrowRightLine size={32} className="text-neutral-600" />
            <img
              src="/instagram-logo.svg"
              alt="Instagram Logo"
              className="w-11 h-11 p-2.5 border border-neutral-700"
            />
          </a>
          <a href="#contato">
            <button className="uppercase font-title font-medium text-sm text-neutral-50 bg-neutral-800 px-5 py-3 hover:opacity-80 transition-opacity duration-200 z-50 ">
              Saiba mais
            </button>
          </a>
        </div>
      </div>
      <Swiper
        slidesPerView={isTabletOrMobile ? 2 : 5}
        spaceBetween={isTabletOrMobile ? -15 : -10}
        // freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[FreeMode, Scrollbar]}
        className="mt-8 mySwiper"
        // scrollbar={{
        //   hide: true,
        // }}
      >
        <SwiperSlide>
          <img
            src="/pins/pin-1.png"
            alt="Pin personalizado da Pig Pins Metais"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/pins/pin-2.png"
            alt="Pin personalizado da Pig Pins Metais"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/pins/pin-3.png"
            alt="Pin personalizado da Pig Pins Metais"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/pins/pin-4.png"
            alt="Pin personalizado da Pig Pins Metais"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/pins/pin-5.png"
            alt="Pin personalizado da Pig Pins Metais"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/pins/pin-6.png"
            alt="Pin personalizado da Pig Pins Metais"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/pins/pin-7.png"
            alt="Pin personalizado da Pig Pins Metais"
          />
        </SwiperSlide>
      </Swiper>
      <a
        href="https://www.instagram.com/pig_pins/"
        target="_blank"
        className="hover:opacity-80 flex lg:hidden items-center gap-5 justify-between mt-3"
        rel="noreferrer"
      >
        <div className="flex items-center gap-3">
          <span className="font-body font-medium text-xl text-neutral-600">
            Veja mais trabalhos{" "}
          </span>

          <RiArrowRightLine className="w-6 h-6 md:w-8 md:h-8 text-neutral-600" />
        </div>
        <img
          src="/instagram-logo.svg"
          alt="Instagram Logo"
          className="p-2 md:p-2.5 border border-neutral-700"
        />
      </a>
    </section>
  );
}
