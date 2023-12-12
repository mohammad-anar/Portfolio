import Heading from "../../components/Shared/Heading/Heading";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import portfolio1 from "../../assets/a12.png";
import portfolio2 from "../../assets/a11.png";
import portfolio3 from "../../assets/demo.png";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section
      id="skills"
      className="px-12 py-20 lg:px-20  bg-slate-800 my-2 space-y-12"
    >
      <Heading
        title={"Elevate your brand to new heights with our portfolio expertise"}
        subtitle={"Portfolio"}
        center={true}
      />
      <div className="my-12">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/portfolio">
              <img src={portfolio1} />
            </Link>
          </SwiperSlide>
          
          <SwiperSlide>
          <Link to="/portfolio">
              <img src={portfolio2} />
            </Link>
          </SwiperSlide>
          
          <SwiperSlide>
          <Link to="/portfolio">
              <img src={portfolio3} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
          <Link to="/portfolio">
              <img src={portfolio1} />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
