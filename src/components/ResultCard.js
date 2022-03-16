import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useEffect } from 'react';

export default function ResultCard({movie}) {

  const { addMovieToWatchlist, watchlist } = useContext(GlobalContext)

  let storedMovie = watchlist.find(o => o.id === movie.id)
  
  const watchListDisabled = storedMovie ? true : false; 


 
  return (
    <div className='result-card'>
      <div className='poster-wrapper'>
      {movie.poster_path ? (
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        alt={`${movie.title}  Poster`}/>
      ) : (
        <div className='filter-poster'></div>
      )}
      </div> 
      <div className='info'>
        <div className='header'>
          <h3 className='title'>{movie.title}</h3>
          <h4 className='release.date'>{movie.release_date ? movie.release_date.substring(0,4) : "-" }</h4>
        </div>
        <div className='controls'>
          <button className='btn'
          disabled={watchListDisabled}
          onClick={()=> addMovieToWatchlist(movie)}
          >Ajouter dans les films à regarder</button>
        </div>
      </div>
    </div>
  )
}
