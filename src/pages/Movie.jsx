import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/Movie.css";
import Generes from "../components/Genres";
import { getSingleImage, postReview } from "../services/apiService";

function Movie() {
  const { id } = useParams(); // This is a hook that allows us to access the URL parameters (in this case, the movie ID)
  const [singleMovie, setSingleMovie] = useState({});
  const [reviews, setReviewsId] = useState([]);
  const [reviewInput, setReviewInput] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // this use effect will run only once when the component is mounted and its for get the movie details
  useEffect(() => {
    const loadImage = async () => {
      try {
        const response = await getSingleImage(id); // Fetch the movie details using the ID
        setSingleMovie(response); // Set the movie details
        // If the response contains reviews, set the reviews state
        if (response.reviewIds) {
          setReviewsId(response.reviewIds);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadImage();
  }, []);

  // This useEffect will run every 3 seconds to change the backdrop index
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % singleMovie.backdrops.length
      ); // Loop back to the first image
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, [singleMovie.backdrops]);

  // This function will handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      reviewBody: reviewInput,
      imdbId: singleMovie.imdbId,
    };

    try {
      const response = await postReview(formData); // Post the review
      setReviewsId((reviews) => [...reviews, response]); // Add the new review to the list of reviews
    } catch (error) {
      console.log(error);
    } finally {
      setReviewInput(""); // Clear the input field
    }
  };

  // TODO : map reviews And display them

  return (
    <>
      <h1 className="heading">{singleMovie.title}</h1>
      <div className="movieimg-container">
        <img
          className="movie-backdrops"
          src={
            singleMovie.backdrops && singleMovie.backdrops[currentImageIndex]
          }
          alt="Backdrops"
        />
        <div className="details">
          <div className="left-section">
            <p>
              <b>Release Date:</b> {singleMovie.releaseDate}
            </p>
            <h4>Add Reviews :</h4>
            <form onSubmit={handleSubmit}>
              <textarea
                value={reviewInput}
                onChange={(e) => setReviewInput(e.target.value)}
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
              {singleMovie.genres && // This is a conditional rendering
                singleMovie.genres.map((genre, index) => (
                  <Generes key={index} genre={genre} />
                ))}
            </div>
          </div>
        </div>
        {reviews.length > 0 && (
          <div className="reviews">
            <h4>Reviews :</h4>
            {reviews.map((review) => (
              <div key={review.id} className="review">
                <p>{review.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
export default Movie;
