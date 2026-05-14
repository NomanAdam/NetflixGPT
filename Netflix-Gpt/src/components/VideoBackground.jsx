import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

function VideoBackground({ movieId }) {
 const trailerKey = useSelector((state) => state.movie.trailerVideo);

 useMovieTrailer(movieId);

 return (
  <div className="relative w-full h-screen overflow-hidden">
   <iframe
    className="absolute top-1/2 left-1/2 mb-0
               min-w-full min-h-full
               w-[177.77vh] h-[56.25vw]
               -translate-x-1/2 -translate-y-1/2
               pointer-events-none"
    src={`https://www.youtube.com/embed/${trailerKey?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey?.key}`}
    title="Trailer"
    frameBorder="0"
    allow="autoplay; encrypted-media"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
   ></iframe>
  </div>
 );
}

export default VideoBackground;
