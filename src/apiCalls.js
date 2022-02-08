// const getAllMovies = () => {
//   fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
//     .then(response => {
//       if (response.ok) {
//         return response.json()
//       } else {
//         throw new Error('Something went wrong. Please refresh the page or try again later.')
//       }
//     })
//     // .then(data => {
//     //   // this.setState({ movies: data.movies })
//     //   //invoke utils.js cleaningfile(data)
//     //   console.log(cleanData(data))
//     // })
//     // .catch(error => {
//     //   this.setState({ error: error.message })
//     // })
// }

// const cleanData = data => {
  
//     const cleanedData = data.movies.map(movie => {

//     const splitDate = movie.release_date.split('-')
//     let [year, month, day] = splitDate
//     const releaseDateFormat = [month, day, year].join('-')

//     return {
//       id: movie.id,
//       poster_path: movie.poster_path,
//       backdrop_path: movie.backdrop_path,
//       title: movie.title,
//       average_rating: movie.average_rating.toFixed(2),
//       release_date: releaseDateFormat
//     }
//   })
//   // this.setState({ movies: cleanedData})
//   return cleanedData;
// }

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

// export { getAllMovies, getIndividualMovie }