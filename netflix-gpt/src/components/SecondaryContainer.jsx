import React from 'react'
import MovieList from './MovieList'
import {useSelector} from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(state=>state.movies)
  console.log(movies.popularMovies,"moviess")

  if(movies == null)return;
  return (
    <div className=' bg-black'>
      <div className='-mt-158 relative z-20'>
      <MovieList title={"Now Playing"}
       movies={ movies?.nowPlayingMovies}/>
       <MovieList title={"Trending"}
       movies={ movies?.nowPlayingMovies}/>
       <MovieList title={"Popular"}
       movies={ movies?.popularMovies}/>
       <MovieList title={"upcoming Movies"}
       movies={ movies?.nowPlayingMovies}/>
       <MovieList title={"Horror"}
       movies={ movies?.nowPlayingMovies}/>
       </div>
      {/* 
      MovieList- popular
        MovieCard * n
      MoviesList- NowPlaying
      MoviesList - Trending
      MoviesList - Horror
      */}
    </div>
  )
}

export default SecondaryContainer
