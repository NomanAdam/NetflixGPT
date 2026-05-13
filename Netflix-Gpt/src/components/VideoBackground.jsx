import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

function VideoBackground({ movieId }) {
 const trailerKey = useSelector((state) => state.movie.trailerVideo);
 useMovieTrailer(movieId);
 return (
  <div className="fixed top-0 left-0 w-screen h-screen -z-10">
   <iframe
    className="w-full h-full object-cover"
    width="752"
    height="432"
    src={`https://www.youtube.com/embed/${trailerKey?.key}?autoplay=1&mute=1`}
    title="Trailer"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
   ></iframe>
  </div>
 );
}

export default VideoBackground;
