import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'



function favorite() {
  const {favorites} = useMovieContext()

  if (favorites) {
    return (
      <div className='favorites'>
    <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
        </div>)
  }

  return (
    <div className="favorites-empty">
      <h2>No favorite movies yet</h2>
      <p>start adding movies to your favorites and they will appear here</p>
    </div>
  )
}

export default favorite