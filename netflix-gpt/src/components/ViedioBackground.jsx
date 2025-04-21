import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
const ViedioBackground = ({ movieId }) => {
  const trailerVideo = useSelector((state) => state?.movies?.trailerVideo);
  //fetch trailer viedo && updating the trailer vedio data
  useMovieTrailer(movieId);
  return (
    <div>
      <iframe
        className="w-screen aspect-video h-screen"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default ViedioBackground;
