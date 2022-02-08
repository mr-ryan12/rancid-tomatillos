const getAllMovies = () => {
  fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Something went wrong. Please refresh the page or try again later.')
      }
    })
    .then(data => {
      // this.setState({ movies: data.movies })
      //invoke utils.js cleaningfile(data)
      cleanData(data)
    })
    // .catch(error => {
    //   this.setState({ error: error.message })
    // })
}

// "id": 694919,
// "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
// "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
// "title": "Money Plane",
// "average_rating": 6.666666666666667,
// "release_date": "2020-09-29"

const cleanData = data => {
  
  const cleanedData = data.movies.map(movie => {
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
  console.log(cleanedData)
  return cleanedData;
}

// const getIndividualMovie = id => {
//   fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
//     .then(response => {
//       if (response.ok) {
//         return response.json()
//       } else {
//         throw new Error('Something went wrong. Please refresh the page or try again later.')
//       }
//     })
// }

export { getAllMovies, cleanData }