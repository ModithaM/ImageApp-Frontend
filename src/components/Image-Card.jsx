import "../css/Image-Card.css";
import Generes from "./Genres";

function ImageCard({ movie }) {
  return (
    <div className="card-container">
      <img
        className="image-main"
        src="https://image.tmdb.org/t/p/w500/1NqwE6LP9IEdOZ57NCT51ftHtWT.jpg"
      ></img>
      <div className="img-details">
        <h3 className="movie-title">Puss IN Boots 2024</h3>
        <p>2024/11/30</p>
        <div className="generes-container">
          <Generes />
          <Generes />
          <Generes />
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
