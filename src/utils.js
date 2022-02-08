const cleanAllMoviesData = data => {
    const cleanedData = data.map(movie => {
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
  return {
    id: movie.id,
    title: movie.title,
    poster_path: movie.poster_path,
    backdrop_path: movie.backdrop_path,
    release_date: movie.release_date,
    overview: movie.overview,
    genres: movie.genres,
    budget: movie.budget,
    revenue: movie.revenue,
    runtime: movie.runtime,
    tagline: movie.tagline,
    average_rating: movie.average_rating
  }
}

export { cleanAllMoviesData, cleanIndividualMovieData }