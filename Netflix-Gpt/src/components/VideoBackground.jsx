import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

function VideoBackground({ movieId }) {
 const trailerKey = useSelector((state) => state.movie.trailerVideo);

 useMovieTrailer(movieId);

 return (
  <div className="relative w-full h-screen overflow-hidden">
   <iframe
    className="absolute top-0 left-0 w-full h-full scale-125"
    src={`https://www.youtube.com/embed/${trailerKey?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey?.key}`}
    title="Trailer"
    frameBorder="0"
    allow="autoplay; encrypted-media"
   />
  </div>
 );
}

export default VideoBackground;
