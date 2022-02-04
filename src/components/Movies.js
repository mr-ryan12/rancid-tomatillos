import React from 'react'
import MovieCard from './MovieCard'
import '../styles/Movies.scss'

const Movies = props => {
  const allMovieCards = props.movies.movies.map(movie => {
    return (
      <MovieCard 
        key={movie.id}
        id={movie.id}
        posterImg={movie.poster_path}
        backdropImg={movie.backdrop_path}
        title={movie.title}
        averageRating={movie.average_rating}
        releaseDate={movie.release_date}
      />
    )
  })
  return (
    <div className="movie-card-container">
      {allMovieCards}
      {/* "id": 337401,
      "poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
      "title": "Mulan",
      "average_rating": 4.909090909090909,
      "release_date": "2020-09-04" */}


      {/* <div className="movie-card">
        <img src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg" />
        <h3>Money Plane</h3>
        <h4>Release Date: 1/2/2021</h4>
        <h4>Rating: 4.98</h4>
      </div>
      <div className="movie-card">
        <img src="https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg" />
        <h3>Mulan</h3>
        <h4>Release Date: 1/22/2021</h4>
        <h4>Rating: 3.40</h4>
      </div>
      <div className="movie-card">
        <img src="https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg" />
        <h3>Rogue</h3>
        <h4>Release Date: 11/22/2021</h4>
        <h4>Rating: 2.98</h4>
      </div>
      <div className="movie-card">
        <img src="https://image.tmdb.org/t/p/original//qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg" />
        <h3>Ava</h3>
        <h4>Release Date: 1/23/2021</h4>
        <h4>Rating: 3.53</h4>
      </div>
      <div className="movie-card">
        <img src="https://image.tmdb.org/t/p/original//sy6DvAu72kjoseZEjocnm2ZZ09i.jpg" />
        <h3>Peninsula</h3>
        <h4>Release Date: 10/21/2022</h4>
        <h4>Rating: 4.99</h4>
      </div>
      <div className="movie-card">
        <img src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg" />
        <h3>Money Plane</h3>
        <h4>Release Date: 1/2/2021</h4>
        <h4>Rating: 4.98</h4>
      </div>
      <div className="movie-card">
        <img src="https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg" />
        <h3>Mulan</h3>
        <h4>Release Date: 1/22/2021</h4>
        <h4>Rating: 3.40</h4>
      </div>
      <div className="movie-card">
        <img src="https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg" />
        <h3>Rogue</h3>
        <h4>Release Date: 11/22/2021</h4>
        <h4>Rating: 2.98</h4>
      </div>
      <div className="movie-card">
        <img src="https://image.tmdb.org/t/p/original//qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg" />
        <h3>Ava</h3>
        <h4>Release Date: 1/23/2021</h4>
        <h4>Rating: 3.53</h4>
      </div>
      <div className="movie-card">
        <img src="https://image.tmdb.org/t/p/original//sy6DvAu72kjoseZEjocnm2ZZ09i.jpg" />
        <h3>Peninsula</h3>
        <h4>Release Date: 10/21/2022</h4>
        <h4>Rating: 4.99</h4>
      </div> */}
    </div>
  )
}

export default Movies