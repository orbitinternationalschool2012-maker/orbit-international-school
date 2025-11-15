import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BannerGal = () => {
    return (
        <div className="w-full h-[60vh] md:h-[80vh]">
            <Swiper
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                effect="fade"
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                className="h-full"
            >
                <SwiperSlide>
                    <img
                        src="/banner1.jpg"
                        className="w-full h-full object-cover"
                        alt=""
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src="/banner2.jpg"
                        className="w-full h-full object-cover"
                        alt=""
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src="/banner3.jpg"
                        className="w-full h-full object-cover"
                        alt=""
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BannerGal;
