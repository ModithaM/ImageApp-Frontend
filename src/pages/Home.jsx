import { useState, useEffect } from "react";
import { getAllImages } from "../services/apiService";
import "../css/Home.css";
import ImageCard from "../components/Image-Card";

function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadAllImages = async () => {
      try {
        const response = await getAllImages(); // dont miss await again ;/
        setImages(response);
      } catch (error) {
        console.log("Fuuuuuuck");
        console.log(error);
      }
    };

    loadAllImages(); // this will run only once when the component is mounted
  }, []);

  return (
    <>
      <h1 className="heading">Latest Movies</h1>
      <div className="imagecrd-container">
        {images.map((image) => (
          <ImageCard key={image.imdbId} imagedetails={image} />
        ))}
      </div>
    </>
  );
}

export default Home;
