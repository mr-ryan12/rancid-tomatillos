const cleanAllMoviesData = data => {
  const sortedMovies = data.sort((a, b) => (a.release_date < b.release_date) - (a.release_date > b.release_date))
  const cleanedData = sortedMovies.map(movie => {
    const splitDate = movie.release_date.split('-')
    let [year, month, day] = splitDate
    const releaseDateFormat = [month, day, year].join('-')

    return {
      id: movie.id,
      poster_path: movie.poster_path,
      backdrop_path: movie.backdrop_path,
      title: movie.title,
      average_rating: movie.average_rating.toFixed(2),
      release_date: releaseDateFormat
    }
  })
  return cleanedData;
}

const cleanIndividualMovieData = movie => {
  const splitDate = movie.release_date.split('-')
  let [year, month, day] = splitDate
  const releaseDateFormat = [month, day, year].join('-')

  return {
    id: movie.id,
    title: movie.title,
    poster_path: movie.poster_path,
    backdrop_path: movie.backdrop_path.includes('NoPhotoAvailable') ? movie.poster_path : movie.backdrop_path,
    release_date: releaseDateFormat,
    overview: movie.overview === '' ? 'No overview available at this time' : movie.overview,
    genres: movie.genres.length === 0 ? 'It\'s a mystery...' : movie.genres.join(', '),
    budget: movie.budget === 0 ? 'N/A' : `$${Intl.NumberFormat('en-US').format(movie.budget)}`,
    revenue: movie.revenue === 0 ? 'N/A' : `$${Intl.NumberFormat('en-US').format(movie.revenue)}`,
    runtime: movie.runtime === 0 ? 'N/A' : `${movie.runtime} minutes`,
    tagline: movie.tagline,
    average_rating: movie.average_rating.toFixed(2)
  }
}

const cleanTrailerData = trailers => {
  const filteredTrailers = trailers.filter(trailer => trailer.key !== "dXd0eyrLS-A")
  return filteredTrailers
}

export { cleanAllMoviesData, cleanIndividualMovieData, cleanTrailerData }