import Tilt from "react-parallax-tilt";
import "./Card.css";

export default function Card({ card }) {
  return (
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
  );
}
