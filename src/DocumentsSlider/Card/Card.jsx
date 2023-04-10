import Tilt from "react-parallax-tilt";
import "./Card.css";

export default function Card({ card }) {
  return (
    <>
      <div className="overlay">
        <div className="info-wrapper">
          <h1 className="card-name">{card.name}</h1>
          <p className="card-descr">{card.description}</p>
          <div className="card-btn-wrapper">
            <button className="card-btn">Open</button>
          </div>
        </div>
      </div>
      <div className="card-floating">
        <Tilt className="tilt">
          <div className="card">
            <img
              src="https://random.imagecdn.app/300/500"
              className="card-photo"
            />
          </div>
        </Tilt>
      </div>
    </>
  );
}
