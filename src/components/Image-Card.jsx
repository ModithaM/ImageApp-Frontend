import "../css/Image-Card.css";
import Generes from "./Genres";

function ImageCard({ imagedetails }) {
  return (
    <div className="card-container">
      <img
        className="image-main"
        src={imagedetails.poster}
        alt="movie-poster"
      ></img>
      <div className="img-details">
        <h3 className="movie-title">{imagedetails.title}</h3>
        <p>{imagedetails.releaseDate}</p>
        <div className="generes-container">
          {imagedetails.genres.map((genre, index) => (
            <Generes key={index} genre={genre} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
