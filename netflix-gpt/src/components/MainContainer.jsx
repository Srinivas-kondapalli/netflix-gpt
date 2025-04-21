import React from 'react'
import {useSelector} from 'react-redux'
import VedioTitle from './VedioTitle';
import ViedioBackground from './ViedioBackground';

const MainContainer = () => {
    const movies = useSelector(state=>state.movies?.nowPlayingMovies);
  //  this is early return
    if(movies == null)return;

    const mainMovie = movies[0];

const {original_title,overview,id}= mainMovie
  return (
    <div>
      <VedioTitle title={original_title} overview={overview}/>
      <ViedioBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
