import "../css/Home.css";
import ImageCard from "../components/Image-Card";

function Home() {
  return (
    <>
      <h1 className="heading">Latest Movies</h1>
      <div className="imagecrd-container">
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
    </>
  );
}

export default Home;
