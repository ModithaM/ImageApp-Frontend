import "../css/Movie.css";
import Generes from "../components/Genres";
function Movie() {
  return (
    <>
      <h1 className="heading">Puss In Boots</h1>
      <div className="movieimg-container">
        <img
          className="movie-backdrops"
          src="https://image.tmdb.org/t/p/original/r9PkFnRUIthgBp2JZZzD380MWZy.jpg"
          alt="Backdrops"
        />
        <div className="details">
          <div className="left-section">
            <p>
              <b>Release Date:</b> 2024/08/21
            </p>
            <h4>Add Reviews :</h4>
            <form>
              <input type="hidden" name="imdbid" value="Test"></input>
              <textarea
                className="review"
                name="review"
                id="review"
                cols="30"
                rows="5"
                placeholder="Add your review here..."
              ></textarea>
              <button className="submit-review">Submit</button>
            </form>
          </div>
          <div className="right-section">
            <h4>Lables: </h4>
            <div className="generes-container">
              <Generes />
              <Generes />
              <Generes />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Movie;
