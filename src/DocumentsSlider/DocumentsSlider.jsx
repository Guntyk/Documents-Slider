import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import { useHistory, useParams } from "react-router-dom";
import { cards } from "../data";
import Card from "./Card/Card";
import "./DocumentsSlider.css";

export default function DocumentsSlider() {
  const { documentsType } = useParams();
  const { goBack } = useHistory();

  return (
    <>
      <button className="back-btn" onClick={goBack}>
        <BackArrow />
      </button>
      <Swiper
        modules={[Mousewheel, Pagination]}
        speed={800}
        draggable={false}
        centeredSlides={true}
        spaceBetween={30}
        slidesPerView={4}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        className="slider"
      >
        {cards
          .filter((card) => card.attributes.type.slice(-1) === documentsType)
          .map((card) => (
            <SwiperSlide key={card.id}>
              <Card card={card.attributes} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

function BackArrow() {
  return (
    <svg
      cursor="pointer"
      width="30px"
      height="30px"
      fill="#fff"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M7 239c-9.4 9.4-9.4 24.6 0 33.9L143 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-95-95L488 280c13.3 0 24-10.7 24-24s-10.7-24-24-24L81.9 232l95-95c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L7 239z" />
    </svg>
  );
}
